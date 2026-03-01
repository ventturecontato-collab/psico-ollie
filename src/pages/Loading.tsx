import { useState, useEffect } from 'react';
import Ollie from '../components/Ollie';

const STEPS = [
  { label: 'Analisando seu perfil de aprendizagem...', duration: 6 },
  { label: 'Cruzando dados com sua grade curricular...', duration: 6 },
  { label: 'Montando sua grade semanal personalizada...', duration: 6 },
  { label: 'Personalizando técnicas e exercícios...', duration: 8 },
  { label: 'Quase lá! Finalizando seu plano...', duration: 10 },
];

const TOTAL_DURATION = STEPS.reduce((s, step) => s + step.duration, 0);

export default function Loading() {
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsed((t) => Math.min(t + 0.1, TOTAL_DURATION));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // Calculate progress percentage (cap at 95% until actually done)
  const rawProgress = (elapsed / TOTAL_DURATION) * 100;
  const progress = Math.min(rawProgress, 95);

  // Determine current step
  let accumulated = 0;
  let currentLabel = STEPS[STEPS.length - 1].label;
  for (const step of STEPS) {
    accumulated += step.duration;
    if (elapsed < accumulated) {
      currentLabel = step.label;
      break;
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6">
      <Ollie size="lg" />

      <div className="mt-8 flex flex-col items-center gap-6 w-full max-w-md">
        {/* Progress bar */}
        <div className="w-full bg-[#2f3436] rounded-full h-2.5 overflow-hidden">
          <div
            className="h-full bg-[#6c5ce7] rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Percentage */}
        <span className="text-[#6e6e6e] text-sm font-medium">
          {Math.round(progress)}%
        </span>

        {/* Message */}
        <p
          key={currentLabel}
          className="text-[#a3a3a3] text-lg text-center animate-fade-in"
        >
          {currentLabel}
        </p>
      </div>
    </div>
  );
}
