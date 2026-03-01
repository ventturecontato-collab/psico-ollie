import { useState } from 'react';
import type { QuestionnaireAnswers } from '../types';
import { getQuestionsForStep, TOTAL_STEPS } from '../data/questions';
import { stepTransitionMessages } from '../data/ollieMessages';
import ProgressBar from '../components/ProgressBar';
import QuestionStep from '../components/QuestionStep';
import Ollie from '../components/Ollie';
import { ArrowLeft, ArrowRight, Send } from 'lucide-react';

interface QuestionnaireProps {
  onSubmit: (answers: QuestionnaireAnswers) => void;
  onBack: () => void;
}

export default function Questionnaire({ onSubmit, onBack }: QuestionnaireProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState<QuestionnaireAnswers>({});
  const [direction, setDirection] = useState<'right' | 'left'>('right');

  const stepQuestions = getQuestionsForStep(currentStep);

  const handleAnswer = (questionId: string, value: string | string[]) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const isStepValid = () => {
    return stepQuestions.every((q) => {
      if (!q.required) return true;
      const answer = answers[q.id];
      if (!answer) return false;
      if (Array.isArray(answer)) return answer.length > 0;
      return answer.length > 0;
    });
  };

  const goNext = () => {
    if (currentStep < TOTAL_STEPS) {
      setDirection('right');
      setCurrentStep((s) => s + 1);
    } else {
      onSubmit(answers);
    }
  };

  const goBack = () => {
    if (currentStep > 1) {
      setDirection('left');
      setCurrentStep((s) => s - 1);
    } else {
      onBack();
    }
  };

  const ollieMsg = stepTransitionMessages[(currentStep - 1) % stepTransitionMessages.length];

  return (
    <div className="min-h-screen flex flex-col px-4 py-6 max-w-2xl mx-auto">
      <ProgressBar currentStep={currentStep} totalSteps={TOTAL_STEPS} />

      <div className="flex items-center gap-3 mb-6">
        <Ollie size="sm" animate={false} />
        <p className="text-[#a3a3a3] text-sm italic">{ollieMsg}</p>
      </div>

      <div
        key={currentStep}
        className={`flex-1 ${direction === 'right' ? 'animate-slide-in-right' : 'animate-slide-in-left'}`}
      >
        <QuestionStep questions={stepQuestions} answers={answers} onAnswer={handleAnswer} />
      </div>

      <div className="flex justify-between mt-8 pb-4">
        <button
          onClick={goBack}
          className="flex items-center gap-2 px-6 py-3 bg-[#2f3436] text-[#a3a3a3] border border-[#444444] rounded-xl hover:border-[#6c5ce7]/50 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar
        </button>

        <button
          onClick={goNext}
          disabled={!isStepValid()}
          className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
            isStepValid()
              ? 'bg-[#6c5ce7] text-white hover:bg-[#5a4bd6] transform hover:scale-105 active:scale-95'
              : 'bg-[#2f3436] text-[#6e6e6e] cursor-not-allowed'
          }`}
        >
          {currentStep === TOTAL_STEPS ? (
            <>
              Gerar Plano <Send className="w-4 h-4" />
            </>
          ) : (
            <>
              Próximo <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </div>
  );
}
