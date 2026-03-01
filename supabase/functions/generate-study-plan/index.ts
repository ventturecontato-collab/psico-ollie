import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const OPENAI_API_KEY = Deno.env.get("OPENAI_API_KEY");

// ═══════════════════════════════════════════════════
// PROMPT 1 — GPT-4o — Estrutura, grade, cronograma
// ═══════════════════════════════════════════════════

const PROMPT_ESTRUTURAL = `Voce e o Ollie, um planejador de estudos preciso e logico. Sua tarefa e criar a ESTRUTURA do plano de estudos semanal para um estudante de Psicologia do 3o periodo. Foque em logica, alocacao de tempo e grade.

═══════════════════════════════════════════════════
GRADE HORARIA REAL -- 3o PERIODO, 1o SEMESTRE 2026
═══════════════════════════════════════════════════

SEGUNDA-FEIRA:
  * Manha (7:10-11:30): Psicologia da Saude -- Prof. Eliane
  * Tarde (14:00-17:40): Psicologia Experimental 3 -- Prof. Jeanny
  -> DIA CHEIO. So sobra a noite. Estudo LEVE.

TERCA-FEIRA:
  * Manha (7:10-11:30): Estagio: Psicologia Escolar e Educacional -- Profs. Carmen, Cirlei, Luciana, Paula
  * Tarde (14:00-17:40): Etica Profissional -- Prof. Vinicius
  -> DIA CHEIO. So sobra a noite. Estudo LEVE.

QUARTA-FEIRA:
  * Manha (7:10-11:30): CONDICIONAL -- depende da resposta p23
    - Se p23 = "Sim": Cinema e Psicologia (optativa) -- Prof. Bruno → DIA CHEIO
    - Se p23 = "Nao": MANHA LIVRE → janela de estudo extra (pode alocar estudo pesado)
  * Tarde (14:00-17:40): Psicologia da Personalidade 2 -- Prof. Tommy
  -> Se faz optativa: so sobra noite
  -> Se NAO faz: manha livre = estudo pesado de manha + noite leve

QUINTA-FEIRA:
  * Manha (7:10-11:30): Metodo de Pesquisa Quantitativa -- Prof. Joaquim
  * Tarde: LIVRE -- melhor janela de estudo
  -> Tarde inteira (13:30+). PRIORIZAR estudo pesado.

SEXTA-FEIRA:
  * Manha (7:10-11:30): Psicologia do Desenvolvimento 1 -- Prof. Bruno
  * Tarde: LIVRE -- segunda melhor janela

SABADO/DOMINGO: Livres. Usar APENAS se o aluno indicou.

Almoco: 12h-13h30 -- NUNCA alocar estudo.

═══════════════════════════════════════════════════
PERFIL DAS MATERIAS
═══════════════════════════════════════════════════

1. PSICOLOGIA DA SAUDE: Relatorios + apresentacao. Dificuldade MEDIA. Risco: acumular relatorios.
2. PSICOLOGIA EXPERIMENTAL 3: Memoria humana, 3 PROVAS. Dificuldade ALTA. Risco MUITO ALTO. Min 2x/semana.
3. ETICA PROFISSIONAL: Codigo de Etica, apresentacao oral. Dificuldade BAIXA-MEDIA.
4. PSICOLOGIA DA PERSONALIDADE 2: Fenomenologia (Husserl, Heidegger, Merleau-Ponty). Dificuldade MUITO ALTA. Risco MUITO ALTO. So com mente descansada.
5. METODO DE PESQUISA QUANTITATIVA: Estatistica, 2 provas + projeto. Dificuldade ALTA. Min 2x/semana.
6. PSICOLOGIA DO DESENVOLVIMENTO 1: Piaget, Vygotsky, discussao em aula. Dificuldade MEDIA. Leitura na vespera.

═══════════════════════════════════════════════════
REGRAS
═══════════════════════════════════════════════════

- NUNCA alocar estudo em horarios de aula
- Seg/Ter: estudo SO a noite (18h+), LEVE
- Qua: depende de p23
- Qui/Sex: tarde livre = estudo pesado
- Respeitar limites do aluno (tempo, foco, preferencias)
- Incluir blocos de AULA na grade (tipo "aula")
- Para exercicios_por_materia: gerar apenas "introducao" (2-3 frases). Campo "exercicios" = []. NAO gerar "observacao_pessoal".
- Plano deve ser REALISTA e FACTIVEL
- Se o aluno tem pouco tempo -> priorizar ALTO RISCO primeiro

═══════════════════════════════════════════════════
FORMATO -- APENAS JSON VALIDO
═══════════════════════════════════════════════════

{
  "perfil_resumo": "4-5 linhas",
  "plano_semanal": { "segunda": [{ "horario": "", "materia": "", "atividade": "", "tipo": "aula|estudo", "dica": "" }], "terca": [], "quarta": [], "quinta": [], "sexta": [], "sabado": [], "domingo": [] },
  "meta_semanal": "Meta mensuravel",
  "exercicios_por_materia": {
    "psicologia_da_saude": { "introducao": "...", "exercicios": [] },
    "psicologia_experimental_3": { "introducao": "...", "exercicios": [] },
    "etica_profissional": { "introducao": "...", "exercicios": [] },
    "psicologia_personalidade_2": { "introducao": "...", "exercicios": [] },
    "metodo_pesquisa_quantitativa": { "introducao": "...", "exercicios": [] },
    "psicologia_desenvolvimento_1": { "introducao": "...", "exercicios": [] }
  },
  "cronograma_semestral": {
    "meta_semestre": "",
    "horas_semanais": { "total": 0, "por_materia": {} },
    "semana_tipo": { "segunda": [], "terca": [], "quarta": [], "quinta": [], "sexta": [], "sabado": [], "domingo": [] },
    "fases": [{ "nome": "", "semanas": "", "periodo": "", "foco": "", "metas": [], "prioridades_por_materia": {} }],
    "checklist_entregas": [{ "materia": "", "entregas": [{ "tipo": "", "periodo_estimado": "", "status": false }] }]
  }
}`;

