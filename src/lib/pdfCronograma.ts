import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import type { StudyPlan, QuestionnaireAnswers } from '../types';

const SUBJECT_COLORS: Record<string, number[]> = {
  'Psicologia da Saúde': [147, 197, 253],
  'Psicologia Experimental 3': [252, 165, 165],
  'Ética Profissional': [134, 239, 172],
  'Psicologia da Personalidade 2': [196, 181, 253],
  'Método de Pesquisa Quantitativa': [253, 230, 138],
  'Psicologia do Desenvolvimento 1': [249, 168, 212],
};

const DAY_LABELS: Record<string, string> = {
  segunda: 'Segunda',
  terca: 'Terça',
  quarta: 'Quarta',
  quinta: 'Quinta',
  sexta: 'Sexta',
  sabado: 'Sábado',
  domingo: 'Domingo',
};

export function generateCronogramaPDF(plan: StudyPlan, _answers: QuestionnaireAnswers) {
  const doc = new jsPDF();
  const crono = plan.cronograma_semestral;
  let y = 20;

  // Capa
  doc.setFillColor(15, 23, 42);
  doc.rect(0, 0, 210, 297, 'F');

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(28);
  doc.text('Cronograma Semestral', 105, 80, { align: 'center' });

  doc.setFontSize(14);
  doc.setTextColor(196, 181, 253);
  doc.text('Seu plano completo para o', 105, 95, { align: 'center' });
  doc.text('1º Semestre 2026', 105, 105, { align: 'center' });

  doc.setFontSize(12);
  doc.setTextColor(100, 116, 139);
  doc.text('Gerado pelo Ollie', 105, 140, { align: 'center' });

  // Página 2 — Visão Geral
  doc.addPage();
  y = 20;

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(18);
  doc.text('Visão Geral do Semestre', 15, y);
  y += 12;

  // Meta
  doc.setFillColor(30, 41, 59);
  doc.roundedRect(10, y, 190, 10, 3, 3, 'F');
  doc.setTextColor(134, 239, 172);
  doc.setFontSize(11);
  doc.text(`🎯 Meta: ${crono.meta_semestre}`, 15, y + 7);
  y += 18;

  // Horas semanais
  doc.setTextColor(148, 163, 184);
  doc.setFontSize(12);
  doc.text(`Total de horas de estudo/semana: ${crono.horas_semanais.total}h`, 15, y);
  y += 10;

  // Distribuição por matéria
  doc.setFontSize(10);
  for (const [materia, horas] of Object.entries(crono.horas_semanais.por_materia)) {
    const label = materia.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
    const color = Object.entries(SUBJECT_COLORS).find(([k]) =>
      k.toLowerCase().includes(materia.split('_').slice(0, 2).join(' '))
    );
    if (color) {
      doc.setTextColor(color[1][0], color[1][1], color[1][2]);
    } else {
      doc.setTextColor(148, 163, 184);
    }
    doc.text(`  • ${label}: ${horas}h`, 15, y);
    y += 6;
  }
  y += 8;

  // Página 3 — Semana-Tipo
  doc.addPage();
  y = 20;

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(18);
  doc.text('Semana-Tipo', 15, y);
  y += 12;

  doc.setTextColor(100, 116, 139);
  doc.setFontSize(10);
  doc.text('Sua grade semanal padrão de estudo (fora das aulas)', 15, y);
  y += 10;

  const weekDays = ['segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado', 'domingo'];

  for (const day of weekDays) {
    const blocks = crono.semana_tipo[day] || [];
    if (blocks.length === 0) continue;

    if (y > 250) {
      doc.addPage();
      y = 20;
    }

    doc.setFillColor(30, 41, 59);
    doc.roundedRect(10, y, 190, 8, 2, 2, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(11);
    doc.text(DAY_LABELS[day] || day, 15, y + 6);
    y += 12;

    for (const block of blocks) {
      // GPT pode retornar strings simples ou objetos ScheduleBlock
      if (typeof block === 'string') {
        doc.setTextColor(148, 163, 184);
        doc.setFontSize(9);
        const lines = doc.splitTextToSize(`• ${block}`, 175);
        doc.text(lines, 18, y);
        y += lines.length * 5;
      } else {
        const subjectColor = SUBJECT_COLORS[block.materia] || [209, 213, 219];
        doc.setTextColor(subjectColor[0], subjectColor[1], subjectColor[2]);
        doc.setFontSize(9);
        doc.text(`${block.horario}  |  ${block.materia}  —  ${block.atividade}`, 18, y);
        y += 6;
      }
    }
    y += 4;
  }

  // Páginas de Fases
  doc.addPage();
  y = 20;

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(18);
  doc.text('Fases do Semestre', 15, y);
  y += 15;

  for (const fase of crono.fases) {
    if (y > 220) {
      doc.addPage();
      y = 20;
    }

    // Header da fase
    doc.setFillColor(59, 130, 246);
    doc.roundedRect(10, y, 190, 12, 3, 3, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(13);
    doc.text(`${fase.nome} — Semanas ${fase.semanas} (${fase.periodo})`, 15, y + 8);
    y += 18;

    // Foco
    doc.setTextColor(148, 163, 184);
    doc.setFontSize(10);
    doc.text(`Foco: ${fase.foco}`, 15, y);
    y += 8;

    // Metas
    doc.setTextColor(134, 239, 172);
    doc.setFontSize(10);
    doc.text('Metas:', 15, y);
    y += 6;
    doc.setTextColor(71, 85, 105);
    for (const meta of fase.metas) {
      const metaLines = doc.splitTextToSize(`  ☐ ${meta}`, 175);
      doc.text(metaLines, 15, y);
      y += metaLines.length * 5 + 2;
    }
    y += 8;
  }

  // Checklist de Entregas
  doc.addPage();
  y = 20;

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(18);
  doc.text('Checklist de Entregas', 15, y);
  y += 15;

  const tableBody: (string | { content: string; styles?: object })[][] = [];

  for (const subj of crono.checklist_entregas) {
    for (const entrega of subj.entregas) {
      tableBody.push([
        subj.materia,
        entrega.tipo,
        entrega.periodo_estimado,
        '☐',
      ]);
    }
  }

  autoTable(doc, {
    startY: y,
    head: [['Matéria', 'Entrega', 'Período', '✓']],
    body: tableBody,
    theme: 'grid',
    headStyles: {
      fillColor: [30, 41, 59],
      textColor: [255, 255, 255],
      fontSize: 10,
    },
    bodyStyles: {
      fillColor: [15, 23, 42],
      textColor: [148, 163, 184],
      fontSize: 9,
    },
    alternateRowStyles: {
      fillColor: [20, 30, 50],
    },
    columnStyles: {
      0: { cellWidth: 60 },
      1: { cellWidth: 55 },
      2: { cellWidth: 45 },
      3: { cellWidth: 20, halign: 'center' },
    },
    margin: { left: 10, right: 10 },
  });

  doc.save('Ollie_Cronograma.pdf');
}
