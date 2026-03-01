import { createClient } from '@supabase/supabase-js';
import type { QuestionnaireAnswers, StudyPlan } from '../types';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

export async function savePlan(answers: QuestionnaireAnswers, plan: StudyPlan): Promise<string | null> {
  if (!supabase) return null;
  const { data, error } = await supabase
    .from('study_plans')
    .insert({ answers, plan_data: plan })
    .select('id')
    .single();
  if (error) {
    console.warn('Failed to save plan:', error.message);
    return null;
  }
  return data.id;
}

export async function loadPlan(id: string): Promise<{ plan: StudyPlan; answers: QuestionnaireAnswers } | null> {
  if (!supabase) return null;
  const { data, error } = await supabase
    .from('study_plans')
    .select('plan_data, answers')
    .eq('id', id)
    .single();
  if (error || !data) return null;
  return { plan: data.plan_data as StudyPlan, answers: data.answers as QuestionnaireAnswers };
}

export async function generateStudyPlan(answers: QuestionnaireAnswers): Promise<StudyPlan> {
  if (!supabase) {
    // Fallback: gerar plano mock para desenvolvimento
    console.warn('Supabase nao configurado. Usando plano mock.');
    return generateMockPlan();
  }

  const { data, error } = await supabase.functions.invoke('generate-study-plan', {
    body: { respostas: answers },
  });

  if (error) {
    throw new Error(`Erro ao gerar plano: ${error.message}`);
  }

  return data as StudyPlan;
}