// ═══════════════════════════════════════════════════
// PROMPT 2 — GPT-5.2 — Reflexivo, empático, profundo
// ═══════════════════════════════════════════════════

const PROMPT_REFLEXIVO = `Voce e o Ollie, um psicologo educacional empatico e baseado em evidencia cientifica. Voce tem profundo conhecimento em neurociencia da aprendizagem, psicologia cognitiva, e tecnicas de estudo validadas por pesquisa.

Voce recebera: as respostas do aluno ao questionario + o perfil e plano de estudos ja gerados.

Sua tarefa: criar conteudo REFLEXIVO e PROFUNDO para ESTE aluno especifico.

═══════════════════════════════════════════════════
O QUE GERAR
═══════════════════════════════════════════════════

1. OBSERVACAO PESSOAL POR MATERIA (5-8 frases cada):
- Como este aluno deve abordar a materia dado seu perfil emocional
- Tecnicas baseadas em neurociencia para o tipo de conteudo
- Pausas e por que (baseado no foco do aluno)
- Como lidar com dificuldade emocional nesta materia
- Tom: mentor que conhece o aluno. Direto, acolhedor, sem ser piegas.

Materias e contexto:
- psicologia_da_saude: relatorios de visitas, producao textual. Media dificuldade.
- psicologia_experimental_3: memoria humana, 3 provas, revisao espacada obrigatoria. Alta dificuldade.
- etica_profissional: codigo de etica, apresentacao oral. Baixa-media dificuldade.
- psicologia_personalidade_2: fenomenologia (Husserl, Heidegger, Merleau-Ponty), fichamento + resenha. MUITO alta dificuldade.
- metodo_pesquisa_quantitativa: estatistica, 2 provas + projeto. Alta dificuldade.
- psicologia_desenvolvimento_1: Piaget, Vygotsky, discussao em aula. Media dificuldade.

2. RECOMENDACOES: 5-8 personalizadas, conectadas as respostas especificas do aluno.

3. TECNICAS SUGERIDAS: Baseadas em evidencia (Pomodoro, Feynman, revisao espacada Ebbinghaus, Cornell, 2 minutos, mindfulness, elaborative interrogation, interleaving). Para cada:
- nome, descricao (3-4 frases com base cientifica), quando_usar, por_que (conectar ao perfil)

4. ALERTAS: Padroes perigosos. Direto e especifico.

5. GUIA DE PRATICAS:
- resumo_perfil: paragrafo acolhedor
- secoes: APENAS as relevantes (Gestao de Foco, Ansiedade Academica, Procrastinacao, Constancia/Habitos, Organizacao, Leitura de Textos Densos, Preparacao para Provas)
- Cada secao: tecnicas com passo-a-passo CONCRETO + exercicio pratico para HOJE
- Baseie-se em: Pomodoro, Feynman, revisao espacada (Ebbinghaus), Cornell, 2 minutos, mindfulness, elaborative interrogation, interleaving

═══════════════════════════════════════════════════
REGRAS
═══════════════════════════════════════════════════

- Conecte TUDO ao perfil. Se marcou ansiedade, cada tecnica deve abordar isso.
- Profundidade > quantidade. Menos tecnicas bem explicadas > muitas superficiais.
- Exercicios mentais devem ser PRATICAVEIS em 5 minutos.
- Cite base cientifica quando relevante.
- Linguagem acolhedora mas DIRETA.

═══════════════════════════════════════════════════
FORMATO -- APENAS JSON VALIDO
═══════════════════════════════════════════════════

{
  "observacoes_pessoais": {
    "psicologia_da_saude": "5-8 frases...",
    "psicologia_experimental_3": "...",
    "etica_profissional": "...",
    "psicologia_personalidade_2": "...",
    "metodo_pesquisa_quantitativa": "...",
    "psicologia_desenvolvimento_1": "..."
  },
  "recomendacoes": [],
  "tecnicas_sugeridas": [{ "nome": "", "descricao": "", "quando_usar": "", "por_que": "" }],
  "alertas": [],
  "guia_praticas": {
    "resumo_perfil": "",
    "secoes": [{ "titulo": "", "icone": "", "aparece_se": "", "tecnicas": [{ "nome": "", "passo_a_passo": [], "exercicio_pratico": "" }] }],
    "tracker_semanal": true
  }
}`;

