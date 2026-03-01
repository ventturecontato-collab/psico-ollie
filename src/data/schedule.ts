export interface ClassBlock {
  horario: string;
  materia: string;
  professor: string;
  sala?: string;
  tipo: 'aula' | 'estagio' | 'optativa' | 'livre';
}

export interface DaySchedule {
  dia: string;
  manha: ClassBlock | null;
  tarde: ClassBlock | null;
  nivelCansaco: 'alto' | 'baixo' | 'medio';
  janelaEstudo: string;
}

export const weekSchedule: DaySchedule[] = [
  {
    dia: 'Segunda',
    manha: {
      horario: '7:10–11:30',
      materia: 'Psicologia da Saúde',
      professor: 'Eliane',
      sala: 'P',
      tipo: 'aula',
    },
    tarde: {
      horario: '14:00–17:40',
      materia: 'Psicologia Experimental 3',
      professor: 'Jeanny',
      tipo: 'aula',
    },
    nivelCansaco: 'alto',
    janelaEstudo: 'Só noite (após 18h)',
  },
  {
    dia: 'Terça',
    manha: {
      horario: '7:10–11:30',
      materia: 'Estágio: Psicologia Escolar e Educacional',
      professor: 'Carmen, Cirlei, Luciana, Paula',
      sala: 'A, B, C, D',
      tipo: 'estagio',
    },
    tarde: {
      horario: '14:00–17:40',
      materia: 'Ética Profissional',
      professor: 'Vinícius',
      tipo: 'aula',
    },
    nivelCansaco: 'alto',
    janelaEstudo: 'Só noite (após 18h)',
  },
  {
    dia: 'Quarta',
    manha: {
      horario: '7:10–11:30',
      materia: 'Cinema e Psicologia',
      professor: 'Bruno',
      sala: 'OP',
      tipo: 'optativa',
    },
    tarde: {
      horario: '14:00–17:40',
      materia: 'Psicologia da Personalidade 2',
      professor: 'Tommy',
      tipo: 'aula',
    },
    nivelCansaco: 'alto',
    janelaEstudo: 'Só noite (após 18h)',
  },
  {
    dia: 'Quinta',
    manha: {
      horario: '7:10–11:30',
      materia: 'Método de Pesquisa Quantitativa',
      professor: 'Joaquim',
      sala: 'P',
      tipo: 'aula',
    },
    tarde: null,
    nivelCansaco: 'baixo',
    janelaEstudo: 'Tarde inteira (13:30–22h)',
  },
  {
    dia: 'Sexta',
    manha: {
      horario: '7:10–11:30',
      materia: 'Psicologia do Desenvolvimento 1',
      professor: 'Bruno',
      sala: 'P',
      tipo: 'aula',
    },
    tarde: null,
    nivelCansaco: 'baixo',
    janelaEstudo: 'Tarde inteira (13:30–22h)',
  },
  {
    dia: 'Sábado',
    manha: null,
    tarde: null,
    nivelCansaco: 'baixo',
    janelaEstudo: 'Dia inteiro (se indicado)',
  },
  {
    dia: 'Domingo',
    manha: null,
    tarde: null,
    nivelCansaco: 'medio',
    janelaEstudo: 'Dia inteiro (se indicado)',
  },
];
