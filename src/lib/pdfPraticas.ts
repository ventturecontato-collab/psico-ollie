import jsPDF from 'jspdf';
import type { StudyPlan } from '../types';

export function generatePraticasPDF(plan: StudyPlan) {
  const doc = new jsPDF();
  const guia = plan.guia_praticas;
  let y = 20;

  // Capa
  doc.setFillColor(15, 23, 42);
  doc.rect(0, 0, 210, 297, 'F');

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(28);
  doc.text('Guia de Práticas Pessoais', 105, 80, { align: 'center' });

  doc.setFontSize(14);
  doc.setTextColor(134, 239, 172);
  doc.text('Técnicas para foco, constância', 105, 95, { align: 'center' });
  doc.text('e bem-estar nos estudos', 105, 105, { align: 'center' });

  doc.setFontSize(12);
  doc.setTextColor(100, 116, 139);
  doc.text('Gerado pelo Ollie', 105, 140, { align: 'center' });

  // Página 2 — Resumo do Perfil
  doc.addPage();
  y = 20;

  doc.setFillColor(30, 41, 59);
  doc.roundedRect(10, y, 190, 10, 3, 3, 'F');
  doc.setTextColor(134, 239, 172);
  doc.setFontSize(16);
  doc.text('Seu Perfil', 105, y + 7, { align: 'center' });
  y += 18;

  doc.setTextColor(71, 85, 105);
  doc.setFontSize(11);
  const resumoLines = doc.splitTextToSize(guia.resumo_perfil, 180);
  doc.text(resumoLines, 15, y);
  y += resumoLines.length * 6 + 12;

  // Seções
  for (const secao of guia.secoes) {
    if (y > 230) {
      doc.addPage();
      y = 20;
    }

    // Título da seção
    doc.setFillColor(30, 41, 59);
    doc.roundedRect(10, y, 190, 12, 3, 3, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(14);
    doc.text(`${secao.icone} ${secao.titulo}`, 15, y + 8);
    y += 20;

    // Técnicas
    for (const tecnica of secao.tecnicas) {
      if (y > 240) {
        doc.addPage();
        y = 20;
      }

      // Nome da técnica
      doc.setTextColor(196, 181, 253);
      doc.setFontSize(13);
      doc.text(`▸ ${tecnica.nome}`, 15, y);
      y += 8;

      // Passo a passo
      doc.setTextColor(71, 85, 105);
      doc.setFontSize(10);
      for (let i = 0; i < tecnica.passo_a_passo.length; i++) {
        if (y > 275) {
          doc.addPage();
          y = 20;
        }
        const stepText = `${i + 1}. ${tecnica.passo_a_passo[i]}`;
        const stepLines = doc.splitTextToSize(stepText, 170);
        doc.text(stepLines, 20, y);
        y += stepLines.length * 5 + 2;
      }
      y += 3;

      // Exercício prático
      if (tecnica.exercicio_pratico) {
        if (y > 260) {
          doc.addPage();
          y = 20;
        }
        doc.setTextColor(96, 165, 250);
        doc.setFontSize(10);
        const exercLines = doc.splitTextToSize(`🎯 Exercício: ${tecnica.exercicio_pratico}`, 170);
        doc.text(exercLines, 18, y);
        y += exercLines.length * 5 + 8;
      }
    }
    y += 5;
  }

  // Tracker Semanal
  if (guia.tracker_semanal) {
    if (y > 200) {
      doc.addPage();
      y = 20;
    }

    doc.setFillColor(30, 41, 59);
    doc.roundedRect(10, y, 190, 12, 3, 3, 'F');
    doc.setTextColor(253, 230, 138);
    doc.setFontSize(14);
    doc.text('📊 Tracker Semanal', 15, y + 8);
    y += 20;

    const dias = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];
    const cellW = 25;
    const startX = 15;

    // Header
    doc.setFillColor(51, 65, 85);
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(9);
    for (let i = 0; i < dias.length; i++) {
      doc.roundedRect(startX + i * cellW, y, cellW - 2, 10, 1, 1, 'F');
      doc.text(dias[i], startX + i * cellW + cellW / 2 - 1, y + 7, { align: 'center' });
    }
    y += 14;

    // 4 linhas em branco para preencher
    for (let row = 0; row < 4; row++) {
      for (let i = 0; i < dias.length; i++) {
        doc.setDrawColor(51, 65, 85);
        doc.roundedRect(startX + i * cellW, y, cellW - 2, 12, 1, 1, 'S');
      }
      y += 16;
    }

    doc.setTextColor(100, 116, 139);
    doc.setFontSize(9);
    doc.text('Marque com ✓ cada dia que você praticou a técnica!', 105, y + 5, { align: 'center' });
  }

  doc.save('Ollie_Praticas.pdf');
}
