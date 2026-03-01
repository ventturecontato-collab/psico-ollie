import jsPDF from 'jspdf';
import type { StudyPlan, QuestionnaireAnswers } from '../types';
import { exerciseBank } from '../data/exerciseBank';
import type { BankExercise } from '../types';

const COLORS: Record<string, number[]> = {
  psicologia_da_saude: [147, 197, 253],
  psicologia_experimental_3: [252, 165, 165],
  etica_profissional: [134, 239, 172],
  psicologia_personalidade_2: [196, 181, 253],
  metodo_pesquisa_quantitativa: [253, 230, 138],
  psicologia_desenvolvimento_1: [249, 168, 212],
};

const SUBJECT_LABELS: Record<string, string> = {
  psicologia_da_saude: 'Psicologia da Saude',
  psicologia_experimental_3: 'Psicologia Experimental 3',
  etica_profissional: 'Etica Profissional',
  psicologia_personalidade_2: 'Psicologia da Personalidade 2',
  metodo_pesquisa_quantitativa: 'Metodo de Pesquisa Quantitativa',
  psicologia_desenvolvimento_1: 'Psicologia do Desenvolvimento 1',
};

const DIFFICULTY_LABEL: Record<string, string> = {
  facil: 'Facil',
  medio: 'Medio',
  dificil: 'Dificil',
};

const TYPE_LABEL: Record<string, string> = {
  multipla_escolha: 'Multipla Escolha',
  dissertativa: 'Dissertativa',
  verdadeiro_falso: 'Verdadeiro ou Falso',
  associacao: 'Associacao',
  caso_clinico: 'Caso Clinico',
  calculo: 'Calculo',
};

function checkPageBreak(doc: jsPDF, y: number, needed: number): number {
  if (y + needed > 275) {
    doc.addPage();
    return 20;
  }
  return y;
}

function addPageNumber(doc: jsPDF) {
  const pageCount = doc.getNumberOfPages();
  for (let i = 2; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setTextColor(120, 120, 120);
    doc.text(`${i} / ${pageCount}`, 105, 290, { align: 'center' });
  }
}

