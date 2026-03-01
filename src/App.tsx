import { useState } from 'react';
import type { AppScreen, QuestionnaireAnswers } from './types';
import { useStudyPlan } from './hooks/useStudyPlan';
import Welcome from './pages/Welcome';
import Questionnaire from './pages/Questionnaire';
import Loading from './pages/Loading';
import Results from './pages/Results';

export default function App() {
  const [screen, setScreen] = useState<AppScreen>('welcome');
  const [answers, setAnswers] = useState<QuestionnaireAnswers>({});
  const { plan, loading, error, generate, reset } = useStudyPlan();

  const handleStart = () => setScreen('questionnaire');

  const handleSubmit = async (formAnswers: QuestionnaireAnswers) => {
    setAnswers(formAnswers);
    setScreen('loading');
    await generate(formAnswers);
    setScreen('results');
  };

  const handleRestart = () => {
    reset();
    setAnswers({});
    setScreen('welcome');
  };

  if (screen === 'welcome') {
    return <Welcome onStart={handleStart} />;
  }

  if (screen === 'questionnaire') {
    return (
      <Questionnaire
        onSubmit={handleSubmit}
        onBack={() => setScreen('welcome')}
      />
    );
  }

  if (screen === 'loading' || loading) {
    return <Loading />;
  }

  if (screen === 'results' && plan) {
    return (
      <Results plan={plan} answers={answers} onRestart={handleRestart} />
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6">
        <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-8 max-w-md text-center">
          <p className="text-red-400 text-lg font-semibold mb-2">Ops, algo deu errado</p>
          <p className="text-[#a3a3a3] text-sm mb-6">{error}</p>
          <button
            onClick={handleRestart}
            className="px-6 py-3 bg-[#2f3436] text-[#a3a3a3] border border-[#444444] rounded-xl hover:border-[#6c5ce7]/50 transition-colors"
          >
            Tentar Novamente
          </button>
        </div>
      </div>
    );
  }

  return <Welcome onStart={handleStart} />;
}