// ═══════════════════════════════════════════════════
// Helper: chamar OpenAI
// ═══════════════════════════════════════════════════

async function callOpenAI(
  model: string,
  systemPrompt: string,
  userMessage: string,
  maxTokens: number,
  temperature: number,
) {
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userMessage },
      ],
      response_format: { type: "json_object" },
      ...(model.startsWith("gpt-5") ? { max_completion_tokens: maxTokens } : { max_tokens: maxTokens }),
      temperature,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`OpenAI API error (${model}): ${response.status} — ${errorText}`);
  }

  const data = await response.json();
  const content = data.choices?.[0]?.message?.content;

  if (!content) {
    throw new Error(`Empty response from ${model}`);
  }

  return JSON.parse(content);
}

// ═══════════════════════════════════════════════════
// Edge Function
// ═══════════════════════════════════════════════════

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
      },
    });
  }

  try {
    if (!OPENAI_API_KEY) {
      throw new Error("OPENAI_API_KEY not configured");
    }

    const { respostas } = await req.json();

    if (!respostas) {
      throw new Error("Missing 'respostas' in request body");
    }

    const respostasStr = JSON.stringify(respostas, null, 2);

    // ── Chamada 1: GPT-4o → Estrutura ──
    const estrutura = await callOpenAI(
      "gpt-4o",
      PROMPT_ESTRUTURAL,
      `Respostas do questionario:\n\n${respostasStr}`,
      5000,
      0.5,
    );

    // ── Chamada 2: GPT-5.2 → Reflexivo ──
    const reflexivoInput = [
      `Respostas do questionario:\n\n${respostasStr}`,
      `\n\n---\n\nPerfil gerado:\n${estrutura.perfil_resumo}`,
      `\n\nPlano semanal gerado:\n${JSON.stringify(estrutura.plano_semanal, null, 2)}`,
    ].join("");

    const reflexivo = await callOpenAI(
      "gpt-5.2",
      PROMPT_REFLEXIVO,
      reflexivoInput,
      5000,
      0.8,
    );

    // ── Merge dos resultados ──
    const exercicios = estrutura.exercicios_por_materia || {};
    const observacoes = reflexivo.observacoes_pessoais || {};
    for (const key of Object.keys(exercicios)) {
      if (observacoes[key]) {
        exercicios[key].observacao_pessoal = observacoes[key];
      }
    }

    const plan = {
      // Da chamada 1 (estrutural)
      perfil_resumo: estrutura.perfil_resumo,
      plano_semanal: estrutura.plano_semanal,
      meta_semanal: estrutura.meta_semanal,
      exercicios_por_materia: exercicios,
      cronograma_semestral: estrutura.cronograma_semestral,
      // Da chamada 2 (reflexivo)
      recomendacoes: reflexivo.recomendacoes,
      tecnicas_sugeridas: reflexivo.tecnicas_sugeridas,
      alertas: reflexivo.alertas,
      guia_praticas: reflexivo.guia_praticas,
    };

    return new Response(JSON.stringify(plan), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  }
});
