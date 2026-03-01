import { useState, useEffect } from 'react';
import type { AppScreen, QuestionnaireAnswers } from './types';
import { useStudyPlan } from './hooks/useStudyPlan';
import { savePlan, loadPlan } from './lib/api';
import Welcome from './pages/Welcome';
import Questionnaire from './pages/Questionnaire';
import Loading from './pages/Loading';
import Results from './pages/Results';

export default function App() {
  const [screen, setScreen] = useState<AppScreen>('welcome');
  const [answers, setAnswers] = useState<QuestionnaireAnswers>({});
  const [planId, setPlanId] = useState<string | null>(null);
  const { plan, loading, error, generate, reset, setPlan } = useStudyPlan();

  // Check URL for shared plan on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('plan');
    if (id) {
      setScreen('loading');
      loadPlan(id).then((result) => {
        if (result) {
          setPlan(result.plan);
          setAnswers(result.answers);
          setPlanId(id);
          setScreen('results');
        } else {
          setScreen('welcome');
        }
      });
    }
  }, []);

  const handleStart = () => setScreen('questionnaire');

  const handleSubmit = async (formAnswers: QuestionnaireAnswers) => {
    setAnswers(formAnswers);
    setScreen('loading');
    const result = await generate(formAnswers);
    if (result) {
      const id = await savePlan(formAnswers, result);
      if (id) {
        setPlanId(id);
        window.history.replaceState(null, '', `?plan=${id}`);
      }
    }
    setScreen('results');
  };

  const handleRestart = () => {
    reset();
    setAnswers({});
    setPlanId(null);
    window.history.replaceState(null, '', window.location.pathname);
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
      <Results plan={plan} answers={answers} planId={planId} onRestart={handleRestart} />
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
