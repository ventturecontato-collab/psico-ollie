export type QuestionType = 'radio' | 'checkbox' | 'text';

export interface Question {
  id: string;
  step: number;
  question: string;
  type: QuestionType;
  options?: string[];
  required: boolean;
}

export interface QuestionnaireAnswers {
  [questionId: string]: string | string[];
}

export interface ScheduleBlock {
  horario: string;
  materia: string;
  atividade: string;
  tipo: 'aula' | 'estudo' | 'estagio';
  dica: string;
}

export interface Technique {
  nome: string;
  descricao: string;
  quando_usar: string;
  por_que: string;
}

export interface Exercise {
  titulo: string;
  tipo: string;
  instrucao: string;
  dica_ollie: string;
}

export interface BankExercise {
  id: string;
  titulo: string;
  tipo: 'multipla_escolha' | 'dissertativa' | 'verdadeiro_falso' | 'associacao' | 'caso_clinico' | 'calculo';
  dificuldade: 'facil' | 'medio' | 'dificil';
  topico: string;
  enunciado: string;
  alternativas?: string[];
  resposta: string;
  explicacao: string;
  dica_ollie: string;
}

export interface SubjectExercises {
  introducao: string;
  observacao_pessoal?: string;
  exercicios: Exercise[];
}

export interface PracticeTechnique {
  nome: string;
  passo_a_passo: string[];
  exercicio_pratico: string;
}

export interface PracticeSection {
  titulo: string;
  icone: string;
  aparece_se: string;
  tecnicas: PracticeTechnique[];
}

export interface SemesterPhase {
  nome: string;
  semanas: string;
  periodo: string;
  foco: string;
  metas: string[];
  prioridades_por_materia: Record<string, string>;
}

export interface DeliveryItem {
  tipo: string;
  periodo_estimado: string;
  status: boolean;
}

export interface SubjectDelivery {
  materia: string;
  entregas: DeliveryItem[];
}

export interface StudyPlan {
  perfil_resumo: string;
  plano_semanal: Record<string, ScheduleBlock[]>;
  recomendacoes: string[];
  tecnicas_sugeridas: Technique[];
  alertas: string[];
  meta_semanal: string;
  exercicios_por_materia: Record<string, SubjectExercises>;
  guia_praticas: {
    resumo_perfil: string;
    secoes: PracticeSection[];
    tracker_semanal: boolean;
  };
  cronograma_semestral: {
    meta_semestre: string;
    horas_semanais: {
      total: number;
      por_materia: Record<string, number>;
    };
    semana_tipo: Record<string, ScheduleBlock[]>;
    fases: SemesterPhase[];
    checklist_entregas: SubjectDelivery[];
  };
}

export type AppScreen = 'welcome' | 'questionnaire' | 'loading' | 'results';
