import { stepTitles } from '../data/questions';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export default function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="w-full mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-sm text-[#a3a3a3]">
          Etapa {currentStep} de {totalSteps}
        </span>
        <span className="text-sm text-[#a3a3a3]">{stepTitles[currentStep - 1]}</span>
      </div>
      <div className="w-full h-2 bg-[#444444] rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#6c5ce7] to-[#8e44ad] rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
