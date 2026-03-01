import type { StudyPlan, QuestionnaireAnswers } from '../types';
import { resultMessage } from '../data/ollieMessages';
import Ollie from '../components/Ollie';
import OllieSpeech from '../components/OllieSpeech';
import WeeklySchedule from '../components/WeeklySchedule';
import WeeklyGoal from '../components/WeeklyGoal';
import PDFDownloadCards from '../components/PDFDownloadCards';
import RecommendationCard from '../components/RecommendationCard';
import TechniqueCard from '../components/TechniqueCard';
import AlertBanner from '../components/AlertBanner';
import VideoSection from '../components/VideoSection';
import { useState } from 'react';
import { RotateCcw, Link2, Check } from 'lucide-react';

interface ResultsProps {
  plan: StudyPlan;
  answers: QuestionnaireAnswers;
  planId?: string | null;
  onRestart: () => void;
}

export default function Results({ plan, answers, planId, onRestart }: ResultsProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    if (!planId) return;
    const url = `${window.location.origin}${window.location.pathname}?plan=${planId}`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="min-h-screen px-4 py-8 max-w-4xl mx-auto animate-fade-in">
      {/* Header com Ollie */}
      <div className="flex flex-col items-center mb-8">
        <Ollie size="md" />
        <div className="mt-4">
          <OllieSpeech message={resultMessage} />
        </div>
      </div>

      {/* Resumo do Perfil */}
      <div className="bg-[#2f3436] rounded-2xl p-6 border border-[#444444] mb-6">
        <h3 className="text-lg font-bold text-[#e5e5e5] mb-3">Seu Perfil</h3>
        <p className="text-[#a3a3a3] leading-relaxed">{plan.perfil_resumo}</p>
      </div>

      {/* Meta da Semana */}
      <div className="mb-6">
        <WeeklyGoal goal={plan.meta_semanal} />
      </div>

      {/* Grade Semanal */}
      <div className="mb-6">
        <h3 className="text-lg font-bold text-[#e5e5e5] mb-4">Grade Semanal</h3>
        <WeeklySchedule schedule={plan.plano_semanal} />
      </div>

      {/* PDFs */}
      <div className="mb-6">
        <h3 className="text-lg font-bold text-[#e5e5e5] mb-4">Seus Materiais</h3>
        <PDFDownloadCards plan={plan} answers={answers} />
      </div>

      {/* Aulas Recomendadas */}
      <div className="mb-6">
        <h3 className="text-lg font-bold text-[#e5e5e5] mb-4">Aulas Recomendadas</h3>
        <VideoSection />
      </div>

      {/* Recomendacoes */}
      <div className="mb-6">
        <RecommendationCard recommendations={plan.recomendacoes} />
      </div>

      {/* Tecnicas */}
      {plan.tecnicas_sugeridas.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-bold text-[#e5e5e5] mb-4">Técnicas Sugeridas</h3>
          <div className="space-y-3">
            {plan.tecnicas_sugeridas.map((tech, i) => (
              <TechniqueCard key={i} technique={tech} />
            ))}
          </div>
        </div>
      )}

      {/* Alertas */}
      <div className="mb-8">
        <AlertBanner alerts={plan.alertas} />
      </div>

      {/* Ações */}
      <div className="flex justify-center gap-3 pb-8">
        {planId && (
          <button
            onClick={handleCopyLink}
            className="flex items-center gap-2 px-6 py-3 bg-[#6c5ce7] text-white rounded-xl hover:bg-[#6c5ce7]/80 transition-colors"
          >
            {copied ? <Check className="w-5 h-5" /> : <Link2 className="w-5 h-5" />}
            {copied ? 'Link Copiado!' : 'Copiar Link'}
          </button>
        )}
        <button
          onClick={onRestart}
          className="flex items-center gap-2 px-6 py-3 bg-[#2f3436] text-[#a3a3a3] border border-[#444444] rounded-xl hover:border-[#6c5ce7]/50 transition-colors"
        >
          <RotateCcw className="w-5 h-5" />
          Refazer Questionário
        </button>
      </div>
    </div>
  );
}
