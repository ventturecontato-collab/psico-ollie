export interface Subject {
  id: string;
  nome: string;
  professor?: string;
  avaliacao: string[];
  cor: string;
  tipo: 'obrigatoria' | 'estagio' | 'optativa';
}

export const subjects: Subject[] = [
  {
    id: 'psicologia_da_saude',
    nome: 'Psicologia da Saúde',
    avaliacao: ['Relatórios de visita', 'Apresentação oral'],
    cor: '#93C5FD',
    tipo: 'obrigatoria',
  },
  {
    id: 'psicologia_experimental_3',
    nome: 'Psicologia Experimental 3',
    avaliacao: ['Prova 1', 'Prova 2', 'Prova 3'],
    cor: '#FCA5A5',
    tipo: 'obrigatoria',
  },
  {
    id: 'etica_profissional',
    nome: 'Ética Profissional',
    avaliacao: ['Apresentação oral', 'Reflexão crítica'],
    cor: '#86EFAC',
    tipo: 'obrigatoria',
  },
  {
    id: 'psicologia_personalidade_2',
    nome: 'Psicologia da Personalidade 2',
    avaliacao: ['Fichamento', 'Resenha'],
    cor: '#C4B5FD',
    tipo: 'obrigatoria',
  },
  {
    id: 'metodo_pesquisa_quantitativa',
    nome: 'Método de Pesquisa Quantitativa',
    avaliacao: ['Prova 1', 'Prova 2', 'Projeto'],
    cor: '#FDE68A',
    tipo: 'obrigatoria',
  },
  {
    id: 'psicologia_desenvolvimento_1',
    nome: 'Psicologia do Desenvolvimento 1',
    avaliacao: ['Participação/discussão'],
    cor: '#F9A8D4',
    tipo: 'obrigatoria',
  },
  {
    id: 'estagio_escolar',
    nome: 'Estágio: Psicologia Escolar e Educacional',
    avaliacao: ['Relatório de estágio', 'Supervisão'],
    cor: '#D1D5DB',
    tipo: 'estagio',
  },
  {
    id: 'cinema_psicologia',
    nome: 'Cinema e Psicologia',
    avaliacao: ['Trabalho final'],
    cor: '#D1D5DB',
    tipo: 'optativa',
  },
];

export const subjectNameMap: Record<string, string> = {
  psicologia_da_saude: 'Psicologia da Saúde',
  psicologia_experimental_3: 'Psicologia Experimental 3',
  etica_profissional: 'Ética Profissional',
  psicologia_personalidade_2: 'Psicologia da Personalidade 2',
  metodo_pesquisa_quantitativa: 'Método de Pesquisa Quantitativa',
  psicologia_desenvolvimento_1: 'Psicologia do Desenvolvimento 1',
  estagio_escolar: 'Estágio: Psicologia Escolar e Educacional',
  cinema_psicologia: 'Cinema e Psicologia',
};