export function generateExerciciosPDF(plan: StudyPlan, _answers: QuestionnaireAnswers) {
  const doc = new jsPDF();

  // =========== CAPA ===========
  doc.setFillColor(15, 23, 42);
  doc.rect(0, 0, 210, 297, 'F');

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(32);
  doc.text('Apostila de Exercicios', 105, 70, { align: 'center' });

  doc.setFontSize(16);
  doc.setTextColor(148, 163, 184);
  doc.text('1o Semestre 2026 — Psicologia 3o Periodo', 105, 88, { align: 'center' });

  doc.setFontSize(14);
  doc.setTextColor(96, 165, 250);
  doc.text('120+ exercicios com gabarito', 105, 108, { align: 'center' });

  doc.setFontSize(18);
  doc.setTextColor(255, 255, 255);
  doc.text('6 materias | 20 exercicios cada', 105, 125, { align: 'center' });

  // Lista de materias na capa
  const subjectKeys = Object.keys(exerciseBank);
  let cy = 155;
  for (const key of subjectKeys) {
    const color = COLORS[key] || [209, 213, 219];
    const label = SUBJECT_LABELS[key] || key;
    const count = exerciseBank[key].exercicios.length;
    doc.setFillColor(color[0], color[1], color[2]);
    doc.roundedRect(40, cy - 5, 130, 10, 2, 2, 'F');
    doc.setTextColor(15, 23, 42);
    doc.setFontSize(11);
    doc.text(`${label} (${count} exercicios)`, 105, cy + 2, { align: 'center' });
    cy += 14;
  }

  doc.setFontSize(11);
  doc.setTextColor(100, 116, 139);
  doc.text('Gerado pelo Ollie', 105, 260, { align: 'center' });

  // =========== CONTEUDO POR MATERIA ===========
  for (const subjectKey of subjectKeys) {
    const bank = exerciseBank[subjectKey];
    const gptData = plan.exercicios_por_materia[subjectKey];
    const color = COLORS[subjectKey] || [209, 213, 219];
    const label = SUBJECT_LABELS[subjectKey] || subjectKey;

    // --- Pagina de abertura da materia ---
    doc.addPage();
    let y = 20;

    // Header colorido
    doc.setFillColor(color[0], color[1], color[2]);
    doc.roundedRect(10, y, 190, 14, 3, 3, 'F');
    doc.setTextColor(15, 23, 42);
    doc.setFontSize(18);
    doc.text(label, 105, y + 10, { align: 'center' });
    y += 22;

    // Observacao pessoal do Ollie (do GPT)
    if (gptData?.observacao_pessoal) {
      doc.setFillColor(30, 58, 95);
      const obsLines = doc.splitTextToSize(gptData.observacao_pessoal, 170);
      const obsHeight = obsLines.length * 5 + 12;
      doc.roundedRect(12, y, 186, obsHeight, 3, 3, 'F');

      doc.setTextColor(96, 165, 250);
      doc.setFontSize(11);
      doc.text('Observacao do Ollie para voce:', 18, y + 8);

      doc.setTextColor(200, 220, 255);
      doc.setFontSize(10);
      doc.text(obsLines, 18, y + 16);
      y += obsHeight + 6;
    }

    // Introducao (do GPT)
    if (gptData?.introducao) {
      doc.setTextColor(71, 85, 105);
      doc.setFontSize(10);
      const introLines = doc.splitTextToSize(gptData.introducao, 180);
      doc.text(introLines, 15, y);
      y += introLines.length * 5 + 8;
    }

    // Info
    doc.setTextColor(100, 116, 139);
    doc.setFontSize(9);
    doc.text(`Total: ${bank.exercicios.length} exercicios | Gabarito ao final desta secao`, 15, y);
    y += 10;

    // --- Exercicios ---
    for (let i = 0; i < bank.exercicios.length; i++) {
      const ex = bank.exercicios[i];

      // Estimar espaco necessario
      const enunciadoLines = doc.splitTextToSize(ex.enunciado, 170);
      let neededSpace = 30 + enunciadoLines.length * 5;
      if (ex.alternativas) neededSpace += ex.alternativas.length * 6;
      if (ex.dica_ollie) neededSpace += 12;
      neededSpace = Math.min(neededSpace, 120);

      y = checkPageBreak(doc, y, neededSpace);

      // Numero + titulo + badges
      doc.setFillColor(30, 41, 59);
      doc.roundedRect(12, y - 3, 186, 10, 2, 2, 'F');

      doc.setTextColor(color[0], color[1], color[2]);
      doc.setFontSize(11);
      const titulo = `${i + 1}/${bank.exercicios.length} | ${ex.titulo}`;
      doc.text(titulo, 15, y + 4);

      // Badges de tipo e dificuldade (alinhados a direita)
      doc.setFontSize(7);
      doc.setTextColor(148, 163, 184);
      const badge = `${TYPE_LABEL[ex.tipo] || ex.tipo} | ${DIFFICULTY_LABEL[ex.dificuldade] || ex.dificuldade}`;
      doc.text(badge, 195, y + 4, { align: 'right' });
      y += 12;

      // Topico
      doc.setTextColor(100, 116, 139);
      doc.setFontSize(8);
      doc.text(`Topico: ${ex.topico}`, 15, y);
      y += 6;

      // Enunciado
      doc.setTextColor(51, 65, 85);
      doc.setFontSize(10);
      for (const line of enunciadoLines) {
        y = checkPageBreak(doc, y, 8);
        doc.text(line, 15, y);
        y += 5;
      }
      y += 3;

      // Alternativas (multipla escolha)
      if (ex.alternativas && ex.alternativas.length > 0) {
        for (const alt of ex.alternativas) {
          y = checkPageBreak(doc, y, 8);
          doc.setTextColor(71, 85, 105);
          doc.setFontSize(10);
          const altLines = doc.splitTextToSize(alt, 170);
          for (const aLine of altLines) {
            doc.text(aLine, 20, y);
            y += 5;
          }
          y += 1;
        }
        y += 2;
      }

      // Para dissertativa/caso_clinico - espaco para resposta
      if (ex.tipo === 'dissertativa' || ex.tipo === 'caso_clinico') {
        y = checkPageBreak(doc, y, 8);
        doc.setTextColor(100, 116, 139);
        doc.setFontSize(9);
        doc.text('(Responda no caderno ou em folha separada. Confira o gabarito ao final.)', 15, y);
        y += 8;
      }

      // Verdadeiro ou Falso - indicacao
      if (ex.tipo === 'verdadeiro_falso') {
        y = checkPageBreak(doc, y, 8);
        doc.setTextColor(71, 85, 105);
        doc.setFontSize(10);
        doc.text('( ) Verdadeiro    ( ) Falso', 20, y);
        y += 8;
      }

      // Dica do Ollie
      if (ex.dica_ollie) {
        y = checkPageBreak(doc, y, 12);
        doc.setTextColor(96, 165, 250);
        doc.setFontSize(8);
        const dicaLines = doc.splitTextToSize(`Dica do Ollie: "${ex.dica_ollie}"`, 170);
        for (const dLine of dicaLines) {
          doc.text(dLine, 18, y);
          y += 4;
        }
        y += 4;
      }

      // Separador
      y = checkPageBreak(doc, y, 4);
      doc.setDrawColor(50, 60, 80);
      doc.setLineWidth(0.2);
      doc.line(15, y, 195, y);
      y += 6;
    }

    // --- GABARITO da materia ---
    doc.addPage();
    y = 20;

    doc.setFillColor(color[0], color[1], color[2]);
    doc.roundedRect(10, y, 190, 14, 3, 3, 'F');
    doc.setTextColor(15, 23, 42);
    doc.setFontSize(16);
    doc.text(`GABARITO — ${label}`, 105, y + 10, { align: 'center' });
    y += 22;

    for (let i = 0; i < bank.exercicios.length; i++) {
      const ex = bank.exercicios[i];

      // Estimar espaco
      const respLines = doc.splitTextToSize(ex.resposta, 165);
      const expLines = doc.splitTextToSize(ex.explicacao, 165);
      const needed = 14 + respLines.length * 4.5 + expLines.length * 4.5;

      y = checkPageBreak(doc, y, Math.min(needed, 80));

      // Numero e titulo
      doc.setTextColor(color[0], color[1], color[2]);
      doc.setFontSize(10);
      doc.text(`${i + 1}. ${ex.titulo}`, 15, y);
      y += 6;

      // Resposta
      doc.setTextColor(34, 197, 94);
      doc.setFontSize(9);
      const respostaLabel = formatResposta(ex);
      const resLines = doc.splitTextToSize(`Resposta: ${respostaLabel}`, 165);
      for (const rLine of resLines) {
        y = checkPageBreak(doc, y, 6);
        doc.text(rLine, 18, y);
        y += 4.5;
      }

      // Explicacao
      doc.setTextColor(100, 116, 139);
      doc.setFontSize(8);
      for (const eLine of expLines) {
        y = checkPageBreak(doc, y, 6);
        doc.text(eLine, 18, y);
        y += 4.5;
      }

      y += 4;
    }
  }

  // Numeros de pagina
  addPageNumber(doc);

  doc.save('Ollie_Apostila_Exercicios.pdf');
}

function formatResposta(ex: BankExercise): string {
  if (ex.tipo === 'multipla_escolha') {
    // Encontrar o texto da alternativa correta
    const letter = ex.resposta.trim().toLowerCase();
    const alt = ex.alternativas?.find(a => a.toLowerCase().startsWith(`${letter})`));
    return alt || ex.resposta;
  }
  if (ex.tipo === 'verdadeiro_falso') {
    return ex.resposta;
  }
  // Para dissertativa, caso_clinico, calculo, associacao
  return ex.resposta;
}
