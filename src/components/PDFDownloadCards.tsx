import { FileText, Heart, Calendar, Download } from 'lucide-react';
import type { StudyPlan } from '../types';
import type { QuestionnaireAnswers } from '../types';
import { generateExerciciosPDF } from '../lib/pdfExercicios';
import { generatePraticasPDF } from '../lib/pdfPraticas';
import { generateCronogramaPDF } from '../lib/pdfCronograma';

interface PDFDownloadCardsProps {
  plan: StudyPlan;
  answers: QuestionnaireAnswers;
}

const cards = [
  {
    icon: FileText,
    title: 'Exercícios por Matéria',
    description: 'Apostila com 120+ exercícios e gabarito',
    bgClass: 'from-[#6c5ce7]/20 to-[#6c5ce7]/5',
    borderClass: 'border-[#6c5ce7]/30',
    iconClass: 'text-[#6c5ce7]',
    btnClass: 'bg-[#6c5ce7] hover:bg-[#5a4bd6]',
    pages: '~40 páginas',
    generator: 'exercicios',
  },
  {
    icon: Heart,
    title: 'Guia de Práticas Pessoais',
    description: 'Técnicas para foco, ansiedade, constância...',
    bgClass: 'from-emerald-500/20 to-emerald-600/10',
    borderClass: 'border-emerald-500/30',
    iconClass: 'text-emerald-400',
    btnClass: 'bg-emerald-500 hover:bg-emerald-600',
    pages: '~4 páginas',
    generator: 'praticas',
  },
  {
    icon: Calendar,
    title: 'Cronograma Semestral',
    description: 'Seu plano dia a dia para o semestre inteiro',
    bgClass: 'from-[#6495ed]/20 to-[#6495ed]/5',
    borderClass: 'border-[#6495ed]/30',
    iconClass: 'text-[#6495ed]',
    btnClass: 'bg-[#6495ed] hover:bg-[#5080d0]',
    pages: '~8 páginas',
    generator: 'cronograma',
  },
];

export default function PDFDownloadCards({ plan, answers }: PDFDownloadCardsProps) {
  const handleDownload = (generator: string) => {
    switch (generator) {
      case 'exercicios':
        generateExerciciosPDF(plan, answers);
        break;
      case 'praticas':
        generatePraticasPDF(plan);
        break;
      case 'cronograma':
        generateCronogramaPDF(plan, answers);
        break;
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {cards.map((card) => {
        const Icon = card.icon;
        return (
          <div
            key={card.generator}
            className={`bg-gradient-to-br ${card.bgClass} border ${card.borderClass} rounded-2xl p-5 flex flex-col`}
          >
            <div className="flex items-center gap-3 mb-3">
              <Icon className={`w-8 h-8 ${card.iconClass}`} />
              <h4 className="font-bold text-[#e5e5e5]">{card.title}</h4>
            </div>
            <p className="text-[#a3a3a3] text-sm mb-4 flex-1">{card.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-[#6e6e6e] text-xs">{card.pages}</span>
              <button
                onClick={() => handleDownload(card.generator)}
                className={`flex items-center gap-2 px-4 py-2 ${card.btnClass} text-white text-sm font-semibold rounded-lg transition-colors`}
              >
                <Download className="w-4 h-4" />
                Baixar
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
