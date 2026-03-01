export const subjectColors: Record<string, string> = {
  'Psicologia da Saúde': '#93C5FD',
  'Psicologia Experimental 3': '#FCA5A5',
  'Ética Profissional': '#86EFAC',
  'Psicologia da Personalidade 2': '#C4B5FD',
  'Método de Pesquisa Quantitativa': '#FDE68A',
  'Psicologia do Desenvolvimento 1': '#F9A8D4',
  'Cinema e Psicologia': '#D1D5DB',
  'Estágio: Psicologia Escolar e Educacional': '#D1D5DB',
  'AULA': '#D1D5DB',
};

export const subjectColorsTailwind: Record<string, string> = {
  'Psicologia da Saúde': 'bg-blue-300',
  'Psicologia Experimental 3': 'bg-red-300',
  'Ética Profissional': 'bg-green-300',
  'Psicologia da Personalidade 2': 'bg-purple-300',
  'Método de Pesquisa Quantitativa': 'bg-yellow-300',
  'Psicologia do Desenvolvimento 1': 'bg-pink-300',
};

export function getSubjectColor(materia: string): string {
  return subjectColors[materia] || '#D1D5DB';
}

export function getSubjectBgClass(materia: string): string {
  return subjectColorsTailwind[materia] || 'bg-gray-300';
}
