export interface VideoItem {
  url: string;
  title: string;
}

export interface VideoCategory {
  subject: string;
  videos: VideoItem[];
}

export const youtubeVideos: VideoCategory[] = [
  {
    subject: 'Psicologia Experimental',
    videos: [
      {
        url: 'https://www.youtube.com/watch?v=0h7OLgrDZ-c',
        title: 'Psicologia Experimental: Variáveis dependente e independente',
      },
      {
        url: 'https://www.youtube.com/watch?v=I5mHdNiMvto',
        title: 'Método Experimental na Psicologia (introdução às variáveis)',
      },
      {
        url: 'https://www.youtube.com/watch?v=gGKlJL34tH4',
        title: 'Desenvolvendo um problema de pesquisa: variáveis de pesquisa',
      },
    ],
  },
  {
    subject: 'Pesquisa Quantitativa & Estatística',
    videos: [
      {
        url: 'https://www.youtube.com/watch?v=nj_rnLiIvlk',
        title: 'AULA 01 – Estatística Aplicada à Psicologia',
      },
      {
        url: 'https://www.youtube.com/watch?v=wjX9Gz6Dma4',
        title: 'AULA 02 – Estatística (distribuição de frequência/probabilidade)',
      },
      {
        url: 'https://www.youtube.com/watch?v=2I7MV6t4pAg',
        title: 'Tipos de pesquisa em Psicologia quantitativa e qualitativa',
      },
    ],
  },
  {
    subject: 'Teorias da Personalidade',
    videos: [
      {
        url: 'https://www.youtube.com/watch?v=O59T819OpWg',
        title: 'Big Five – Entendendo o modelo de personalidade',
      },
      {
        url: 'https://www.youtube.com/watch?v=jER-QttUP7I',
        title: 'Introdução à teoria Big Five da personalidade',
      },
      {
        url: 'https://www.youtube.com/watch?v=bwitn1TWLZY',
        title: 'Características dos Big Five da personalidade',
      },
    ],
  },
  {
    subject: 'Código de Ética do Psicólogo',
    videos: [
      {
        url: 'https://www.youtube.com/watch?v=z2kaHJx5RYs',
        title: 'Código de Ética do Psicólogo: princípios fundamentais',
      },
      {
        url: 'https://www.youtube.com/watch?v=jib4xZFnvUQ',
        title: 'Aula sobre Código de Ética – deveres fundamentais',
      },
      {
        url: 'https://www.youtube.com/watch?v=VdS9yJB0uvQ',
        title: 'Resumo essencial do Código de Ética do Psicólogo',
      },
    ],
  },
  {
    subject: 'Psicologia do Desenvolvimento',
    videos: [
      {
        url: 'https://www.youtube.com/watch?v=rWSmmYtryDI',
        title: 'Psicologia do Desenvolvimento: Piaget, Vygotsky e Erikson',
      },
      {
        url: 'https://www.youtube.com/watch?v=rTqWOsAjPeI',
        title: 'Piaget e Vygotsky – síntese das contribuições',
      },
      {
        url: 'https://www.youtube.com/watch?v=whLdhWOOZ-g',
        title: 'Psicologia do Desenvolvimento – Vygotsky (aula específica)',
      },
    ],
  },
];
