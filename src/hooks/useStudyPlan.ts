import { useState } from 'react';
import type { QuestionnaireAnswers, StudyPlan } from '../types';
import { generateStudyPlan } from '../lib/api';

export function useStudyPlan() {
  const [plan, setPlan] = useState<StudyPlan | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generate = async (answers: QuestionnaireAnswers) => {
    setLoading(true);
    setError(null);
    try {
      const result = await generateStudyPlan(answers);
      setPlan(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro desconhecido');
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setPlan(null);
    setError(null);
  };

  return { plan, loading, error, generate, reset };
}
