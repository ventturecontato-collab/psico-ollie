import type { Question } from '../types';

const SUBJECTS = [
  'Psicologia da Saúde',
  'Psicologia Experimental 3',
  'Ética Profissional',
  'Psicologia da Personalidade 2',
  'Método de Pesquisa Quantitativa',
  'Psicologia do Desenvolvimento 1',
];

const DAYS = [
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado',
  'Domingo',
];

export const stepTitles = [
  'Tempo e Rotina',
  'Dificuldade e Facilidade por Matéria',
  'Cansaço Mental e Foco',
  'Estilo de Aprendizagem',
  'Perfil Emocional e Motivação',
  'Autoconhecimento Acadêmico',
];

export const questions: Question[] = [
  // ETAPA 1 — Tempo e Rotina
  {
    id: 'p1',
    step: 1,
    question: 'Quanto tempo você pode dedicar aos estudos nos dias de semana?',
    type: 'radio',
    options: ['1 a 2 horas', '2 a 3 horas', '3 a 4 horas', '4 a 5 horas ou mais'],
    required: true,
  },
  {
    id: 'p2',
    step: 1,
    question: 'Você tem o costume de estudar no fim de semana? Se sim, quando e por quanto tempo?',
    type: 'radio',
    options: ['Não', 'Sim, 1 hora', 'Sim, 2 horas', 'Sim, 3 horas ou mais'],
    required: true,
  },
  {
    id: 'p23',
    step: 1,
    question: 'Você pretende fazer a optativa de Cinema e Psicologia na Quarta-feira de manhã?',
    type: 'radio',
    options: ['Sim', 'Não'],
    required: true,
  },
  {
    id: 'p3',
    step: 1,
    question: 'Quais dias da sua semana são os mais cheios ou cansativos?',
    type: 'checkbox',
    options: DAYS,
    required: true,
  },

  // ETAPA 2 — Dificuldade e Facilidade por Matéria
  {
    id: 'p4',
    step: 2,
    question: 'Qual matéria você acredita que terá mais dificuldade?',
    type: 'checkbox',
    options: SUBJECTS,
    required: true,
  },
  {
    id: 'p5',
    step: 2,
    question: 'Qual matéria você acredita que terá mais facilidade?',
    type: 'checkbox',
    options: SUBJECTS,
    required: true,
  },
  {
    id: 'p6',
    step: 2,
    question: 'Com quais matérias você já teve algum contato?',
    type: 'checkbox',
    options: SUBJECTS,
    required: true,
  },
  {
    id: 'p7',
    step: 2,
    question: 'Quais matérias parecem mais conectadas com quem você quer ser?',
    type: 'checkbox',
    options: SUBJECTS,
    required: true,
  },

  // ETAPA 3 — Cansaço Mental e Foco
  {
    id: 'p8',
    step: 3,
    question: 'Qual matéria te causaria mais cansaço mental?',
    type: 'checkbox',
    options: SUBJECTS,
    required: true,
  },
  {
    id: 'p9',
    step: 3,
    question: 'Depois de quanto tempo estudando você costuma perder o foco?',
    type: 'radio',
    options: ['Menos de 1 hora', '1h–1:30h', '1:30h–2h', 'Mais de 2h'],
    required: true,
  },
  {
    id: 'p10',
    step: 3,
    question: 'O que tira seu foco?',
    type: 'checkbox',
    options: [
      'Celular / Aparelhos eletrônicos',
      'Distrações do ambiente',
      'Desorganização',
      'Sono',
    ],
    required: true,
  },

  // ETAPA 4 — Estilo de Aprendizagem
  {
    id: 'p11',
    step: 4,
    question: 'Que tipo de conteúdo você absorve melhor / te dá mais resultado no aprendizado?',
    type: 'checkbox',
    options: ['Leitura teórica', 'Exercícios', 'Vídeo aulas', 'Discussões', 'Resumos'],
    required: true,
  },
  {
    id: 'p12',
    step: 4,
    question:
      'Você prefere estudar o mesmo assunto por um longo período ou alternar as matérias em blocos curtos?',
    type: 'radio',
    options: [
      'Estudar um único assunto pelo tempo que for necessário',
      'Dividir o estudo em blocos curtos e alternar matérias',
    ],
    required: true,
  },
  {
    id: 'p13',
    step: 4,
    question: 'Ao ler textos densos, você:',
    type: 'radio',
    options: ['Entende bem', 'Entende parcialmente', 'Se perde completamente'],
    required: true,
  },
  {
    id: 'p14',
    step: 4,
    question: 'O que acha mais difícil em matérias teóricas?',
    type: 'checkbox',
    options: ['Entender conceitos', 'Linguagem difícil', 'Volume de leitura', 'Provas discursivas'],
    required: true,
  },

  // ETAPA 5 — Perfil Emocional e Motivação
  {
    id: 'p15',
    step: 5,
    question: 'O estudo te gera mais:',
    type: 'checkbox',
    options: ['Ansiedade', 'Procrastinação', 'Interesse', 'Cansaço', 'Indiferença'],
    required: true,
  },
  {
    id: 'p16',
    step: 5,
    question: 'Que tipo de atividade mais cansa você?',
    type: 'checkbox',
    options: ['Leitura densa', 'Exercícios', 'Produção de trabalhos', 'Escrita / resumos'],
    required: true,
  },
  {
    id: 'p17',
    step: 5,
    question: 'O que mais te motiva a estudar?',
    type: 'checkbox',
    options: [
      'Medo de reprovar',
      'Interesse no tema',
      'Metas futuras',
      'Pressão externa',
      'Satisfação pessoal',
    ],
    required: true,
  },
  {
    id: 'p18',
    step: 5,
    question: 'Você funciona melhor com:',
    type: 'checkbox',
    options: ['Metas curtas', 'Metas longas', 'Prazos rígidos', 'Flexibilidade'],
    required: true,
  },

  // ETAPA 6 — Autoconhecimento Acadêmico
  {
    id: 'p19',
    step: 6,
    question: 'Você tem dificuldade de manter constância na rotina?',
    type: 'radio',
    options: ['Sim', 'Não', 'Médio'],
    required: true,
  },
  {
    id: 'p20',
    step: 6,
    question: 'Você sente necessidade de revisar conteúdos passados?',
    type: 'radio',
    options: ['Sim', 'Não'],
    required: true,
  },
  {
    id: 'p21',
    step: 6,
    question: 'Seu maior problema acadêmico é:',
    type: 'checkbox',
    options: [
      'Falta de foco',
      'Falta de tempo',
      'Dificuldade de conteúdo',
      'Organização',
      'Ansiedade em prova',
    ],
    required: true,
  },
  {
    id: 'p22',
    step: 6,
    question:
      'Já repetiu algum padrão de erro nos estudos em semestres anteriores? Se sim, qual?',
    type: 'text',
    required: false,
  },
];

export function getQuestionsForStep(step: number): Question[] {
  return questions.filter((q) => q.step === step);
}

export const TOTAL_STEPS = 6;