function generateMockPlan(): StudyPlan {
  return {
    perfil_resumo:
      'Voce apresenta um perfil de estudante comprometido, com tendencia a procrastinar em materias mais densas. Seus pontos fortes incluem interesse genuino em psicologia e capacidade de manter rotina quando motivado. Os principais riscos sao o acumulo de conteudo em Experimental 3 e a resistencia a exercicios de Pesquisa Quantitativa. A estrategia geral deve priorizar revisao espacada e blocos curtos nos dias mais pesados.',
    plano_semanal: {
      segunda: [
        { horario: '7:10-11:30', materia: 'Psicologia da Saúde', atividade: 'AULA', tipo: 'aula', dica: '' },
        { horario: '14:00-17:40', materia: 'Psicologia Experimental 3', atividade: 'AULA', tipo: 'aula', dica: '' },
        { horario: '19:00-19:50', materia: 'Ética Profissional', atividade: 'Leitura de 2 artigos do Código de Ética', tipo: 'estudo', dica: 'Matéria leve pra noite de segunda. Leia com calma, sem pressão.' },
      ],
      terca: [
        { horario: '7:10-11:30', materia: 'Estágio: Psicologia Escolar e Educacional', atividade: 'ESTÁGIO', tipo: 'aula', dica: '' },
        { horario: '14:00-17:40', materia: 'Ética Profissional', atividade: 'AULA', tipo: 'aula', dica: '' },
        { horario: '19:00-20:00', materia: 'Psicologia da Saúde', atividade: 'Revisão de anotações da aula de segunda', tipo: 'estudo', dica: '20 minutos de revisão já ajudam muito!' },
      ],
      quarta: [
        { horario: '7:10-11:30', materia: 'Cinema e Psicologia', atividade: 'AULA (Optativa)', tipo: 'aula', dica: '' },
        { horario: '14:00-17:40', materia: 'Psicologia da Personalidade 2', atividade: 'AULA', tipo: 'aula', dica: '' },
        { horario: '19:00-19:50', materia: 'Psicologia Experimental 3', atividade: 'Revisão rápida de flashcards', tipo: 'estudo', dica: 'Revisão curta — só 15-20 flashcards. Não precisa ser longa!' },
      ],
      quinta: [
        { horario: '7:10-11:30', materia: 'Método de Pesquisa Quantitativa', atividade: 'AULA', tipo: 'aula', dica: '' },
        { horario: '14:00-15:30', materia: 'Método de Pesquisa Quantitativa', atividade: 'Exercícios práticos da aula de hoje', tipo: 'estudo', dica: 'Conteúdo fresco! Aproveite pra fazer os exercícios agora.' },
        { horario: '15:45-17:15', materia: 'Psicologia Experimental 3', atividade: 'Revisão espaçada + novos flashcards', tipo: 'estudo', dica: 'Sessão principal da semana para Experimental.' },
        { horario: '17:30-18:30', materia: 'Psicologia da Personalidade 2', atividade: 'Leitura fenomenológica com anotações', tipo: 'estudo', dica: 'Mente descansada — melhor momento pra textos densos. Blocos de 1h com pausa.' },
        { horario: '20:00-21:00', materia: 'Psicologia do Desenvolvimento 1', atividade: 'Leitura preparatória para aula de sexta', tipo: 'estudo', dica: 'Leia o texto da semana e anote 3 perguntas para levar pra discussão.' },
      ],
      sexta: [
        { horario: '7:10-11:30', materia: 'Psicologia do Desenvolvimento 1', atividade: 'AULA', tipo: 'aula', dica: '' },
        { horario: '14:00-15:30', materia: 'Psicologia da Personalidade 2', atividade: 'Fichamento do texto da semana', tipo: 'estudo', dica: 'Reescreva cada parágrafo com suas palavras.' },
        { horario: '16:00-17:00', materia: 'Psicologia da Saúde', atividade: 'Escrita de relatório de visita', tipo: 'estudo', dica: 'Não acumule! Escreva enquanto as memórias estão frescas.' },
      ],
      sabado: [],
      domingo: [],
    },
    recomendacoes: [
      'Priorize Psicologia Experimental 3 — com 3 provas, é a matéria que mais exige revisão contínua.',
      'Use quinta-feira à tarde como seu dia principal de estudo pesado.',
      'Nunca estude Personalidade 2 à noite após dia cheio — reserve para quinta ou sexta à tarde.',
      'Crie flashcards de Experimental 3 toda semana e revise com espaçamento crescente.',
      'Para Pesquisa Quantitativa, comece pelos exercícios mais fáceis para ganhar confiança.',
      'Leia o texto de Desenvolvimento 1 toda quinta à noite — chegue preparado para a discussão.',
    ],
    tecnicas_sugeridas: [
      {
        nome: 'Revisão Espaçada',
        descricao: 'Revise o conteúdo em intervalos crescentes: 1 dia, 3 dias, 7 dias, 14 dias. Isso combate a curva do esquecimento.',
        quando_usar: 'Psicologia Experimental 3 — toda semana',
        por_que: 'Com 3 provas, você não pode acumular. A revisão espaçada é a técnica mais eficiente para retenção a longo prazo.',
      },
      {
        nome: 'Pomodoro Adaptado',
        descricao: 'Estude em blocos de 25 minutos focados + 5 minutos de pausa. A cada 4 blocos, pausa de 15 minutos.',
        quando_usar: 'Nos dias mais cansativos (seg/ter/qua à noite)',
        por_que: 'Ajuda a manter o foco mesmo quando está cansado após um dia cheio de aulas.',
      },
      {
        nome: 'Técnica dos 2 Minutos',
        descricao: 'Quando sentir vontade de procrastinar, prometa estudar apenas 2 minutos. Depois de começar, a inércia diminui.',
        quando_usar: 'Quando resistir a começar exercícios de Pesquisa Quantitativa',
        por_que: 'Vence a barreira inicial que é o maior obstáculo para matérias que geram resistência.',
      },
    ],
    alertas: [
      'Psicologia Experimental 3 tem 3 provas — se não mantiver revisão semanal, o acúmulo será irreversível.',
      'Psicologia da Personalidade 2 tem textos fenomenológicos extremamente densos. Se sentir travado, assista um vídeo introdutório ANTES de tentar ler.',
      'Método de Pesquisa Quantitativa exige exercícios práticos regulares. Não basta apenas ler — estatística se aprende fazendo.',
    ],
    meta_semanal: 'Completar pelo menos 2 sessões de revisão de Experimental 3 e 1 lista de exercícios de Pesquisa Quantitativa.',
    exercicios_por_materia: {
      psicologia_da_saude: {
        introducao: 'Psicologia da Saúde é avaliada por relatórios das visitas e apresentação oral. O foco é produção textual e síntese.',
        observacao_pessoal: 'Com seu estilo de aprendizagem, recomendo que faça os exercícios de caso clínico primeiro — eles vão te ajudar muito na escrita dos relatórios. Faça pausas de 10 minutos a cada 50 minutos de estudo. Se sentir ansiedade antes das apresentações orais, pratique a respiração 4-7-8 antes de ensaiar.',
        exercicios: [],
      },
      psicologia_experimental_3: {
        introducao: 'Experimental 3 tem 3 provas sobre memória humana. Exige revisão espaçada e domínio de terminologia técnica.',
        observacao_pessoal: 'Esta é a matéria que mais exige constância! Com 3 provas, a revisão semanal é obrigatória. Comece pelos exercícios de múltipla escolha (mais fáceis) para ganhar confiança, depois avance para os de associação. Use a técnica de revisão espaçada que a própria matéria ensina — meta-aprendizagem!',
        exercicios: [],
      },
      etica_profissional: {
        introducao: 'Ética é avaliada por apresentação oral e reflexão crítica. O conteúdo é o Código de Ética do Psicólogo.',
        observacao_pessoal: 'Boa notícia: esta matéria é mais leve e pode ser estudada nos dias mais cansativos. Faça os exercícios em doses pequenas — 20 minutos por vez é suficiente. Os casos clínicos são ótimos para estudar com colegas em formato de discussão.',
        exercicios: [],
      },
      psicologia_personalidade_2: {
        introducao: 'Personalidade 2 é avaliada por fichamento e resenha de textos fenomenológicos (Husserl, Heidegger, Merleau-Ponty).',
        observacao_pessoal: 'Esta é a matéria mais densa do período. NUNCA estude fenomenologia à noite após dia cheio — reserve para quinta ou sexta à tarde, com a mente descansada. Se travar em um conceito, assista um vídeo introdutório antes de reler. Blocos máximos de 1h com pausa obrigatória.',
        exercicios: [],
      },
      metodo_pesquisa_quantitativa: {
        introducao: 'Pesquisa Quantitativa tem 2 provas + projeto. O foco é exercícios práticos de estatística.',
        observacao_pessoal: 'Estatística se aprende FAZENDO, não lendo. Comece sempre pelos exercícios fáceis para criar confiança. Se sentir resistência, use a técnica dos 2 minutos: "vou fazer só um exercício". Quinta à tarde, logo após a aula, é o melhor momento — conteúdo fresco na memória!',
        exercicios: [],
      },
      psicologia_desenvolvimento_1: {
        introducao: 'Desenvolvimento 1 é avaliado por participação em discussão. Precisa chegar preparado com o texto lido.',
        observacao_pessoal: 'Sua participação em sala depende da preparação prévia. Faça os exercícios de associação na quinta à noite (véspera da aula) — eles vão te dar segurança para participar. Anote 3 perguntas sobre o texto para levar à discussão. Isso garante participação mesmo quando o conteúdo parecer difícil.',
        exercicios: [],
      },
    },
    guia_praticas: {
      resumo_perfil: 'Identifiquei que seus maiores desafios incluem manter a constância nos estudos e lidar com a procrastinação. Não se preocupe — montei técnicas práticas que funcionam pra quem enfrenta isso.',
      secoes: [
        {
          titulo: 'Gestão de Foco',
          icone: '🎯',
          aparece_se: 'Aluno marcou celular ou perde foco rápido',
          tecnicas: [
            {
              nome: 'Pomodoro',
              passo_a_passo: ['Coloque o celular no silencioso fora do alcance', 'Configure timer para 25 minutos', 'Estude com foco total', 'Pausa de 5 minutos', 'Repita 4x, depois pausa de 15 minutos'],
              exercicio_pratico: 'Antes de começar qualquer sessão: 1) Celular longe, 2) Só material necessário aberto, 3) Timer ligado.',
            },
          ],
        },
        {
          titulo: 'Combate à Procrastinação',
          icone: '🚀',
          aparece_se: 'Aluno marcou procrastinação',
          tecnicas: [
            {
              nome: 'Técnica dos 2 Minutos',
              passo_a_passo: ['Quando sentir resistência, prometa apenas 2 minutos', 'Abra o material e comece qualquer coisa', 'Depois de 2 minutos, decida se continua (geralmente sim!)'],
              exercicio_pratico: 'Toda vez que pensar "depois eu faço", troque por "vou fazer só 2 minutos agora".',
            },
          ],
        },
      ],
      tracker_semanal: true,
    },
    cronograma_semestral: {
      meta_semestre: 'Manter revisão semanal de Experimental 3 e entregar projeto de Pesquisa Quantitativa no prazo.',
      horas_semanais: {
        total: 12,
        por_materia: {
          psicologia_da_saude: 1.5,
          psicologia_experimental_3: 3,
          etica_profissional: 1,
          psicologia_personalidade_2: 2.5,
          metodo_pesquisa_quantitativa: 2.5,
          psicologia_desenvolvimento_1: 1.5,
        },
      },
      semana_tipo: {
        segunda: [
          { horario: '19:00-19:50', materia: 'Ética Profissional', atividade: 'Leitura leve', tipo: 'estudo', dica: '' },
        ],
        terca: [
          { horario: '19:00-20:00', materia: 'Psicologia da Saúde', atividade: 'Revisão de anotações', tipo: 'estudo', dica: '' },
        ],
        quarta: [
          { horario: '19:00-19:50', materia: 'Psicologia Experimental 3', atividade: 'Revisão rápida', tipo: 'estudo', dica: '' },
        ],
        quinta: [
          { horario: '14:00-15:30', materia: 'Método de Pesquisa Quantitativa', atividade: 'Exercícios', tipo: 'estudo', dica: '' },
          { horario: '15:45-17:15', materia: 'Psicologia Experimental 3', atividade: 'Revisão espaçada', tipo: 'estudo', dica: '' },
          { horario: '17:30-18:30', materia: 'Psicologia da Personalidade 2', atividade: 'Leitura fenomenológica', tipo: 'estudo', dica: '' },
          { horario: '20:00-21:00', materia: 'Psicologia do Desenvolvimento 1', atividade: 'Leitura preparatória', tipo: 'estudo', dica: '' },
        ],
        sexta: [
          { horario: '14:00-15:30', materia: 'Psicologia da Personalidade 2', atividade: 'Fichamento', tipo: 'estudo', dica: '' },
          { horario: '16:00-17:00', materia: 'Psicologia da Saúde', atividade: 'Relatório', tipo: 'estudo', dica: '' },
        ],
        sabado: [],
        domingo: [],
      },
      fases: [
        { nome: 'Adaptação', semanas: '1-3', periodo: 'Março', foco: 'Criar hábitos e entender o ritmo de cada matéria', metas: ['Montar sistema de flashcards para Experimental 3', 'Definir tema do projeto de Pesquisa Quantitativa'], prioridades_por_materia: { experimental_3: 'Começar flashcards', pesquisa_quanti: 'Definir tema do projeto' } },
        { nome: 'Consolidação', semanas: '4-8', periodo: 'Abril-Maio', foco: 'Carga regular de estudo', metas: ['Revisão espaçada em andamento', 'Primeiros fichamentos de Personalidade 2'], prioridades_por_materia: { experimental_3: 'Revisão espaçada contínua', personalidade_2: 'Primeiros fichamentos' } },
        { nome: 'Aprofundamento', semanas: '9-12', periodo: 'Maio-Junho', foco: 'Carga máxima', metas: ['Preparar para 2a prova de Experimental', 'Finalizar fichamentos'], prioridades_por_materia: { experimental_3: 'Preparação para 2a prova', pesquisa_quanti: '1a prova' } },
        { nome: 'Finalização', semanas: '13-16', periodo: 'Junho-Julho', foco: 'Provas finais e entregas', metas: ['3a prova de Experimental', 'Entrega do projeto de Quanti'], prioridades_por_materia: { experimental_3: '3a prova', pesquisa_quanti: '2a prova + projeto' } },
      ],
      checklist_entregas: [
        { materia: 'Psicologia Experimental 3', entregas: [{ tipo: 'Prova 1', periodo_estimado: 'Abril', status: false }, { tipo: 'Prova 2', periodo_estimado: 'Maio/Junho', status: false }, { tipo: 'Prova 3', periodo_estimado: 'Junho/Julho', status: false }] },
        { materia: 'Método de Pesquisa Quantitativa', entregas: [{ tipo: 'Prova 1', periodo_estimado: 'Maio', status: false }, { tipo: 'Prova 2', periodo_estimado: 'Junho', status: false }, { tipo: 'Projeto', periodo_estimado: 'Julho', status: false }] },
        { materia: 'Psicologia da Personalidade 2', entregas: [{ tipo: 'Fichamento', periodo_estimado: 'Contínuo', status: false }, { tipo: 'Resenha', periodo_estimado: 'Junho', status: false }] },
        { materia: 'Psicologia da Saúde', entregas: [{ tipo: 'Relatórios', periodo_estimado: 'Contínuo', status: false }, { tipo: 'Apresentação', periodo_estimado: 'Junho/Julho', status: false }] },
        { materia: 'Ética Profissional', entregas: [{ tipo: 'Apresentação', periodo_estimado: 'Junho', status: false }, { tipo: 'Reflexão crítica', periodo_estimado: 'Junho/Julho', status: false }] },
        { materia: 'Psicologia do Desenvolvimento 1', entregas: [{ tipo: 'Participação/discussão', periodo_estimado: 'Contínuo', status: false }] },
      ],
    },
  };
}
