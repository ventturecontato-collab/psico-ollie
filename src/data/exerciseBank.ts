import type { BankExercise } from '../types';

export interface SubjectExerciseBank {
  materia_id: string;
  materia_nome: string;
  exercicios: BankExercise[];
}

// ============================================================
// PSICOLOGIA EXPERIMENTAL 3 - Memoria Humana
// ============================================================

const experimentalExercises: BankExercise[] = [
  // --- MULTIPLA ESCOLHA (12) ---
  {
    id: 'exp3_me_001',
    titulo: 'Curva de Esquecimento de Ebbinghaus',
    tipo: 'multipla_escolha',
    dificuldade: 'facil',
    topico: 'Curva de esquecimento de Ebbinghaus',
    enunciado:
      'Hermann Ebbinghaus, em seus estudos pioneiros sobre a memoria, utilizou silabas sem sentido para investigar o esquecimento. De acordo com seus achados, qual das alternativas abaixo descreve corretamente o padrao de esquecimento observado?',
    alternativas: [
      'a) O esquecimento ocorre de forma linear e constante ao longo do tempo',
      'b) A maior parte do esquecimento ocorre nas primeiras horas apos a aprendizagem, desacelerando posteriormente',
      'c) O esquecimento so se inicia apos 24 horas da aprendizagem original',
      'd) A curva de esquecimento demonstra que a memoria e permanente, sendo o esquecimento apenas uma falha de recuperacao',
    ],
    resposta: 'b',
    explicacao:
      'Ebbinghaus demonstrou que o esquecimento segue uma curva exponencial negativa: a perda de informacao e mais rapida logo apos a aprendizagem (cerca de 50% nas primeiras horas) e depois se estabiliza gradualmente. Esse achado e fundamental para entender a importancia da revisao espacada.',
    dica_ollie:
      'Pense assim: voce acabou de estudar algo e ja no dia seguinte esqueceu boa parte! Mas o que sobrevive ao primeiro dia tende a ficar mais tempo. Revisar cedo e a chave!',
  },
  {
    id: 'exp3_me_002',
    titulo: 'Modelo de Memoria de Trabalho de Baddeley',
    tipo: 'multipla_escolha',
    dificuldade: 'medio',
    topico: 'Memoria de trabalho (modelo de Baddeley)',
    enunciado:
      'O modelo de memoria de trabalho proposto por Baddeley e Hitch (1974), revisado por Baddeley (2000), e composto por subsistemas especializados. Qual dos componentes abaixo foi acrescentado ao modelo original na revisao de 2000?',
    alternativas: [
      'a) A alca fonologica (phonological loop)',
      'b) O esboco visuoespacial (visuospatial sketchpad)',
      'c) O buffer episodico (episodic buffer)',
      'd) O executivo central (central executive)',
    ],
    resposta: 'c',
    explicacao:
      'O modelo original de 1974 incluia o executivo central, a alca fonologica e o esboco visuoespacial. Em 2000, Baddeley adicionou o buffer episodico, um sistema de capacidade limitada que integra informacoes de diferentes fontes em representacoes episodicas coerentes, servindo de interface entre os subsistemas e a memoria de longo prazo.',
    dica_ollie:
      'Lembre-se: o buffer episodico e o "novato" do grupo! Ele chegou depois para resolver o problema de como os outros componentes se comunicam entre si e com a memoria de longo prazo.',
  },
  {
    id: 'exp3_me_003',
    titulo: 'Memoria Episodica vs Semantica',
    tipo: 'multipla_escolha',
    dificuldade: 'facil',
    topico: 'Memoria episodica e semantica (Tulving)',
    enunciado:
      'Segundo a distincao proposta por Endel Tulving, a memoria episodica e a memoria semantica diferem em diversos aspectos. Qual das alternativas apresenta corretamente essa diferenciacao?',
    alternativas: [
      'a) A memoria episodica armazena fatos gerais sobre o mundo, enquanto a semantica registra eventos pessoais',
      'b) A memoria episodica e autonooetica (envolve consciencia de si no tempo), enquanto a semantica e noetica (envolve consciencia do objeto)',
      'c) Ambas sao sistemas identicos, diferindo apenas na duracao do armazenamento',
      'd) A memoria semantica e mais vulneravel ao envelhecimento do que a episodica',
    ],
    resposta: 'b',
    explicacao:
      'Tulving distinguiu esses dois sistemas declarativos: a memoria episodica registra eventos pessoais situados no tempo e no espaco, envolvendo consciencia autonooetica (o sujeito "viaja mentalmente no tempo"). A memoria semantica armazena conhecimentos gerais descontextualizados, com consciencia noetica. Pesquisas mostram que a memoria episodica e mais vulneravel ao envelhecimento que a semantica.',
    dica_ollie:
      'Dica pratica: "O que voce almocou ontem?" = episodica. "Qual a capital da Franca?" = semantica. A episodica tem data e local, a semantica e conhecimento "solto"!',
  },
  {
    id: 'exp3_me_004',
    titulo: 'Efeitos de Primazia e Recencia',
    tipo: 'multipla_escolha',
    dificuldade: 'medio',
    topico: 'Efeitos de primazia e recencia',
    enunciado:
      'Em um experimento classico de recordacao livre de listas de palavras, observa-se o efeito de posicao serial. A respeito desse fenomeno, assinale a alternativa correta:',
    alternativas: [
      'a) O efeito de recencia e eliminado quando ha uma tarefa distratora entre a apresentacao e a recordacao, mas o efeito de primazia permanece inalterado',
      'b) O efeito de primazia e eliminado pela tarefa distratora, enquanto o de recencia permanece',
      'c) Ambos os efeitos sao igualmente afetados por tarefas distratoras',
      'd) Nenhum dos efeitos e influenciado por tarefas distratoras',
    ],
    resposta: 'a',
    explicacao:
      'O efeito de recencia reflete a recuperacao de itens que ainda estao na memoria de curto prazo. Uma tarefa distratora (como contar de tras para frente por 30 segundos) desloca esses itens, eliminando o efeito de recencia. Ja o efeito de primazia, atribuido a maior ensaio dos primeiros itens e sua transferencia para a memoria de longo prazo, permanece intacto apos a distracao.',
    dica_ollie:
      'Imagine uma lista de compras: voce lembra os primeiros itens porque repetiu bastante (primazia/MLP), e os ultimos porque ainda estao "frescos" (recencia/MCP). Se alguem te distrai antes de recitar, os ultimos somem, mas os primeiros ficam!',
  },
  {
    id: 'exp3_me_005',
    titulo: 'Especificidade da Codificacao',
    tipo: 'multipla_escolha',
    dificuldade: 'dificil',
    topico: 'Especificidade da codificacao',
    enunciado:
      'O principio da especificidade da codificacao, formulado por Tulving e Thomson (1973), possui implicacoes diretas para a compreensao da recuperacao mnesica. Qual das seguintes situacoes experimentais melhor ilustra esse principio?',
    alternativas: [
      'a) Participantes que estudam uma lista de palavras em voz alta recordam mais do que aqueles que estudam em silencio',
      'b) Participantes que aprendem informacoes em um contexto subaquatico recordam melhor quando testados tambem debaixo d\'agua do que em terra firme',
      'c) Participantes que utilizam mnemotecnicas visuais recordam mais do que aqueles que usam repeticao simples',
      'd) Participantes mais jovens sempre recordam mais do que participantes mais velhos, independentemente do contexto',
    ],
    resposta: 'b',
    explicacao:
      'O principio da especificidade da codificacao afirma que a recuperacao e facilitada quando as pistas presentes no momento do teste coincidem com as condicoes presentes na codificacao. O experimento classico de Godden e Baddeley (1975), com mergulhadores que aprendiam e recordavam palavras em contextos aquatico e terrestre, demonstra esse principio de forma elegante: a recordacao era superior quando o contexto de teste correspondia ao de aprendizagem.',
    dica_ollie:
      'E como estudar ouvindo uma musica e, na hora da prova, lembrar de tudo ao ouvir a mesma musica! O contexto da codificacao vira uma "pista" para a recuperacao.',
  },
  {
    id: 'exp3_me_006',
    titulo: 'Niveis de Processamento',
    tipo: 'multipla_escolha',
    dificuldade: 'medio',
    topico: 'Niveis de processamento (Craik e Lockhart)',
    enunciado:
      'A abordagem dos niveis de processamento, proposta por Craik e Lockhart (1972), sugere que a retencao da informacao depende da profundidade com que ela e processada. Considere as seguintes tarefas de codificacao:\n\n1) Analisar se a palavra esta em letras maiusculas\n2) Julgar se a palavra rima com outra palavra dada\n3) Avaliar se a palavra se encaixa em uma frase significativa\n\nQual a ordem crescente de profundidade de processamento?',
    alternativas: [
      'a) 3, 2, 1',
      'b) 1, 2, 3',
      'c) 2, 1, 3',
      'd) 1, 3, 2',
    ],
    resposta: 'b',
    explicacao:
      'Segundo Craik e Lockhart, o processamento varia de superficial a profundo: (1) processamento estrutural/visual (analise das caracteristicas fisicas, como maiusculas/minusculas) e o mais superficial; (2) processamento fonologico (analise do som, como rimas) e intermediario; (3) processamento semantico (analise do significado, como encaixar em uma frase) e o mais profundo e gera tracos de memoria mais duradouros.',
    dica_ollie:
      'Quanto mais voce "pensa" sobre o significado de algo, melhor voce lembra! Copiar e superficial, rimar e medio, entender e profundo. Por isso, estudar fazendo resumos proprios funciona melhor que so grifar!',
  },
  {
    id: 'exp3_me_007',
    titulo: 'Interferencia Proativa e Retroativa',
    tipo: 'multipla_escolha',
    dificuldade: 'medio',
    topico: 'Teoria da interferencia',
    enunciado:
      'Uma estudante de psicologia aprendeu uma lista de vocabulario de ingles na segunda-feira e uma lista de vocabulario de espanhol na terca-feira. Na quarta-feira, ao tentar recordar a lista de espanhol, ela percebe que as palavras em ingles estao interferindo. Ao tentar recordar a lista de ingles, as palavras de espanhol tambem interferem. Respectivamente, esses fenomenos sao exemplos de:',
    alternativas: [
      'a) Interferencia retroativa e interferencia proativa',
      'b) Interferencia proativa e interferencia retroativa',
      'c) Ambos sao interferencia proativa',
      'd) Ambos sao interferencia retroativa',
    ],
    resposta: 'b',
    explicacao:
      'Quando a lista de ingles (aprendida antes) interfere na recordacao da lista de espanhol (aprendida depois), temos interferencia proativa (o material antigo interfere no novo). Quando a lista de espanhol (aprendida depois) interfere na recordacao da lista de ingles (aprendida antes), temos interferencia retroativa (o material novo interfere no antigo). A direcao temporal da interferencia e a chave para a classificacao.',
    dica_ollie:
      'PRO-ativa = para frente (o velho atrapalha o novo). RETRO-ativa = para tras (o novo atrapalha o velho). Pense em "pro" como "projetar para o futuro" e "retro" como "voltar ao passado"!',
  },
  {
    id: 'exp3_me_008',
    titulo: 'Memoria Implicita e Explicita',
    tipo: 'multipla_escolha',
    dificuldade: 'facil',
    topico: 'Memoria implicita e explicita',
    enunciado:
      'O paciente H.M. (Henry Molaison), apos a remocao bilateral dos lobos temporais mediais, apresentou amnesia anterograda severa. Apesar disso, conseguia aprender novas habilidades motoras, como o desenho em espelho. Esse achado e fundamental para a distincao entre:',
    alternativas: [
      'a) Memoria de curto prazo e memoria de longo prazo',
      'b) Memoria episodica e memoria semantica',
      'c) Memoria explicita (declarativa) e memoria implicita (nao declarativa)',
      'd) Memoria sensorial e memoria de trabalho',
    ],
    resposta: 'c',
    explicacao:
      'O caso H.M. demonstrou que a memoria implicita (procedimental, priming, condicionamento) depende de estruturas cerebrais diferentes das que sustentam a memoria explicita (episodica e semantica). H.M. nao conseguia formar novas memorias explicitas (declarativas), pois dependiam do hipocampo removido, mas seu aprendizado de habilidades motoras (memoria procedimental/implicita), que depende dos ganglios da base e cerebelo, permaneceu intacto.',
    dica_ollie:
      'H.M. e um dos casos mais importantes da neuropsicologia! Ele mostrou que "saber como" (implicita) e "saber que" (explicita) moram em "enderecos" diferentes no cerebro.',
  },
  {
    id: 'exp3_me_009',
    titulo: 'Consolidacao da Memoria e Sono',
    tipo: 'multipla_escolha',
    dificuldade: 'dificil',
    topico: 'Consolidacao da memoria',
    enunciado:
      'A teoria da consolidacao da memoria propoe que memorias inicialmente labeis sao gradualmente estabilizadas ao longo do tempo. Sobre o papel do sono nesse processo, assinale a alternativa correta:',
    alternativas: [
      'a) Apenas o sono REM contribui para a consolidacao, sendo o sono de ondas lentas irrelevante para a memoria',
      'b) O sono de ondas lentas (NREM estagio 3) esta particularmente associado a consolidacao de memorias declarativas, por meio da reativacao hipocampal',
      'c) O sono nao tem papel ativo na consolidacao, servindo apenas para evitar interferencia de novas informacoes',
      'd) A consolidacao da memoria ocorre exclusivamente durante a vigilia, sendo o sono necessario apenas para o descanso neural',
    ],
    resposta: 'b',
    explicacao:
      'Pesquisas demonstram que o sono de ondas lentas (SWS) e particularmente importante para a consolidacao de memorias declarativas. Durante o SWS, ocorre a reativacao de padroes hipocampais (replay), facilitando a transferencia gradual das memorias para o neocortex (consolidacao sistemica). O sono REM tambem contribui, estando mais associado a consolidacao de memorias procedimentais e emocionais.',
    dica_ollie:
      'Nao subestime o poder de uma boa noite de sono! Enquanto voce dorme, seu cerebro esta "replay-ando" o que aprendeu durante o dia. Dormir bem e estudar duas vezes!',
  },
  {
    id: 'exp3_me_010',
    titulo: 'Memorias Relampago (Flashbulb)',
    tipo: 'multipla_escolha',
    dificuldade: 'medio',
    topico: 'Memoria relampago (flashbulb memory)',
    enunciado:
      'Brown e Kulik (1977) propuseram o conceito de "flashbulb memories" (memorias relampago) para descrever memorias vividas de eventos surpreendentes e emocionalmente significativos. Qual das afirmacoes abaixo reflete adequadamente o estado atual da pesquisa sobre esse fenomeno?',
    alternativas: [
      'a) Memorias relampago sao registros fotograficos perfeitamente acurados dos eventos, imunes a distorcoes',
      'b) Embora as memorias relampago sejam subjetivamente vividas e mantidas com alta confianca, pesquisas longitudinais mostram que elas tambem estao sujeitas a distorcoes e inconsistencias ao longo do tempo',
      'c) Memorias relampago so se formam para eventos negativos e traumaticos',
      'd) A pesquisa demonstrou que memorias relampago nao existem e sao apenas memorias comuns supervalorizadas',
    ],
    resposta: 'b',
    explicacao:
      'Estudos longitudinais, como os de Neisser e Harsch (1992) sobre a explosao do onibus espacial Challenger, demonstraram que, apesar da forte confianca subjetiva, as memorias relampago podem conter erros significativos e mudar ao longo do tempo. A emocao aumenta a vividez e a confianca na memoria, mas nao garante a precisao. Assim, memorias relampago sao "especiais" na intensidade subjetiva, mas nao sao imunes a distorcoes.',
    dica_ollie:
      'Voce provavelmente lembra exatamente onde estava quando soube de um evento marcante, ne? Mas sera que lembra certo mesmo? A pesquisa mostra que a gente tem muita certeza, mas nem sempre acerta os detalhes!',
  },
  {
    id: 'exp3_me_011',
    titulo: 'Falsas Memorias e o Paradigma DRM',
    tipo: 'multipla_escolha',
    dificuldade: 'dificil',
    topico: 'Falsas memorias',
    enunciado:
      'O paradigma DRM (Deese-Roediger-McDermott) e amplamente utilizado para estudar falsas memorias em laboratorio. Nesse procedimento, apresenta-se uma lista de palavras associadas a um item critico nao apresentado (por exemplo: "cama", "descanso", "travesseiro", "sonhar" -- item critico: "dormir"). Qual dos seguintes resultados e tipicamente observado?',
    alternativas: [
      'a) Os participantes raramente reconhecem falsamente o item critico, demonstrando alta precisao discriminativa',
      'b) Os participantes frequentemente "recordam" o item critico com alta confianca, muitas vezes com a mesma certeza atribuida a itens realmente apresentados',
      'c) O efeito DRM so ocorre em criancas, pois adultos possuem mecanismos inibitivos eficientes',
      'd) O efeito desaparece completamente quando os participantes sao avisados previamente sobre a existencia de itens criticos',
    ],
    resposta: 'b',
    explicacao:
      'O resultado classico do paradigma DRM e que participantes frequentemente "lembram" do item critico nao apresentado com alta confianca, chegando a relatar "experiencias de recordacao" vividas (fenomeno chamado de "remember responses"). Esse efeito e robusto, ocorre em adultos, e mesmo o aviso previo reduz mas nao elimina completamente as falsas memorias, demonstrando a natureza construtiva da memoria.',
    dica_ollie:
      'Esse experimento e incrivel e facil de replicar! Faca com seus colegas e veja quantos "lembram" da palavra que nunca apareceu. Mostra que nossa memoria nao e uma camera, mas um processo construtivo!',
  },
  {
    id: 'exp3_me_012',
    titulo: 'Reconhecimento versus Recordacao',
    tipo: 'multipla_escolha',
    dificuldade: 'facil',
    topico: 'Reconhecimento vs recordacao',
    enunciado:
      'Em paradigmas experimentais de memoria, a distincao entre reconhecimento e recordacao (recall) e fundamental. Assinale a alternativa que descreve corretamente essa distincao:',
    alternativas: [
      'a) Reconhecimento e mais dificil que recordacao, pois exige processamento mais profundo',
      'b) Recordacao exige a geracao espontanea da informacao, enquanto reconhecimento requer apenas a identificacao de um item previamente encontrado entre opcoes apresentadas',
      'c) Nao ha diferenca funcional entre reconhecimento e recordacao; ambos utilizam os mesmos processos cognitivos',
      'd) Reconhecimento envolve apenas memoria implicita, enquanto recordacao envolve apenas memoria explicita',
    ],
    resposta: 'b',
    explicacao:
      'A recordacao (recall) exige que o sujeito gere a informacao a partir de pistas minimas (ex: "Quais palavras estavam na lista?"), enquanto o reconhecimento fornece o item e pede ao sujeito que julgue se ele foi previamente encontrado (ex: "Esta palavra estava na lista?"). O reconhecimento e geralmente mais facil, pois o item apresentado serve como pista direta de recuperacao. Essa distincao e relevante para provas: questoes dissertativas testam recordacao, e questoes de multipla escolha testam reconhecimento.',
    dica_ollie:
      'Prova dissertativa = recordacao (voce precisa puxar da memoria). Prova de multipla escolha = reconhecimento (voce so precisa identificar). Por isso a gente acha multipla escolha "mais facil"!',
  },

  // --- VERDADEIRO OU FALSO (5) ---
  {
    id: 'exp3_vf_001',
    titulo: 'Capacidade da Memoria de Curto Prazo',
    tipo: 'verdadeiro_falso',
    dificuldade: 'facil',
    topico: 'Memoria de curto prazo vs longo prazo',
    enunciado:
      'Verdadeiro ou Falso: Segundo o classico estudo de George Miller (1956), a capacidade da memoria de curto prazo e de aproximadamente 7 mais ou menos 2 itens (chunks), independentemente da natureza do material.',
    resposta: 'Verdadeiro',
    explicacao:
      'Miller (1956) propôs o "numero magico 7 +/- 2" como a capacidade media da memoria de curto prazo. Embora pesquisas mais recentes sugiram que a capacidade real pode ser menor (cerca de 4 chunks, segundo Cowan, 2001), o principio de Miller de que a MCP tem capacidade limitada e de que o agrupamento (chunking) pode ampliar essa capacidade permanece valido e influente.',
    dica_ollie:
      'O "numero magico" de Miller e um classico! Mas lembre-se: pesquisas mais novas sugerem que o numero real pode ser menor. Se cair na prova, preste atencao se a questao se refere a Miller especificamente ou a revisoes posteriores.',
  },
  {
    id: 'exp3_vf_002',
    titulo: 'Funcao do Executivo Central',
    tipo: 'verdadeiro_falso',
    dificuldade: 'medio',
    topico: 'Memoria de trabalho (modelo de Baddeley)',
    enunciado:
      'Verdadeiro ou Falso: No modelo de memoria de trabalho de Baddeley, o executivo central e responsavel pelo armazenamento direto de informacoes verbais e visuoespaciais.',
    resposta: 'Falso',
    explicacao:
      'O executivo central NAO armazena informacoes diretamente. Ele funciona como um sistema atencional de controle que coordena os subsistemas escravos (alca fonologica e esboco visuoespacial), aloca recursos atencionais e gerencia a alternancia entre tarefas. O armazenamento propriamente dito e realizado pela alca fonologica (informacoes verbais) e pelo esboco visuoespacial (informacoes visuais e espaciais).',
    dica_ollie:
      'Pense no executivo central como um "gerente" que nao carrega as caixas, mas diz para os funcionarios o que fazer. Quem carrega sao a alca fonologica e o esboco visuoespacial!',
  },
  {
    id: 'exp3_vf_003',
    titulo: 'Efeito de Posicao Serial',
    tipo: 'verdadeiro_falso',
    dificuldade: 'medio',
    topico: 'Efeito de posicao serial',
    enunciado:
      'Verdadeiro ou Falso: O efeito de posicao serial demonstra que os itens do meio de uma lista sao os mais bem recordados, enquanto os itens do inicio e do final sao os mais esquecidos.',
    resposta: 'Falso',
    explicacao:
      'O efeito de posicao serial mostra exatamente o contrario: os itens do INICIO (efeito de primazia) e do FINAL (efeito de recencia) da lista sao melhor recordados, enquanto os itens do MEIO sao os mais esquecidos. A curva de posicao serial tem formato de "U", com desempenho superior nas extremidades.',
    dica_ollie:
      'A curva forma um "U" - começo e fim sao os mais lembrados, o meio e o mais esquecido! Por isso, quando estudar, de atencao extra ao conteudo do "meio" da sessao de estudo.',
  },
  {
    id: 'exp3_vf_004',
    titulo: 'Priming como Memoria Implicita',
    tipo: 'verdadeiro_falso',
    dificuldade: 'dificil',
    topico: 'Memoria implicita e explicita',
    enunciado:
      'Verdadeiro ou Falso: O fenomeno de priming e classificado como uma forma de memoria implicita porque influencia o comportamento sem exigir a recordacao consciente da experiencia previa que o originou.',
    resposta: 'Verdadeiro',
    explicacao:
      'O priming e, de fato, uma forma de memoria implicita (nao declarativa). Ele se manifesta quando a exposicao previa a um estimulo facilita o processamento subsequente desse estimulo ou de estimulos relacionados, sem que o individuo tenha consciencia dessa influencia. Pacientes amnesicos, como H.M., apresentam priming preservado apesar de graves deficits de memoria explicita, corroborando a dissociacao entre esses sistemas.',
    dica_ollie:
      'Priming e como quando voce ouve uma musica no supermercado e, sem perceber, fica com vontade de comprar algo relacionado a letra. A influencia acontece "por baixo dos panos"!',
  },
  {
    id: 'exp3_vf_005',
    titulo: 'Niveis de Processamento e Intencionalidade',
    tipo: 'verdadeiro_falso',
    dificuldade: 'dificil',
    topico: 'Niveis de processamento (Craik e Lockhart)',
    enunciado:
      'Verdadeiro ou Falso: De acordo com a teoria dos niveis de processamento de Craik e Lockhart (1972), a aprendizagem incidental com processamento semantico profundo pode resultar em melhor retencao do que a aprendizagem intencional com processamento superficial.',
    resposta: 'Verdadeiro',
    explicacao:
      'Experimentos classicos demonstraram que participantes que processavam palavras semanticamente de forma incidental (sem saber que haveria um teste de memoria) frequentemente recordavam mais do que participantes que tentavam intencionalmente memorizar usando estrategias superficiais (como repeticao mecanica). Isso mostra que a profundidade do processamento e mais determinante para a retencao do que a intencao de aprender.',
    dica_ollie:
      'Isso explica por que quem so repete o texto mecanicamente (processamento raso) lembra menos do que quem discute o conteudo com colegas (processamento profundo), mesmo sem "querer decorar"!',
  },

  // --- ASSOCIACAO (3) ---
  {
    id: 'exp3_as_001',
    titulo: 'Sistemas de Memoria e suas Caracteristicas',
    tipo: 'associacao',
    dificuldade: 'medio',
    topico: 'Sistemas de memoria',
    enunciado:
      'Associe cada sistema de memoria (coluna A) com sua caracteristica principal (coluna B):\n\nColuna A:\n1. Memoria sensorial\n2. Memoria de curto prazo\n3. Memoria de longo prazo episodica\n4. Memoria de longo prazo semantica\n5. Memoria procedimental\n\nColuna B:\nA. Armazena habilidades motoras e habitos, como andar de bicicleta\nB. Registro muito breve (milissegundos a segundos) de grandes quantidades de informacao sensorial\nC. Contem conhecimentos gerais sobre o mundo sem referencia ao contexto de aquisicao\nD. Capacidade limitada (aprox. 7 itens), duracao de 15-30 segundos sem ensaio\nE. Registra eventos pessoais localizados no tempo e no espaco',
    resposta: '1-B, 2-D, 3-E, 4-C, 5-A',
    explicacao:
      'A memoria sensorial (iconic/echoic) retém informação brevemente; a MCP tem capacidade e duracao limitadas; a episodica armazena eventos autobiograficos contextualizados; a semantica guarda conhecimentos gerais; e a procedimental armazena "saber como" (habilidades). Essa organizacao reflete a taxonomia classica dos sistemas de memoria proposta por Squire e Tulving.',
    dica_ollie:
      'Monte um mapa mental com esses 5 sistemas! Desenhe uma arvore: no topo "Memoria", depois divida em "Curto prazo" e "Longo prazo", e va ramificando. Visualizar ajuda muito!',
  },
  {
    id: 'exp3_as_002',
    titulo: 'Pesquisadores e suas Contribuicoes',
    tipo: 'associacao',
    dificuldade: 'dificil',
    topico: 'Historia da pesquisa em memoria',
    enunciado:
      'Associe cada pesquisador (coluna A) com sua principal contribuicao ao estudo da memoria (coluna B):\n\nColuna A:\n1. Hermann Ebbinghaus\n2. Endel Tulving\n3. Alan Baddeley\n4. Fergus Craik e Robert Lockhart\n5. Elizabeth Loftus\n\nColuna B:\nA. Modelo de memoria de trabalho multicomponente\nB. Distincao entre memoria episodica e semantica\nC. Teoria dos niveis de processamento\nD. Pesquisa sobre falsas memorias e efeito da desinformacao\nE. Curva de esquecimento e metodo das economias',
    resposta: '1-E, 2-B, 3-A, 4-C, 5-D',
    explicacao:
      'Ebbinghaus (1885) foi o pioneiro do estudo experimental da memoria com silabas sem sentido e a curva de esquecimento. Tulving (1972) propôs a distincao episodica/semantica. Baddeley e Hitch (1974) desenvolveram o modelo de memoria de trabalho. Craik e Lockhart (1972) propuseram os niveis de processamento. Loftus e seus colaboradores demonstraram a maleabilidade da memoria e o efeito da desinformacao pos-evento.',
    dica_ollie:
      'Faca cartões de estudo com o nome de cada pesquisador de um lado e sua contribuicao do outro. Autores e suas teorias sao cobrados com frequencia em provas de experimental!',
  },
  {
    id: 'exp3_as_003',
    titulo: 'Tipos de Interferencia e Exemplos',
    tipo: 'associacao',
    dificuldade: 'facil',
    topico: 'Teoria da interferencia',
    enunciado:
      'Associe cada tipo de interferencia ou conceito (coluna A) com o exemplo correspondente (coluna B):\n\nColuna A:\n1. Interferencia proativa\n2. Interferencia retroativa\n3. Decaimento temporal\n4. Especificidade da codificacao\n\nColuna B:\nA. Voce estudou para uma prova no laboratorio e teve melhor desempenho quando fez a prova no mesmo laboratorio\nB. Seu antigo numero de telefone atrapalha a memorizacao do numero novo\nC. Voce aprendeu espanhol recentemente e agora confunde palavras ao tentar falar frances (que aprendeu antes)\nD. Voce nao pratica piano por anos e percebe que esqueceu algumas pecas que sabia tocar',
    resposta: '1-B, 2-C, 3-D, 4-A',
    explicacao:
      'Interferencia proativa: material antigo (telefone antigo) atrapalha o novo. Interferencia retroativa: material novo (espanhol) atrapalha o antigo (frances). Decaimento temporal: sem uso, a memoria se enfraquece com o tempo. Especificidade da codificacao: o contexto de aprendizagem (laboratorio) serve como pista na recuperacao.',
    dica_ollie:
      'Quando a questao fala de interferencia, pergunte-se: "Quem atrapalha quem?" Se o velho atrapalha o novo = proativa. Se o novo atrapalha o velho = retroativa. Simples assim!',
  },
];

// ============================================================
// METODO DE PESQUISA QUANTITATIVA - Estatistica e Metodos
// ============================================================

const quantitativaExercises: BankExercise[] = [
  // --- CALCULO (8) ---
  {
    id: 'mpq_calc_001',
    titulo: 'Calculo de Media, Mediana e Moda',
    tipo: 'calculo',
    dificuldade: 'facil',
    topico: 'Media, mediana e moda',
    enunciado:
      'Uma pesquisadora aplicou uma escala de ansiedade (pontuacao de 0 a 10) a 9 participantes e obteve os seguintes escores:\n\n4, 7, 5, 3, 7, 8, 5, 6, 5\n\nCalcule a media, a mediana e a moda desse conjunto de dados.',
    resposta:
      'Ordenando os dados: 3, 4, 5, 5, 5, 6, 7, 7, 8\n\nMedia = (3 + 4 + 5 + 5 + 5 + 6 + 7 + 7 + 8) / 9 = 50 / 9 = 5,56 (aproximadamente)\n\nMediana = valor central da distribuicao ordenada. Como n = 9 (impar), a mediana e o 5o valor = 5\n\nModa = valor que mais se repete = 5 (aparece 3 vezes)\n\nResposta: Media = 5,56; Mediana = 5; Moda = 5',
    explicacao:
      'A media e a soma dos valores dividida pelo numero de observacoes. A mediana e o valor central quando os dados estao ordenados. A moda e o valor mais frequente. Neste caso, a distribuicao e levemente assimetrica positiva (media > mediana = moda), indicando que ha valores mais altos puxando a media para cima.',
    dica_ollie:
      'Sempre comece ORDENANDO os dados! Isso facilita encontrar a mediana e a moda. Para a media, some tudo e divida pelo total. E confira se sua resposta faz sentido dentro do intervalo dos dados!',
  },
  {
    id: 'mpq_calc_002',
    titulo: 'Calculo de Desvio Padrao',
    tipo: 'calculo',
    dificuldade: 'medio',
    topico: 'Desvio padrao',
    enunciado:
      'Os tempos de reacao (em milissegundos) de 5 participantes em uma tarefa de atencao seletiva foram:\n\n200, 220, 210, 230, 240\n\nCalcule o desvio padrao amostral (s) desses dados. Mostre todas as etapas do calculo.',
    resposta:
      'Etapa 1: Calcular a media\nMedia = (200 + 220 + 210 + 230 + 240) / 5 = 1100 / 5 = 220 ms\n\nEtapa 2: Calcular os desvios em relacao a media e eleva-los ao quadrado\n(200 - 220)^2 = (-20)^2 = 400\n(220 - 220)^2 = (0)^2 = 0\n(210 - 220)^2 = (-10)^2 = 100\n(230 - 220)^2 = (10)^2 = 100\n(240 - 220)^2 = (20)^2 = 400\n\nEtapa 3: Soma dos quadrados dos desvios\nSQ = 400 + 0 + 100 + 100 + 400 = 1000\n\nEtapa 4: Variancia amostral (dividir por n - 1)\ns^2 = 1000 / (5 - 1) = 1000 / 4 = 250\n\nEtapa 5: Desvio padrao amostral\ns = raiz quadrada de 250 = 15,81 ms (aproximadamente)\n\nResposta: O desvio padrao amostral e aproximadamente 15,81 ms',
    explicacao:
      'O desvio padrao amostral (s) mede a dispersao dos dados em torno da media. Usamos n-1 no denominador (correcao de Bessel) porque estamos estimando o parametro populacional a partir de uma amostra. Quanto maior o desvio padrao, maior a variabilidade dos dados. Neste caso, os tempos de reacao variam em media cerca de 15,81 ms em relacao a media de 220 ms.',
    dica_ollie:
      'O segredo e ir passo a passo: media, desvios, quadrados, soma, divisao por (n-1), raiz. Nao tente pular etapas! E lembre-se: em provas, use n-1 para amostra e n para populacao.',
  },
  {
    id: 'mpq_calc_003',
    titulo: 'Correlacao de Pearson',
    tipo: 'calculo',
    dificuldade: 'dificil',
    topico: 'Correlacao (Pearson)',
    enunciado:
      'Uma pesquisadora quer investigar a relacao entre horas de estudo semanal (X) e nota na prova de estatistica (Y) em uma amostra de 5 estudantes:\n\nEstudante 1: X = 2, Y = 4\nEstudante 2: X = 4, Y = 6\nEstudante 3: X = 6, Y = 7\nEstudante 4: X = 8, Y = 9\nEstudante 5: X = 10, Y = 8\n\nCalcule o coeficiente de correlacao de Pearson (r) e interprete o resultado.',
    resposta:
      'Etapa 1: Calcular as medias\nMedia de X = (2 + 4 + 6 + 8 + 10) / 5 = 30 / 5 = 6\nMedia de Y = (4 + 6 + 7 + 9 + 8) / 5 = 34 / 5 = 6,8\n\nEtapa 2: Calcular os desvios e produtos cruzados\nEstudante 1: (2-6)(4-6,8) = (-4)(-2,8) = 11,2\nEstudante 2: (4-6)(6-6,8) = (-2)(-0,8) = 1,6\nEstudante 3: (6-6)(7-6,8) = (0)(0,2) = 0\nEstudante 4: (8-6)(9-6,8) = (2)(2,2) = 4,4\nEstudante 5: (10-6)(8-6,8) = (4)(1,2) = 4,8\n\nSoma dos produtos cruzados = 11,2 + 1,6 + 0 + 4,4 + 4,8 = 22,0\n\nEtapa 3: Calcular os desvios quadrados\nPara X: (-4)^2 + (-2)^2 + 0^2 + 2^2 + 4^2 = 16 + 4 + 0 + 4 + 16 = 40\nPara Y: (-2,8)^2 + (-0,8)^2 + (0,2)^2 + (2,2)^2 + (1,2)^2 = 7,84 + 0,64 + 0,04 + 4,84 + 1,44 = 14,8\n\nEtapa 4: Calcular r\nr = 22,0 / raiz(40 x 14,8) = 22,0 / raiz(592) = 22,0 / 24,33 = 0,904\n\nResposta: r = 0,90 (aproximadamente). Trata-se de uma correlacao positiva forte, indicando que, nesta amostra, mais horas de estudo estao associadas a notas mais altas.',
    explicacao:
      'O coeficiente de Pearson (r) varia de -1 a +1. Valores proximos a +1 indicam correlacao positiva forte; proximos a -1, correlacao negativa forte; proximos a 0, ausencia de correlacao linear. O valor de 0,90 indica uma forte associacao positiva entre horas de estudo e nota. Importante: correlacao nao implica causalidade - outros fatores podem estar envolvidos.',
    dica_ollie:
      'O calculo de Pearson e trabalhoso, mas e so seguir a receita! O mais importante em provas e interpretar o resultado: forca (fraca/moderada/forte), direcao (positiva/negativa) e sempre lembrar que correlacao NAO e causalidade!',
  },
  {
    id: 'mpq_calc_004',
    titulo: 'Teste t para Amostras Independentes',
    tipo: 'calculo',
    dificuldade: 'dificil',
    topico: 'Teste t',
    enunciado:
      'Um pesquisador comparou os escores de depressao (BDI-II) entre dois grupos:\n\nGrupo Controle (n=4): escores 8, 10, 12, 10 (Media = 10, s = 1,63)\nGrupo Experimental (n=4): escores 5, 7, 6, 6 (Media = 6, s = 0,82)\n\nSabendo que as variancias podem ser consideradas iguais, calcule o valor de t para amostras independentes. Use alfa = 0,05 e gl = 6. O valor critico de t(6) bicaudal = 2,447.',
    resposta:
      'Etapa 1: Calcular a variancia combinada (pooled)\nsp^2 = [(n1-1)s1^2 + (n2-1)s2^2] / (n1 + n2 - 2)\nsp^2 = [(4-1)(1,63)^2 + (4-1)(0,82)^2] / (4 + 4 - 2)\nsp^2 = [3 x 2,6569 + 3 x 0,6724] / 6\nsp^2 = [7,9707 + 2,0172] / 6\nsp^2 = 9,9879 / 6 = 1,665\n\nEtapa 2: Calcular o erro padrao da diferenca\nSE = raiz(sp^2/n1 + sp^2/n2) = raiz(1,665/4 + 1,665/4)\nSE = raiz(0,416 + 0,416) = raiz(0,832) = 0,912\n\nEtapa 3: Calcular o valor de t\nt = (Media1 - Media2) / SE = (10 - 6) / 0,912 = 4 / 0,912 = 4,39\n\nEtapa 4: Comparar com o valor critico\nt obtido (4,39) > t critico (2,447)\n\nResposta: t(6) = 4,39, p < 0,05. Rejeitamos H0. Ha diferenca estatisticamente significativa entre os grupos nos escores de depressao.',
    explicacao:
      'O teste t para amostras independentes compara as medias de dois grupos. Quando o t obtido excede o t critico, rejeitamos a hipotese nula de que as medias populacionais sao iguais. Neste caso, o grupo experimental apresentou escores significativamente menores de depressao que o grupo controle. O resultado tem relevancia clinica e estatistica.',
    dica_ollie:
      'Nas provas, os professores geralmente dao as medias e desvios ja calculados para voce focar no teste t em si. O segredo e: calcular a variancia combinada, depois o erro padrao, depois o t, e finalmente comparar com o valor critico!',
  },
  {
    id: 'mpq_calc_005',
    titulo: 'Qui-Quadrado de Aderencia',
    tipo: 'calculo',
    dificuldade: 'medio',
    topico: 'Teste qui-quadrado',
    enunciado:
      'Uma pesquisadora investigou a preferencia por abordagem terapeutica entre 100 estudantes de psicologia. As frequencias observadas e esperadas (se nao houvesse preferencia) foram:\n\nPsicanalise: Observado = 35, Esperado = 25\nTCC: Observado = 30, Esperado = 25\nHumanista: Observado = 20, Esperado = 25\nSistemica: Observado = 15, Esperado = 25\n\nCalcule o valor de qui-quadrado (X^2) e determine se ha diferenca significativa na preferencia (alfa = 0,05, gl = 3, valor critico = 7,815).',
    resposta:
      'Formula: X^2 = soma de [(O - E)^2 / E]\n\nPsicanalise: (35 - 25)^2 / 25 = 100 / 25 = 4,00\nTCC: (30 - 25)^2 / 25 = 25 / 25 = 1,00\nHumanista: (20 - 25)^2 / 25 = 25 / 25 = 1,00\nSistemica: (15 - 25)^2 / 25 = 100 / 25 = 4,00\n\nX^2 = 4,00 + 1,00 + 1,00 + 4,00 = 10,00\n\nComparacao: X^2 obtido (10,00) > X^2 critico (7,815)\n\nResposta: X^2(3) = 10,00, p < 0,05. Rejeitamos H0. Ha diferenca estatisticamente significativa na preferencia por abordagem terapeutica entre os estudantes.',
    explicacao:
      'O teste qui-quadrado de aderencia verifica se a distribuicao observada difere significativamente da distribuicao esperada. Os graus de liberdade sao k-1 (numero de categorias menos 1). Como o valor calculado (10,00) excede o critico (7,815), concluimos que a distribuicao de preferencias nao e uniforme, ou seja, ha preferencia diferenciada por certas abordagens.',
    dica_ollie:
      'Qui-quadrado e um dos testes mais cobrados! A formula e simples: para cada categoria, calcule (Observado - Esperado) ao quadrado, divida pelo Esperado, e some tudo. Se o resultado for maior que o valor critico, rejeite H0!',
  },
  {
    id: 'mpq_calc_006',
    titulo: 'Interpretacao do Valor-p',
    tipo: 'calculo',
    dificuldade: 'facil',
    topico: 'Valor-p e significancia',
    enunciado:
      'Um pesquisador realizou um teste t comparando a eficacia de dois tipos de psicoterapia e obteve os seguintes resultados: t(28) = 2,15, p = 0,04. Considerando um nivel de significancia alfa = 0,05:\n\na) O resultado e estatisticamente significativo? Justifique.\nb) Se o pesquisador adotasse alfa = 0,01, a conclusao mudaria?',
    resposta:
      'a) Sim, o resultado e estatisticamente significativo. O valor-p (0,04) e menor que o nivel de significancia adotado (alfa = 0,05), portanto rejeitamos a hipotese nula. Ha evidencia estatistica de diferenca entre a eficacia dos dois tipos de psicoterapia.\n\nb) Sim, a conclusao mudaria. Com alfa = 0,01, o valor-p (0,04) seria maior que o nivel de significancia (0,01), portanto NAO rejeitariamos H0. O resultado nao seria considerado significativo ao nivel de 1%.\n\nIsso ilustra que a "significancia" depende do criterio (alfa) escolhido pelo pesquisador antes da coleta de dados.',
    explicacao:
      'O valor-p representa a probabilidade de obter um resultado tao extremo quanto o observado (ou mais extremo) se a hipotese nula for verdadeira. Quando p < alfa, rejeitamos H0. A escolha do nivel de significancia (alfa) afeta diretamente a conclusao e deve ser definida a priori. Este exemplo mostra como um mesmo resultado pode ser "significativo" ou "nao significativo" dependendo do alfa adotado.',
    dica_ollie:
      'Regra de ouro: p < alfa = significativo (rejeita H0). p > alfa = nao significativo (nao rejeita H0). E cuidado: "nao rejeitar H0" NAO e o mesmo que "aceitar H0"! Voce nunca "prova" que H0 e verdadeira.',
  },
  {
    id: 'mpq_calc_007',
    titulo: 'Calculo do Tamanho de Efeito (d de Cohen)',
    tipo: 'calculo',
    dificuldade: 'medio',
    topico: 'Tamanho de efeito',
    enunciado:
      'Em um estudo comparando ansiedade em estudantes antes e apos um programa de mindfulness, os resultados foram:\n\nGrupo Mindfulness: Media = 15, DP = 4 (n = 30)\nGrupo Controle: Media = 20, DP = 5 (n = 30)\n\nCalcule o d de Cohen e classifique o tamanho do efeito segundo os criterios convencionais (pequeno = 0,2; medio = 0,5; grande = 0,8).',
    resposta:
      'Etapa 1: Calcular o desvio padrao combinado (pooled)\nsp = raiz de [(s1^2 + s2^2) / 2]\nsp = raiz de [(16 + 25) / 2] = raiz de [41 / 2] = raiz de 20,5 = 4,53\n\nEtapa 2: Calcular o d de Cohen\nd = (Media1 - Media2) / sp = (15 - 20) / 4,53 = -5 / 4,53 = -1,10\n\nEm valor absoluto: |d| = 1,10\n\nEtapa 3: Classificacao\n|d| = 1,10 > 0,80 = Tamanho de efeito GRANDE\n\nResposta: d de Cohen = -1,10 (ou 1,10 em modulo). O tamanho do efeito e grande segundo os criterios de Cohen, indicando que o programa de mindfulness teve um impacto substancial na reducao da ansiedade.',
    explicacao:
      'O d de Cohen e uma medida de tamanho de efeito que expressa a diferenca entre dois grupos em unidades de desvio padrao. Diferente do valor-p, que depende do tamanho da amostra, o d de Cohen avalia a magnitude pratica do efeito. Um d de 1,10 significa que o grupo mindfulness apresentou escores de ansiedade 1,10 desvios padrao abaixo do grupo controle, o que e um efeito expressivo.',
    dica_ollie:
      'Significancia estatistica (valor-p) nao e a mesma coisa que importancia pratica (tamanho de efeito)! Com uma amostra muito grande, ate uma diferenca minuscula pode ser "significativa". O d de Cohen mostra se a diferenca e realmente relevante na pratica.',
  },
  {
    id: 'mpq_calc_008',
    titulo: 'ANOVA - Calculo da Razao F',
    tipo: 'calculo',
    dificuldade: 'dificil',
    topico: 'ANOVA basica',
    enunciado:
      'Um pesquisador testou o efeito de tres tecnicas de estudo (A, B, C) sobre a nota em uma prova, com 4 participantes por grupo. Os resultados parciais da ANOVA sao:\n\nSoma dos Quadrados Entre Grupos (SQentre) = 48\nSoma dos Quadrados Dentro dos Grupos (SQdentro) = 36\nGraus de liberdade entre (gl_entre) = k - 1 = 3 - 1 = 2\nGraus de liberdade dentro (gl_dentro) = N - k = 12 - 3 = 9\n\nCalcule a razao F e determine se ha diferenca significativa (F critico para gl 2,9 com alfa = 0,05 e 4,26).',
    resposta:
      'Etapa 1: Calcular o Quadrado Medio Entre Grupos\nQMentre = SQentre / gl_entre = 48 / 2 = 24\n\nEtapa 2: Calcular o Quadrado Medio Dentro dos Grupos\nQMdentro = SQdentro / gl_dentro = 36 / 9 = 4\n\nEtapa 3: Calcular a razao F\nF = QMentre / QMdentro = 24 / 4 = 6,00\n\nEtapa 4: Comparar com F critico\nF obtido (6,00) > F critico (4,26)\n\nResposta: F(2,9) = 6,00, p < 0,05. Rejeitamos H0. Ha diferenca estatisticamente significativa entre pelo menos duas das tres tecnicas de estudo. Sao necessarios testes post-hoc para identificar quais grupos diferem entre si.',
    explicacao:
      'A ANOVA (Analise de Variancia) compara medias de tres ou mais grupos, testando se a variabilidade entre os grupos (devida ao tratamento) e significativamente maior que a variabilidade dentro dos grupos (devida ao erro/acaso). A razao F e a proporcao entre essas duas fontes de variacao. Quando F > F critico, concluimos que pelo menos um par de grupos difere significativamente.',
    dica_ollie:
      'ANOVA = "ANalise de VAriancia". Lembre-se: ela so diz SE ha diferenca, nao ONDE esta a diferenca. Para saber quais grupos diferem, voce precisa de testes post-hoc (como Tukey ou Bonferroni). Na prova, nao esqueca de mencionar isso!',
  },

  // --- MULTIPLA ESCOLHA (8) ---
  {
    id: 'mpq_me_001',
    titulo: 'Tipos de Variaveis',
    tipo: 'multipla_escolha',
    dificuldade: 'facil',
    topico: 'Tipos de variaveis',
    enunciado:
      'Em uma pesquisa sobre saude mental universitaria, uma pesquisadora coletou as seguintes informacoes: genero (masculino/feminino/outro), semestre cursado (1o ao 10o), nivel de ansiedade medido pela escala BAI (escore de 0 a 63), e temperatura corporal em graus Celsius. Respectivamente, essas variaveis sao classificadas como:',
    alternativas: [
      'a) Nominal, ordinal, intervalar, razao',
      'b) Ordinal, nominal, razao, intervalar',
      'c) Nominal, razao, ordinal, intervalar',
      'd) Nominal, ordinal, razao, razao',
    ],
    resposta: 'a',
    explicacao:
      'Genero e nominal (categorias sem ordem). Semestre e ordinal (ha uma ordem logica, mas os intervalos entre semestres nao sao necessariamente iguais em termos de experiencia). O escore da BAI e intervalar (intervalos iguais entre pontos, mas o zero nao e absoluto - zero na BAI nao significa "ausencia total de ansiedade"). Temperatura em Celsius e razao (intervalos iguais e zero absoluto existe em Kelvin, mas em Celsius e convencional - contudo, na pratica, temperatura em Celsius e tratada como intervalar/razao dependendo do contexto; a classificacao mais aceita em metodos de pesquisa e razao por ter intervalos constantes e possibilidade de proporcao).',
    dica_ollie:
      'Use a escada NOIR: Nominal (categorias), Ordinal (ordem), Intervalar (intervalos iguais, zero arbitrario), Razao (zero absoluto). Cada degrau acima "herda" as propriedades dos anteriores!',
  },
  {
    id: 'mpq_me_002',
    titulo: 'Hipoteses H0 e H1',
    tipo: 'multipla_escolha',
    dificuldade: 'facil',
    topico: 'Teste de hipoteses',
    enunciado:
      'Um pesquisador deseja testar se uma intervencao psicologica reduz os niveis de estresse em trabalhadores. Qual das alternativas formula corretamente as hipoteses nula (H0) e alternativa (H1)?',
    alternativas: [
      'a) H0: A intervencao reduz o estresse; H1: A intervencao nao reduz o estresse',
      'b) H0: Nao ha diferenca nos niveis de estresse antes e apos a intervencao; H1: Os niveis de estresse sao menores apos a intervencao',
      'c) H0: Os niveis de estresse aumentam apos a intervencao; H1: Os niveis de estresse permanecem iguais',
      'd) H0: A intervencao e eficaz; H1: A intervencao nao e eficaz',
    ],
    resposta: 'b',
    explicacao:
      'A hipotese nula (H0) sempre representa a ausencia de efeito ou diferenca - e o "status quo" que se pretende testar. A hipotese alternativa (H1) representa o que o pesquisador acredita ou deseja demonstrar. A logica do teste de hipoteses e buscar evidencias contra H0, nao provar H1 diretamente. Se rejeitamos H0, concluimos em favor de H1.',
    dica_ollie:
      'H0 e sempre a "hipotese chata" - nada acontece, nao ha efeito, nao ha diferenca. H1 e o que o pesquisador quer demonstrar. O teste estatistico tenta rejeitar H0, nunca prova-la!',
  },
  {
    id: 'mpq_me_003',
    titulo: 'Delineamento Experimental vs Quasi-experimental',
    tipo: 'multipla_escolha',
    dificuldade: 'medio',
    topico: 'Delineamento experimental e quasi-experimental',
    enunciado:
      'A principal diferenca entre um delineamento experimental verdadeiro e um delineamento quasi-experimental reside em:',
    alternativas: [
      'a) A presenca ou ausencia de um grupo controle',
      'b) A atribuicao aleatoria dos participantes aos grupos (randomizacao)',
      'c) O uso de instrumentos padronizados para coleta de dados',
      'd) O numero de variaveis dependentes analisadas',
    ],
    resposta: 'b',
    explicacao:
      'A randomizacao (atribuicao aleatoria dos participantes as condicoes experimentais) e o criterio fundamental que distingue o delineamento experimental verdadeiro do quasi-experimental. No quasi-experimental, os grupos ja existem previamente (ex: turmas escolares, departamentos) e os participantes nao sao aleatoriamente designados. Ambos podem ter grupo controle e usar instrumentos padronizados, mas sem randomizacao nao podemos afirmar com seguranca que as diferencas observadas se devem ao tratamento e nao a variaveis confundidoras.',
    dica_ollie:
      'A palavra-chave e RANDOMIZACAO. Com ela = experimental verdadeiro. Sem ela = quasi-experimental. E por que isso importa? Porque so a randomizacao garante que os grupos sao equivalentes antes do tratamento!',
  },
  {
    id: 'mpq_me_004',
    titulo: 'Amostragem Probabilistica',
    tipo: 'multipla_escolha',
    dificuldade: 'medio',
    topico: 'Metodos de amostragem',
    enunciado:
      'Uma pesquisadora deseja estudar a prevalencia de burnout em profissionais de saude de um hospital com 4 departamentos de tamanhos diferentes. Ela decide selecionar aleatoriamente participantes de cada departamento, proporcionalmente ao tamanho de cada um. Esse metodo de amostragem e denominado:',
    alternativas: [
      'a) Amostragem aleatoria simples',
      'b) Amostragem por conveniencia',
      'c) Amostragem estratificada proporcional',
      'd) Amostragem sistematica',
    ],
    resposta: 'c',
    explicacao:
      'Na amostragem estratificada proporcional, a populacao e dividida em subgrupos (estratos) com base em uma caracteristica relevante (neste caso, departamento), e participantes sao selecionados aleatoriamente de cada estrato em proporcao ao seu tamanho na populacao. Isso garante que cada subgrupo esteja adequadamente representado na amostra, aumentando a precisao das estimativas.',
    dica_ollie:
      'Estratificada = dividir em "camadas" (estratos) e sortear de cada uma. Se a proporcao na amostra reflete a proporcao na populacao = proporcional. Se cada estrato tem o mesmo numero = nao proporcional. Ambas sao probabilisticas!',
  },
  {
    id: 'mpq_me_005',
    titulo: 'Validade e Fidedignidade',
    tipo: 'multipla_escolha',
    dificuldade: 'medio',
    topico: 'Validade e fidedignidade',
    enunciado:
      'Uma nova escala de empatia foi desenvolvida por pesquisadores brasileiros. Nos estudos de validacao, observou-se que os escores na escala apresentaram alta correlacao teste-reteste apos 4 semanas, mas baixa correlacao com o Indice de Reatividade Interpessoal (IRI), uma medida de empatia ja consagrada. Sobre essa escala, podemos afirmar que:',
    alternativas: [
      'a) A escala apresenta alta validade de construto e baixa fidedignidade',
      'b) A escala apresenta alta fidedignidade (estabilidade temporal) mas baixa validade convergente',
      'c) A escala e tanto valida quanto fidedigna',
      'd) A escala nao apresenta nem validade nem fidedignidade',
    ],
    resposta: 'b',
    explicacao:
      'A alta correlacao teste-reteste indica boa fidedignidade (o instrumento produz resultados consistentes ao longo do tempo). Porem, a baixa correlacao com outra medida estabelecida do mesmo construto (IRI) indica problemas de validade convergente (a escala nao mede o que deveria medir, ou mede um aspecto diferente de empatia). Lembre-se: fidedignidade e necessaria, mas nao suficiente para validade. Um instrumento pode ser fidedigno sem ser valido.',
    dica_ollie:
      'Pense numa balanca que sempre marca 3kg a mais: ela e fidedigna (consistente) mas nao e valida (nao mede o peso real). Fidedignidade = consistencia. Validade = mede o que promete medir.',
  },
  {
    id: 'mpq_me_006',
    titulo: 'Distribuicao Normal',
    tipo: 'multipla_escolha',
    dificuldade: 'facil',
    topico: 'Distribuicao normal',
    enunciado:
      'Em uma distribuicao normal (curva de Gauss), aproximadamente qual porcentagem dos dados esta contida no intervalo de uma media mais ou menos um desvio padrao?',
    alternativas: [
      'a) Aproximadamente 50%',
      'b) Aproximadamente 68%',
      'c) Aproximadamente 95%',
      'd) Aproximadamente 99,7%',
    ],
    resposta: 'b',
    explicacao:
      'A regra empirica (68-95-99,7) da distribuicao normal estabelece que: aproximadamente 68% dos dados estao dentro de 1 desvio padrao da media; aproximadamente 95% estao dentro de 2 desvios padrao; e aproximadamente 99,7% estao dentro de 3 desvios padrao. Esses valores sao fundamentais para a interpretacao de escores padronizados (z-scores) e testes de hipoteses.',
    dica_ollie:
      'Decore a regra 68-95-99,7! Ela aparece em MUITAS questoes. 1 DP = 68%, 2 DPs = 95%, 3 DPs = 99,7%. Visualize a curva de sino e as "fatias" que cada intervalo abrange!',
  },
  {
    id: 'mpq_me_007',
    titulo: 'Erro Tipo I e Erro Tipo II',
    tipo: 'multipla_escolha',
    dificuldade: 'dificil',
    topico: 'Teste de hipoteses',
    enunciado:
      'Em um ensaio clinico, um pesquisador conclui que um novo farmaco para depressao e eficaz (rejeita H0), quando na verdade o farmaco nao tem efeito real. Em outro estudo, outro pesquisador conclui que uma psicoterapia nao e eficaz (nao rejeita H0), quando na verdade ela tem efeito real. Respectivamente, esses erros sao classificados como:',
    alternativas: [
      'a) Erro Tipo II e Erro Tipo I',
      'b) Erro Tipo I e Erro Tipo II',
      'c) Ambos sao Erro Tipo I',
      'd) Ambos sao Erro Tipo II',
    ],
    resposta: 'b',
    explicacao:
      'Erro Tipo I (falso positivo, alfa): rejeitar H0 quando ela e verdadeira (concluir que ha efeito quando nao ha). No primeiro caso, o pesquisador "descobre" um efeito que nao existe. Erro Tipo II (falso negativo, beta): nao rejeitar H0 quando ela e falsa (nao detectar um efeito que existe). No segundo caso, o pesquisador "perde" um efeito real. O nivel de significancia alfa controla a probabilidade do Erro Tipo I, enquanto o poder estatistico (1 - beta) esta relacionado ao Erro Tipo II.',
    dica_ollie:
      'Tipo I = "falso alarme" (voce diz que tem algo, mas nao tem). Tipo II = "alarme perdido" (voce nao detecta algo que esta la). Alfa controla o Tipo I, e o poder do teste controla o Tipo II!',
  },
  {
    id: 'mpq_me_008',
    titulo: 'Escolha do Teste Estatistico',
    tipo: 'multipla_escolha',
    dificuldade: 'dificil',
    topico: 'Escolha do teste estatistico',
    enunciado:
      'Uma pesquisadora deseja comparar os niveis de satisfacao no trabalho (medidos por uma escala Likert de 7 pontos tratada como variavel continua) entre tres grupos profissionais (psicologos, assistentes sociais e pedagogos). Cada participante pertence a apenas um grupo. Qual teste estatistico e mais adequado para essa analise?',
    alternativas: [
      'a) Teste t para amostras independentes',
      'b) Teste qui-quadrado de independencia',
      'c) Analise de Variancia (ANOVA) one-way',
      'd) Correlacao de Pearson',
    ],
    resposta: 'c',
    explicacao:
      'A ANOVA one-way e adequada quando queremos comparar as medias de uma variavel continua (satisfacao) entre tres ou mais grupos independentes (tres profissoes). O teste t so compara dois grupos. O qui-quadrado e para variaveis categoricas. A correlacao de Pearson avalia a relacao entre duas variaveis continuas, nao a diferenca entre grupos. Se os pressupostos da ANOVA nao forem atendidos (normalidade, homocedasticidade), pode-se usar o teste de Kruskal-Wallis como alternativa nao parametrica.',
    dica_ollie:
      'Fluxograma rapido: Comparar medias? Sim. Quantos grupos? 2 = teste t. 3 ou mais = ANOVA. Variavel categorica vs categorica? Qui-quadrado. Duas variaveis continuas? Correlacao. Decore esse fluxo!',
  },

  // --- VERDADEIRO OU FALSO (4) ---
  {
    id: 'mpq_vf_001',
    titulo: 'Correlacao e Causalidade',
    tipo: 'verdadeiro_falso',
    dificuldade: 'facil',
    topico: 'Correlacao (Pearson)',
    enunciado:
      'Verdadeiro ou Falso: Se duas variaveis apresentam uma correlacao de Pearson de r = 0,85 (forte e positiva), podemos concluir que uma variavel causa a outra.',
    resposta: 'Falso',
    explicacao:
      'Correlacao nao implica causalidade. Uma correlacao forte indica que as variaveis covariam sistematicamente, mas nao permite inferir uma relacao de causa e efeito. A associacao pode ser devida a uma terceira variavel (confundidora), causalidade reversa, ou simplesmente coincidencia. Para estabelecer causalidade, sao necessarios delineamentos experimentais com manipulacao da variavel independente e controle de variaveis estranhas.',
    dica_ollie:
      'Essa e uma das frases mais importantes da estatistica: "Correlacao nao e causalidade!" Exemplo classico: venda de sorvetes e afogamentos estao correlacionados, mas um nao causa o outro (ambos aumentam no verao).',
  },
  {
    id: 'mpq_vf_002',
    titulo: 'Mediana e Outliers',
    tipo: 'verdadeiro_falso',
    dificuldade: 'facil',
    topico: 'Media, mediana e moda',
    enunciado:
      'Verdadeiro ou Falso: A mediana e uma medida de tendencia central mais robusta que a media na presenca de valores extremos (outliers), pois nao e influenciada pela magnitude dos valores.',
    resposta: 'Verdadeiro',
    explicacao:
      'A mediana e mais robusta (resistente) a outliers porque depende apenas da posicao dos valores na distribuicao ordenada, nao de suas magnitudes. A media, por outro lado, incorpora o valor de cada observacao no calculo, sendo fortemente influenciada por valores extremos. Por exemplo, em uma amostra de rendas onde ha um bilionario, a mediana representaria melhor a renda "tipica" do que a media, que seria inflada pelo valor extremo.',
    dica_ollie:
      'Quando uma distribuicao tem outliers ou e muito assimetrica, a mediana e sua melhor amiga! A media e "democratica" demais - um unico valor extremo pode distorce-la completamente.',
  },
  {
    id: 'mpq_vf_003',
    titulo: 'Valor-p e Probabilidade da Hipotese',
    tipo: 'verdadeiro_falso',
    dificuldade: 'dificil',
    topico: 'Valor-p e significancia',
    enunciado:
      'Verdadeiro ou Falso: O valor-p representa a probabilidade de a hipotese nula (H0) ser verdadeira, dados os resultados obtidos.',
    resposta: 'Falso',
    explicacao:
      'Essa e uma das interpretacoes erroneas mais comuns em estatistica. O valor-p NAO e a probabilidade de H0 ser verdadeira. O valor-p e a probabilidade de obter os resultados observados (ou mais extremos) SE a hipotese nula for verdadeira. Em termos formais: p = P(dados | H0), e nao P(H0 | dados). Para calcular P(H0 | dados), seria necessaria uma abordagem bayesiana, que incorpora a probabilidade a priori de H0.',
    dica_ollie:
      'Cuidado! Muita gente erra isso. O valor-p NAO diz a chance de H0 ser verdadeira. Ele diz: "Se H0 fosse verdadeira, qual a chance de eu ver esses dados?" A diferenca e sutil mas fundamental!',
  },
  {
    id: 'mpq_vf_004',
    titulo: 'Amostra por Conveniencia e Generalizacao',
    tipo: 'verdadeiro_falso',
    dificuldade: 'medio',
    topico: 'Metodos de amostragem',
    enunciado:
      'Verdadeiro ou Falso: A amostragem por conveniencia, embora pratica e amplamente utilizada em pesquisas em psicologia, limita a generalizacao dos resultados para a populacao-alvo, pois nao garante representatividade.',
    resposta: 'Verdadeiro',
    explicacao:
      'A amostragem por conveniencia seleciona participantes com base na acessibilidade e disponibilidade (ex: estudantes de graduacao em psicologia). Embora seja a mais utilizada em pesquisas psicologicas por razoes praticas e economicas, ela produz amostras que podem nao ser representativas da populacao geral, limitando a validade externa (generalizabilidade) dos achados. Muitas replicacoes com amostras diversas sao necessarias para aumentar a confianca na generalizacao.',
    dica_ollie:
      'A grande maioria das pesquisas em psicologia usa amostras de conveniencia (estudantes universitarios!). Isso e uma limitacao conhecida. Na hora de escrever a discussao do seu trabalho, sempre mencione as limitacoes da amostragem!',
  },
];

// ============================================================
// PSICOLOGIA DA PERSONALIDADE 2 - Fenomenologia
// ============================================================

const personalidadeExercises: BankExercise[] = [
  // --- MULTIPLA ESCOLHA (8) ---
  {
    id: 'pp2_me_001',
    titulo: 'Intencionalidade em Husserl',
    tipo: 'multipla_escolha',
    dificuldade: 'medio',
    topico: 'Intencionalidade (Husserl)',
    enunciado:
      'Para Edmund Husserl, o conceito de intencionalidade e fundamental para a fenomenologia. Assinale a alternativa que define corretamente esse conceito:',
    alternativas: [
      'a) Intencionalidade refere-se a vontade deliberada e consciente de realizar uma acao com um objetivo especifico',
      'b) Intencionalidade e a propriedade fundamental da consciencia de ser sempre consciencia DE algo, ou seja, toda consciencia e direcionada a um objeto',
      'c) Intencionalidade e um conceito exclusivamente etico que se refere as intencoes morais por tras das acoes humanas',
      'd) Intencionalidade e o processo inconsciente pelo qual a mente seleciona estimulos relevantes do ambiente',
    ],
    resposta: 'b',
    explicacao:
      'Na fenomenologia husserliana, intencionalidade nao tem o sentido coloquial de "proposito" ou "querer". Trata-se de uma propriedade essencial da consciencia: ela e sempre consciencia DE algo (de um objeto, uma ideia, uma lembranca). Nao existe consciencia vazia; toda vivencia consciente (noesis) se dirige a um conteudo intencional (noema). Esse conceito, herdado de Franz Brentano, e a pedra angular de toda a fenomenologia.',
    dica_ollie:
      'Cuidado para nao confundir "intencionalidade" fenomenologica com "intencao" do dia a dia! Na fenomenologia, significa que a consciencia esta sempre apontando para algo - e como uma lanterna que sempre ilumina alguma coisa.',
  },
  {
    id: 'pp2_me_002',
    titulo: 'Dasein e Ser-no-Mundo',
    tipo: 'multipla_escolha',
    dificuldade: 'dificil',
    topico: 'Dasein e ser-no-mundo (Heidegger)',
    enunciado:
      'Em "Ser e Tempo" (1927), Martin Heidegger utiliza o termo Dasein para se referir ao modo de ser proprio do ser humano. Sobre o Dasein e a estrutura do ser-no-mundo (In-der-Welt-sein), e correto afirmar:',
    alternativas: [
      'a) O Dasein e uma substancia pensante (res cogitans) que se relaciona secundariamente com o mundo externo',
      'b) O ser-no-mundo significa que o Dasein esta originariamente e constitutivamente imerso em um mundo de significados, relacoes e possibilidades, sendo impossivel separa-lo do mundo',
      'c) O conceito de Dasein e sinonimo de "ego transcendental" na fenomenologia de Husserl',
      'd) O ser-no-mundo indica que o ser humano e determinado pelo ambiente fisico, numa perspectiva materialista',
    ],
    resposta: 'b',
    explicacao:
      'Para Heidegger, o Dasein (ser-ai, existencia) nao e um sujeito isolado que se conecta posteriormente ao mundo. A estrutura ser-no-mundo e unitaria e originaria: o Dasein ja sempre se encontra lancado (Geworfenheit) em um mundo de relacoes, significados e possibilidades. Isso supera a dicotomia sujeito-objeto da filosofia moderna. O mundo nao e meramente o ambiente fisico, mas um horizonte de significacao no qual o Dasein existe e se compreende.',
    dica_ollie:
      'Heidegger quer superar a ideia de um sujeito "dentro da cabeca" olhando para um mundo "la fora". Para ele, nos JA SOMOS no mundo antes de qualquer reflexao. E como respirar: voce nao decide respirar, ja esta respirando!',
  },
  {
    id: 'pp2_me_003',
    titulo: 'Reducao Fenomenologica (Epoche)',
    tipo: 'multipla_escolha',
    dificuldade: 'medio',
    topico: 'Reducao fenomenologica (epoche)',
    enunciado:
      'A reducao fenomenologica (epoche), proposta por Husserl, consiste em:',
    alternativas: [
      'a) Eliminar completamente todas as crencas e preconceitos, alcancando uma mente "em branco"',
      'b) Suspender o juizo natural sobre a existencia do mundo para descrever os fenomenos tal como aparecem a consciencia, sem pressupor sua realidade objetiva',
      'c) Reduzir os fenomenos psiquicos a seus correlatos neurais, adotando uma perspectiva neurocientifica',
      'd) Simplificar os dados da experiencia para encaixa-los em categorias teoricas pre-existentes',
    ],
    resposta: 'b',
    explicacao:
      'A epoche (do grego "suspensao") e o procedimento metodologico central da fenomenologia husserliana. Nao se trata de negar a existencia do mundo, mas de colocar "entre parenteses" a atitude natural (a crenca espontanea na existencia independente do mundo) para poder descrever os fenomenos puros da consciencia. O objetivo e alcancar as essencias (eidos) dos fenomenos, descrevendo o que aparece e como aparece, sem pressupostos ontologicos.',
    dica_ollie:
      'A epoche nao e "fingir que o mundo nao existe". E mais como colocar a pergunta "isso existe de verdade?" em pausa para focar em COMO as coisas aparecem para voce. E trocar o "o que e?" pelo "como se mostra?".',
  },
  {
    id: 'pp2_me_004',
    titulo: 'Corpo Vivido em Merleau-Ponty',
    tipo: 'multipla_escolha',
    dificuldade: 'medio',
    topico: 'Corpo vivido e percepcao (Merleau-Ponty)',
    enunciado:
      'Na "Fenomenologia da Percepcao" (1945), Merleau-Ponty introduz a nocao de corpo proprio (corps propre) ou corpo vivido. Qual das alternativas expressa corretamente essa concepcao?',
    alternativas: [
      'a) O corpo e apenas um objeto fisico entre outros, submetido as leis mecanicas da natureza',
      'b) O corpo vivido e o sujeito da percepcao e da acao; nao e simplesmente um objeto, mas o veiculo do ser-no-mundo, inseparavel da subjetividade',
      'c) O corpo e irrelevante para a experiencia psicologica, sendo a mente pura a verdadeira fonte do conhecimento',
      'd) O corpo vivido e identico ao corpo estudado pela anatomia e pela fisiologia medica',
    ],
    resposta: 'b',
    explicacao:
      'Para Merleau-Ponty, o corpo vivido (corps propre) nao e nem o corpo-objeto da ciencia natural nem uma extensao da mente cartesiana. Ele e o meio pelo qual existimos no mundo, percebemos, agimos e nos expressamos. O corpo vivido e ambiguo: e simultaneamente aquele que percebe e aquele que pode ser percebido, ultrapassando a dualidade mente-corpo. A percepcao, para Merleau-Ponty, e primordialmente corporal e pre-reflexiva.',
    dica_ollie:
      'Merleau-Ponty diz que voce NAO E uma mente "dentro" de um corpo. Voce E seu corpo vivido! Quando voce pega um copo, nao e sua mente "mandando" o corpo - e seu corpo-sujeito agindo no mundo. Pense nisso na proxima vez que pegar algo!',
  },
  {
    id: 'pp2_me_005',
    titulo: 'Fenomenologia versus Positivismo',
    tipo: 'multipla_escolha',
    dificuldade: 'facil',
    topico: 'Fenomenologia vs positivismo',
    enunciado:
      'A fenomenologia de Husserl surgiu em um contexto de debate com o positivismo e o psicologismo. Qual das alternativas apresenta corretamente uma diferenca fundamental entre a abordagem fenomenologica e a positivista?',
    alternativas: [
      'a) A fenomenologia busca explicacoes causais dos fenomenos, enquanto o positivismo busca descricoes qualitativas',
      'b) O positivismo privilegia a experiencia vivida em primeira pessoa, enquanto a fenomenologia se restringe a dados objetivos',
      'c) A fenomenologia busca descrever os fenomenos tal como se apresentam a consciencia, enquanto o positivismo restringe o conhecimento cientifico aos fatos observaveis e mensuraveis',
      'd) Nao ha diferenca significativa, pois ambas compartilham os mesmos pressupostos epistemologicos',
    ],
    resposta: 'c',
    explicacao:
      'A fenomenologia e o positivismo partem de bases epistemologicas radicalmente diferentes. O positivismo (Comte, e posteriormente o positivismo logico) restringe o conhecimento valido aos fatos observaveis, mensuraveis e verificaveis, buscando leis causais. A fenomenologia, por outro lado, volta-se para a experiencia vivida e para os modos como os fenomenos se dao a consciencia, utilizando a descricao eidética em vez da explicacao causal. Husserl criticou o naturalismo positivista por reduzir a consciencia a um objeto natural.',
    dica_ollie:
      'Positivismo = "so vale o que pode medir e observar de fora". Fenomenologia = "vamos voltar as coisas mesmas e descrever como elas aparecem para quem vive a experiencia". Sao olhares muito diferentes sobre o mesmo mundo!',
  },
  {
    id: 'pp2_me_006',
    titulo: 'Intersubjetividade na Fenomenologia',
    tipo: 'multipla_escolha',
    dificuldade: 'dificil',
    topico: 'Intersubjetividade',
    enunciado:
      'O problema da intersubjetividade e central na fenomenologia. Sobre esse tema, assinale a alternativa correta:',
    alternativas: [
      'a) Para Husserl, o outro e conhecido apenas por inferencia logica, nunca pela experiencia direta, configurando um solipsismo inevitavel',
      'b) Husserl abordou a intersubjetividade por meio da nocao de "empatia" (Einfuhlung) e da constituicao do alter ego na experiencia transcendental, enquanto Merleau-Ponty enfatizou o papel do corpo na relacao intercorporal com o outro',
      'c) A fenomenologia ignora a questao do outro, ocupando-se exclusivamente da consciencia individual isolada',
      'd) Heidegger resolveu completamente o problema da intersubjetividade ao afirmar que o Dasein e essencialmente solitario',
    ],
    resposta: 'b',
    explicacao:
      'Husserl enfrentou o desafio da intersubjetividade (como sei que o outro e tambem uma consciencia?) por meio da Einfuhlung: uma forma de "apresentacao" analogica pela qual constituimos o outro como alter ego. Merleau-Ponty avancou nessa questao enfatizando a intercorporalidade: e pelo corpo vivido que encontramos o outro diretamente, numa percepcao pre-reflexiva. Heidegger contribuiu com o conceito de Mitsein (ser-com), mostrando que o Dasein e constitutivamente ser-com-os-outros, nao solitario.',
    dica_ollie:
      'Cada fenomenologo aborda o outro de um jeito: Husserl pela empatia transcendental, Merleau-Ponty pelo encontro entre corpos, Heidegger pelo "ser-com". Nenhum deles aceita que estamos presos dentro de nos mesmos!',
  },
  {
    id: 'pp2_me_007',
    titulo: 'Temporalidade na Fenomenologia',
    tipo: 'multipla_escolha',
    dificuldade: 'dificil',
    topico: 'Temporalidade',
    enunciado:
      'A temporalidade e um tema central tanto em Husserl quanto em Heidegger. Sobre a concepcao fenomenologica do tempo, e correto afirmar:',
    alternativas: [
      'a) Husserl e Heidegger concordam que o tempo e uma sequencia objetiva de instantes mensurados pelo relogio, sem dimensao subjetiva',
      'b) Para Husserl, a consciencia interna do tempo envolve retencao (do que acabou de passar), impressao originaria (do presente) e protencao (do que esta por vir); para Heidegger, a temporalidade do Dasein se desdobra em ter-sido, estar-presente e porvir, sendo o porvir primordial',
      'c) A fenomenologia nega qualquer relacao entre temporalidade e existencia humana',
      'd) Para Heidegger, o passado e a dimensao temporal mais fundamental do Dasein',
    ],
    resposta: 'b',
    explicacao:
      'Husserl analisou a consciencia interna do tempo com a triade retencao-impressao originaria-protencao, mostrando que o presente vivo da consciencia sempre carrega consigo o "acabou de passar" e o "esta por vir". Heidegger radicalizou essa analise: a temporalidade (Zeitlichkeit) e o sentido do ser do Dasein, e se articula em existenciais (ter-sido/Gewesenheit, estar-presente/Gegenwart, porvir/Zukunft). Para Heidegger, o porvir (as possibilidades projetadas) e a dimensao primordial, pois o Dasein existe como projeto lancado.',
    dica_ollie:
      'Husserl analisa o tempo "de dentro" da consciencia: como voce percebe que uma melodia tem continuidade? Heidegger vai mais fundo: o tempo nao e algo que "passa", e a propria estrutura da existencia. Voce nao esta NO tempo, voce E temporal!',
  },
  {
    id: 'pp2_me_008',
    titulo: 'Mundo da Vida (Lebenswelt)',
    tipo: 'multipla_escolha',
    dificuldade: 'medio',
    topico: 'Mundo da vida (Lebenswelt)',
    enunciado:
      'O conceito de Lebenswelt (mundo da vida), desenvolvido por Husserl em sua obra tardia "A Crise das Ciencias Europeias" (1936), refere-se a:',
    alternativas: [
      'a) O mundo objetivo descrito pelas ciencias naturais, composto por entidades fisicas mensuráveis',
      'b) O mundo pre-cientifico da experiencia cotidiana, vivido e compartilhado, que serve de fundamento para todas as construcoes cientificas',
      'c) Um mundo puramente subjetivo e privado, acessivel apenas pela introspecçao individual',
      'd) O conceito hegeliano de espirito objetivo, transposto para a fenomenologia',
    ],
    resposta: 'b',
    explicacao:
      'O Lebenswelt e o mundo da experiencia vivida, pre-teorica e pre-cientifica, no qual estamos imersos em nossa vida cotidiana. Husserl argumentou que as ciencias modernas, ao se formalizarem e matematizarem, esqueceram esse solo originario de sentido. O Lebenswelt e intersubjetivo (compartilhado), intuitivo e constitui o horizonte de sentido a partir do qual qualquer atividade cientifica se torna possivel. Recuperar o Lebenswelt era, para Husserl, superar a crise das ciencias.',
    dica_ollie:
      'O Lebenswelt e o mundo em que voce VIVE antes de teorizá-lo. E o mundo da mesa que voce usa para comer (nao da mesa feita de atomos), do sol que "nasce" (nao da Terra que gira). A ciencia parte desse mundo, mas esquece dele!',
  },

  // --- DISSERTATIVA (5) ---
  {
    id: 'pp2_dis_001',
    titulo: 'Metodo Fenomenologico na Psicologia',
    tipo: 'dissertativa',
    dificuldade: 'dificil',
    topico: 'Metodo fenomenologico na psicologia',
    enunciado:
      'Explique como o metodo fenomenologico pode ser aplicado na pesquisa em psicologia clinica. Em sua resposta, aborde: (a) os passos fundamentais do metodo (epoche, reducao, descricao); (b) como esse metodo se diferencia dos metodos quantitativos tradicionais; e (c) um exemplo de questao de pesquisa que seria adequada a essa abordagem.',
    resposta:
      'O metodo fenomenologico na psicologia clinica visa compreender a experiencia vivida dos sujeitos a partir de sua propria perspectiva. Os passos fundamentais incluem: (a) a epoche, na qual o pesquisador suspende seus pressupostos teoricos e juizos previos sobre o fenomeno investigado; a reducao fenomenologica, que busca identificar as estruturas essenciais (invariantes) da experiencia a partir dos relatos dos participantes; e a descricao, que consiste na elaboracao de uma narrativa fiel a experiencia tal como vivida. Diferentemente dos metodos quantitativos, que buscam mensurar variaveis, testar hipoteses e generalizar resultados, o metodo fenomenologico e qualitativo, idiografico e busca profundidade compreensiva. Um exemplo de questao adequada seria: "Como e a experiencia vivida de mães que enfrentam depressao pos-parto?" -- buscando descrever os significados, as vivencias corporais e relacionais desse fenomeno a partir dos relatos em primeira pessoa.',
    explicacao:
      'Esta questao avalia a compreensao do metodo fenomenologico aplicado a pesquisa psicologica. O aluno deve demonstrar conhecimento dos procedimentos especificos (epoche, reducao, descricao), da diferenciacao epistemologica em relacao ao paradigma quantitativo, e da capacidade de formular questoes de pesquisa coerentes com a abordagem fenomenologica.',
    dica_ollie:
      'Em dissertativas, organize sua resposta em topicos claros que correspondam ao que foi pedido. O professor quer ver que voce entende o METODO, nao so a teoria. Mostre que sabe como a fenomenologia funciona na PRATICA da pesquisa!',
  },
  {
    id: 'pp2_dis_002',
    titulo: 'Critica de Heidegger a Husserl',
    tipo: 'dissertativa',
    dificuldade: 'dificil',
    topico: 'Fenomenologia existencial',
    enunciado:
      'Discorra sobre as principais diferencas entre a fenomenologia transcendental de Husserl e a fenomenologia existencial (hermeneutica) de Heidegger. Aborde especificamente: a questao do sujeito, a relacao com o mundo e o papel da interpretacao.',
    resposta:
      'Husserl desenvolveu uma fenomenologia transcendental centrada na consciencia pura como campo de investigacao. Apos a reducao, chega-se ao ego transcendental, uma consciencia constituidora de sentido. A relacao com o mundo e mediada pela intencionalidade da consciencia, e o metodo e primariamente descritivo. Heidegger, embora formado na fenomenologia husserliana, operou uma "virada" fundamental: substituiu a consciencia transcendental pelo Dasein, um ente que ja sempre se encontra lancado no mundo. Para Heidegger, nao ha um sujeito puro anterior ao mundo; o ser-no-mundo e a estrutura originaria. Alem disso, Heidegger introduziu a hermeneutica (interpretacao) como elemento constitutivo: toda compreensao ja e interpretativa, inserida no circulo hermeneutico. Enquanto Husserl buscava descricoes puras das essencias, Heidegger argumentava que nao ha compreensao sem pre-compreensao, e que a interpretacao e uma condicao existencial do Dasein, nao um metodo opcional.',
    explicacao:
      'Esta questao exige a comparacao sistematica entre dois grandes expoentes da fenomenologia. O aluno deve demonstrar compreensao das divergencias fundamentais: consciencia transcendental vs Dasein, descricao vs interpretacao, e sujeito constituinte vs ser-no-mundo. A questao avalia a capacidade de articular conceitos complexos de forma clara e comparativa.',
    dica_ollie:
      'Em questoes comparativas, organize sua resposta com criterios claros de comparacao (sujeito, mundo, metodo). Nao basta descrever cada autor separadamente - voce precisa mostrar como e POR QUE eles divergem. Fazer uma tabelinha mental ajuda!',
  },
  {
    id: 'pp2_dis_003',
    titulo: 'Percepcao em Merleau-Ponty',
    tipo: 'dissertativa',
    dificuldade: 'medio',
    topico: 'Corpo vivido e percepcao (Merleau-Ponty)',
    enunciado:
      'A partir da fenomenologia de Merleau-Ponty, explique por que a percepcao nao pode ser reduzida nem ao empirismo (a percepcao como recepcao passiva de estimulos) nem ao intelectualismo (a percepcao como construcao do intelecto). Utilize o conceito de corpo vivido em sua resposta.',
    resposta:
      'Para Merleau-Ponty, tanto o empirismo quanto o intelectualismo falham em compreender a percepcao. O empirismo a reduz a uma recepcao passiva de estimulos sensoriais atomizados, como se o sujeito fosse um receptor vazio. O intelectualismo, por sua vez, faz da percepcao um ato de julgamento intelectual que reconstroi o mundo a partir de categorias mentais. Ambos compartilham o "prejuizo do mundo objetivo" e a dualidade mente-corpo. Merleau-Ponty propoe que a percepcao e primordialmente um ato do corpo vivido (corps propre), que nao e nem puro objeto nem pura consciencia. O corpo vivido ja esta engajado no mundo numa relacao pre-reflexiva: antes de "pensar" sobre o que vejo, meu corpo ja percebe significados, distancias e possibilidades de acao. A percepcao e, portanto, uma atividade corporea, situada e significativa que precede qualquer operacao intelectual. O exemplo classico e o "membro fantasma": mesmo apos a amputacao, o corpo vivido mantem o esquema corporal, mostrando que a percepcao nao se reduz a estimulos fisicos nem a representacoes mentais.',
    explicacao:
      'Esta questao avalia a compreensao da critica de Merleau-Ponty as duas tradicoes filosoficas dominantes e sua proposta original centrada no corpo vivido. O aluno deve mostrar por que tanto a recepcao passiva (empirismo) quanto a construcao ativa (intelectualismo) sao insuficientes, e como o corpo vivido supera essa dicotomia.',
    dica_ollie:
      'Merleau-Ponty esta sempre no "meio" entre dois extremos: nem empirismo, nem intelectualismo; nem corpo-objeto, nem mente pura. Quando responder, mostre como ele supera AMBOS os lados. O corpo vivido e a "terceira via"!',
  },
  {
    id: 'pp2_dis_004',
    titulo: 'Circulo Hermeneutico',
    tipo: 'dissertativa',
    dificuldade: 'medio',
    topico: 'Circulo hermeneutico',
    enunciado:
      'Explique o conceito de circulo hermeneutico na fenomenologia de Heidegger e discuta suas implicacoes para a pesquisa em psicologia. O circulo hermeneutico e um problema ou uma condicao positiva do conhecimento?',
    resposta:
      'O circulo hermeneutico, em Heidegger, refere-se a estrutura circular da compreensao: toda interpretacao de um fenomeno ja parte de uma pre-compreensao (Vorverstaendnis) que condiciona o que pode ser compreendido. Para compreender o todo, precisamos entender as partes, mas para entender as partes, ja precisamos ter alguma compreensao do todo. Para Heidegger, isso nao e um defeito logico a ser evitado (como pensavam os logicos), mas sim uma condicao ontologica positiva: e a propria estrutura existencial do compreender. O Dasein sempre ja se encontra em um horizonte de sentido (tradicao, linguagem, cultura) a partir do qual interpreta o mundo. Na pesquisa em psicologia, isso implica que: (1) o pesquisador nunca parte de um "ponto zero" neutro, mas de suas pre-compreensoes; (2) o metodo nao consiste em eliminar essas pre-compreensoes, mas em torna-las explicitas e coloca-las em jogo no dialogo com o fenomeno; (3) a compreensao se aprofunda num movimento de ida e volta entre as partes (relatos individuais) e o todo (a estrutura do fenomeno), refinando progressivamente a interpretacao.',
    explicacao:
      'O circulo hermeneutico e um conceito fundamental para compreender a epistemologia fenomenologica. O aluno deve demonstrar que nao se trata de um "vicio logico", mas de uma condicao ontologica, e articular suas implicacoes concretas para a pratica de pesquisa em psicologia.',
    dica_ollie:
      'Nao caia na armadilha de dizer que o circulo hermeneutico e um "problema"! Heidegger diz que e uma condicao POSITIVA. O segredo nao e sair do circulo (impossivel), mas entrar nele de forma correta e consciente.',
  },
  {
    id: 'pp2_dis_005',
    titulo: 'Contribuicoes da Fenomenologia para a Psicologia',
    tipo: 'dissertativa',
    dificuldade: 'facil',
    topico: 'Fenomenologia e psicologia',
    enunciado:
      'Apresente pelo menos tres contribuicoes da abordagem fenomenologica para a pratica clinica em psicologia, articulando-as com conceitos de Husserl, Heidegger ou Merleau-Ponty.',
    resposta:
      'A fenomenologia oferece contribuicoes fundamentais para a clinica psicologica: (1) A atitude de epoche (Husserl) inspira a postura clinica de suspensao de pressupostos teoricos e diagnosticos precipitados, permitindo ao psicologo acolher a experiencia do paciente tal como se apresenta, sem encaixa-la prematuramente em categorias nosologicas. (2) O conceito de ser-no-mundo (Heidegger) permite compreender o sofrimento psiquico nao como um "defeito" interno do individuo, mas como um modo de existir em relacao com o mundo, os outros e as proprias possibilidades, ampliando a compreensao clinica para alem do intrapsiquico. (3) A nocao de corpo vivido (Merleau-Ponty) fundamenta a atencao clinica as dimensoes corporais da experiencia, compreendendo sintomas somaticos, angustia corporal e expressoes nao verbais como manifestacoes do corpo-sujeito, e nao como meros epifenomenos de processos mentais ou biologicos.',
    explicacao:
      'Esta questao avalia a capacidade do aluno de articular conceitos fenomenologicos abstratos com a pratica clinica concreta. Espera-se que o aluno demonstre como a fenomenologia transforma a postura e a compreensao do psicologo clinico, indo alem da mera repeticao teorica.',
    dica_ollie:
      'O professor quer ver que voce consegue "sair" da teoria pura e mostrar como a fenomenologia muda a pratica do psicologo. Pense em exemplos concretos do consultorio para cada conceito que apresentar!',
  },

  // --- VERDADEIRO OU FALSO (4) ---
  {
    id: 'pp2_vf_001',
    titulo: 'Fenomenologia e Subjetivismo',
    tipo: 'verdadeiro_falso',
    dificuldade: 'facil',
    topico: 'Fenomenologia vs positivismo',
    enunciado:
      'Verdadeiro ou Falso: A fenomenologia husserliana pode ser considerada uma forma de subjetivismo, ja que trata apenas das opinioes e impressoes pessoais de cada individuo, sem pretensao de rigor ou universalidade.',
    resposta: 'Falso',
    explicacao:
      'A fenomenologia de Husserl NAO e subjetivismo. Husserl buscava fundamentar a filosofia como "ciencia rigorosa" (strenge Wissenschaft). A reducao fenomenologica nao conduz a opinioes subjetivas, mas a essencias universais (eidos) dos fenomenos. A descricao eidética visa o que e invariante e necessario nas experiencias, nao o meramente individual ou opinativo. O lema husserliano "voltar as coisas mesmas" (zu den Sachen selbst) expressa justamente o compromisso com o rigor descritivo.',
    dica_ollie:
      'Muita gente confunde fenomenologia com "cada um ve de um jeito". Errado! Husserl buscava essencias universais, nao opinioes. A fenomenologia e rigorosa a seu modo, so que de forma diferente das ciencias naturais.',
  },
  {
    id: 'pp2_vf_002',
    titulo: 'Heidegger e a Analise Existencial',
    tipo: 'verdadeiro_falso',
    dificuldade: 'medio',
    topico: 'Dasein e ser-no-mundo (Heidegger)',
    enunciado:
      'Verdadeiro ou Falso: Para Heidegger, a angustia (Angst) e um estado de humor (Stimmung) privilegiado que revela ao Dasein sua condicao fundamental de ser-para-a-morte e o confronta com a totalidade de suas possibilidades existenciais.',
    resposta: 'Verdadeiro',
    explicacao:
      'Na analitica existencial de Heidegger, a angustia (Angst) e distinta do medo (Furcht). O medo tem um objeto determinado (medo de algo), enquanto a angustia e uma disposicao afetiva fundamental sem objeto especifico - e angustia diante do proprio existir. Na angustia, o mundo cotidiano perde sua familiaridade (Unheimlichkeit), e o Dasein e confrontado com sua finitude (ser-para-a-morte) e com a necessidade de assumir autenticamente suas possibilidades. A angustia revela a "estranheza" (Unheimlichkeit) fundamental da existencia.',
    dica_ollie:
      'Para Heidegger, a angustia nao e doenca - e revelacao! Ela mostra quem voce realmente e, alem das mascaras do "a gente" (das Man). E desconfortavel, mas e autenticidade pura.',
  },
  {
    id: 'pp2_vf_003',
    titulo: 'Merleau-Ponty e o Dualismo',
    tipo: 'verdadeiro_falso',
    dificuldade: 'facil',
    topico: 'Corpo vivido e percepcao (Merleau-Ponty)',
    enunciado:
      'Verdadeiro ou Falso: A fenomenologia de Merleau-Ponty mantem a separacao cartesiana entre mente (res cogitans) e corpo (res extensa), tratando o corpo como um mero instrumento controlado pela mente.',
    resposta: 'Falso',
    explicacao:
      'Merleau-Ponty e um dos maiores criticos do dualismo cartesiano na filosofia do seculo XX. Sua nocao de corpo vivido (corps propre) busca justamente superar a dicotomia mente-corpo. Para ele, o corpo nao e instrumento da mente, mas e o proprio sujeito da experiencia. Somos corpos que pensam e pensamentos que se encarnam - a "carne" (chair), conceito de sua obra tardia, expressa essa unidade radical entre o subjetivo e o corporal.',
    dica_ollie:
      'Merleau-Ponty e o filosofo que mais insiste que CORPO e MENTE nao sao coisas separadas. Se a questao insinuar dualismo em Merleau-Ponty, pode marcar Falso com tranquilidade!',
  },
  {
    id: 'pp2_vf_004',
    titulo: 'Lebenswelt e Ciencia',
    tipo: 'verdadeiro_falso',
    dificuldade: 'medio',
    topico: 'Mundo da vida (Lebenswelt)',
    enunciado:
      'Verdadeiro ou Falso: Segundo Husserl, o mundo da vida (Lebenswelt) e o fundamento pre-cientifico sobre o qual as ciencias se constroem, e a crise das ciencias europeias decorre justamente do esquecimento desse fundamento.',
    resposta: 'Verdadeiro',
    explicacao:
      'Em "A Crise das Ciencias Europeias e a Fenomenologia Transcendental" (1936), Husserl argumenta que as ciencias modernas, ao se formalizarem cada vez mais (especialmente com a matematizacao galileana da natureza), perderam a conexao com o Lebenswelt, o solo de sentido a partir do qual toda atividade cientifica se origina. Essa "crise" nao e uma falha tecnica, mas uma crise de sentido: as ciencias ja nao respondem as questoes fundamentais da existencia humana porque se afastaram do mundo vivido.',
    dica_ollie:
      'Husserl nao e contra a ciencia! Ele diz que a ciencia esqueceu de ONDE ela veio (o mundo vivido) e PARA QUE serve (dar sentido a existencia humana). A fenomenologia quer reconectar a ciencia ao seu solo de sentido.',
  },

  // --- ASSOCIACAO (3) ---
  {
    id: 'pp2_as_001',
    titulo: 'Fenomenologos e seus Conceitos-chave',
    tipo: 'associacao',
    dificuldade: 'facil',
    topico: 'Conceitos fundamentais da fenomenologia',
    enunciado:
      'Associe cada filosofo (coluna A) com o conceito que lhe e mais diretamente associado (coluna B):\n\nColuna A:\n1. Edmund Husserl\n2. Martin Heidegger\n3. Maurice Merleau-Ponty\n4. Franz Brentano\n5. Jean-Paul Sartre\n\nColuna B:\nA. Corpo vivido (corps propre)\nB. Intencionalidade como propriedade dos atos psiquicos\nC. Dasein e ser-no-mundo\nD. Reducao fenomenologica (epoche)\nE. Existencia precede a essencia',
    resposta: '1-D, 2-C, 3-A, 4-B, 5-E',
    explicacao:
      'Brentano (precursor) reintroduziu a intencionalidade como marca dos fenomenos psiquicos. Husserl sistematizou a fenomenologia com a reducao fenomenologica. Heidegger reformulou a fenomenologia em torno da analitica do Dasein. Merleau-Ponty centralizou o corpo vivido. Sartre desenvolveu o existencialismo com a tese de que a existencia precede a essencia. Cada conceito reflete o foco central de cada pensador.',
    dica_ollie:
      'Faca um "mapa" mental: Brentano > Husserl > Heidegger/Merleau-Ponty/Sartre. Cada um "herdou" e transformou a fenomenologia a seu modo. Saber a "arvore genealogica" ajuda a situar cada conceito!',
  },
  {
    id: 'pp2_as_002',
    titulo: 'Conceitos Fenomenologicos e Definicoes',
    tipo: 'associacao',
    dificuldade: 'medio',
    topico: 'Conceitos fundamentais da fenomenologia',
    enunciado:
      'Associe cada conceito fenomenologico (coluna A) com sua definicao correta (coluna B):\n\nColuna A:\n1. Noesis\n2. Noema\n3. Lebenswelt\n4. Geworfenheit\n5. Einfuhlung\n\nColuna B:\nA. O estar-lancado do Dasein em uma situacao fatica que nao escolheu\nB. O ato de consciencia, o polo subjetivo da vivencia intencional\nC. O conteudo intencional, o polo objetivo da vivencia intencional\nD. Empatia transcendental, modo de constituicao do alter ego\nE. Mundo da vida pre-cientifico compartilhado',
    resposta: '1-B, 2-C, 3-E, 4-A, 5-D',
    explicacao:
      'Na fenomenologia husserliana, noesis e o ato intencional (perceber, imaginar, recordar) e noema e o conteudo desse ato (o percebido, imaginado, recordado). O Lebenswelt e o horizonte pre-teorico da experiencia. A Geworfenheit (facticidade/estar-lancado) e um existencial heideggeriano que indica que o Dasein se encontra em uma situacao que nao escolheu. A Einfuhlung e o modo husserliano de apreensao do outro como consciencia.',
    dica_ollie:
      'Termos em alemao parecem assustadores, mas pense neles como "nomes proprios" de conceitos: Geworfenheit = "jogado no mundo sem pedir", Einfuhlung = "sentir-se dentro do outro", Lebenswelt = "mundo da vida". Traduzir ajuda a memorizar!',
  },
  {
    id: 'pp2_as_003',
    titulo: 'Criticas Fenomenologicas e seus Alvos',
    tipo: 'associacao',
    dificuldade: 'dificil',
    topico: 'Fenomenologia vs positivismo',
    enunciado:
      'Associe cada critica fenomenologica (coluna A) com a posicao filosofica ou cientifica criticada (coluna B):\n\nColuna A:\n1. "A ciencia esqueceu o mundo da vida que lhe serve de fundamento"\n2. "Nao se pode reduzir a consciencia a processos cerebrais sem perder o sentido da experiencia"\n3. "O sujeito nao e uma substancia pensante isolada do mundo"\n4. "A percepcao nao e recepcao passiva de dados sensoriais atomizados"\n\nColuna B:\nA. Dualismo cartesiano (Descartes)\nB. Cientificismo/positivismo naturalista\nC. Empirismo classico (Hume, associacionismo)\nD. Reducionismo fisicalista/materialismo eliminativo',
    resposta: '1-B, 2-D, 3-A, 4-C',
    explicacao:
      'A critica ao esquecimento do Lebenswelt (Husserl) dirige-se ao cientificismo positivista. A critica a reducao da consciencia a processos cerebrais visa o reducionismo fisicalista. A critica ao sujeito como substancia isolada e direcionada ao dualismo cartesiano (superada por Heidegger com o ser-no-mundo e por Merleau-Ponty com o corpo vivido). A critica a percepcao como recepcao passiva atinge o empirismo classico e o associacionismo (superada por Merleau-Ponty com a fenomenologia da percepcao).',
    dica_ollie:
      'A fenomenologia se define muito por aquilo que critica! Saber "contra quem" cada fenomenologo argumenta e tao importante quanto saber "o que" ele propoe. Positivismo, cartesianismo, empirismo - cada um e alvo de uma critica especifica.',
  },
];

// ============================================================
// ETICA PROFISSIONAL
// ============================================================

const eticaExercises: BankExercise[] = [
  {
    id: 'eti_mc_001',
    titulo: 'Principios Fundamentais do Codigo de Etica',
    tipo: 'multipla_escolha',
    dificuldade: 'facil',
    topico: 'Principios Fundamentais',
    enunciado: 'De acordo com os Principios Fundamentais do Codigo de Etica Profissional do Psicologo (Resolucao CFP 010/2005), o psicologo baseara seu trabalho no respeito e na promocao da liberdade, da dignidade, da igualdade e da integridade do ser humano. Qual das alternativas expressa corretamente outro principio fundamental?',
    alternativas: [
      'a) O psicologo atuara com responsabilidade social, analisando critica e historicamente a realidade politica, economica, social e cultural',
      'b) O psicologo devera priorizar os interesses da instituicao em que trabalha sobre os do cliente',
      'c) O psicologo podera utilizar seus conhecimentos para criar constrangimentos quando necessario ao tratamento',
      'd) O psicologo se responsabiliza apenas pelas consequencias previsiveis de sua atuacao',
    ],
    resposta: 'a',
    explicacao: 'O Principio Fundamental II afirma que o psicologo atuara com responsabilidade social, analisando critica e historicamente a realidade politica, economica, social e cultural.',
    dica_ollie: 'Os Principios Fundamentais sao a base de tudo! Leia-os com calma — sao apenas 7 e resumem toda a postura etica esperada.',
  },
  {
    id: 'eti_mc_002',
    titulo: 'Sigilo Profissional — Limites',
    tipo: 'multipla_escolha',
    dificuldade: 'medio',
    topico: 'Sigilo profissional',
    enunciado: 'O Art. 9 do Codigo de Etica estabelece que e dever do psicologo respeitar o sigilo profissional. Em qual das situacoes abaixo a quebra de sigilo e permitida?',
    alternativas: [
      'a) Quando o cliente solicita que o psicologo compartilhe informacoes com seus familiares',
      'b) Quando ha solicitacao de um amigo proximo do cliente preocupado com sua saude mental',
      'c) Quando se configura situacao de risco a integridade do cliente ou de terceiros',
      'd) Quando o psicologo deseja publicar um artigo cientifico sobre o caso',
    ],
    resposta: 'c',
    explicacao: 'O Art. 10 permite a quebra de sigilo quando houver situacoes de risco a integridade do paciente ou de terceiros.',
    dica_ollie: 'Sigilo e a regra, quebra e a excecao! Memorize: risco ao cliente, risco a terceiros e decisao judicial.',
  },
  {
    id: 'eti_mc_003',
    titulo: 'Laudo vs Parecer Psicologico',
    tipo: 'multipla_escolha',
    dificuldade: 'medio',
    topico: 'Documentos psicologicos',
    enunciado: 'Segundo a Resolucao CFP 006/2019, qual e a diferenca fundamental entre laudo e parecer psicologico?',
    alternativas: [
      'a) O laudo e mais curto que o parecer',
      'b) O laudo apresenta resultado de avaliacao psicologica e o parecer apresenta resposta a uma consulta tecnica',
      'c) Apenas o parecer pode conter dados de testes psicologicos',
      'd) O laudo e elaborado apenas em contexto clinico e o parecer em contexto juridico',
    ],
    resposta: 'b',
    explicacao: 'Laudo = resultado de avaliacao psicologica. Parecer = resposta tecnica a uma consulta. Essa distincao e cobrada com frequencia em provas.',
    dica_ollie: 'Laudo = resultado de avaliacao. Parecer = opiniao tecnica sobre uma consulta. Essa distincao cai muito em prova!',
  },
  {
    id: 'eti_mc_004',
    titulo: 'Relacoes com a Justica',
    tipo: 'multipla_escolha',
    dificuldade: 'dificil',
    topico: 'Relacoes com a Justica',
    enunciado: 'Um psicologo clinico atende um paciente ha 2 anos. O juiz solicita que ele elabore um laudo pericial sobre o mesmo paciente para um processo de guarda. De acordo com o Codigo de Etica, qual deve ser a conduta do psicologo?',
    alternativas: [
      'a) Elaborar o laudo, pois a ordem judicial deve ser cumprida',
      'b) Elaborar o laudo parcialmente, omitindo informacoes sigilosas',
      'c) Recusar a funcao de perito, pois ja tem vinculo terapeutico com o paciente',
      'd) Solicitar autorizacao do paciente e elaborar o laudo normalmente',
    ],
    resposta: 'c',
    explicacao: 'O Art. 2 alinea "k" veda ao psicologo ser perito em situacoes nas quais seus vinculos possam afetar a qualidade do trabalho. Quem trata nao avalia, quem avalia nao trata.',
    dica_ollie: 'Regra de ouro: quem trata nao avalia, quem avalia nao trata! Esse conflito de papeis e tema classico de prova.',
  },
  {
    id: 'eti_mc_005',
    titulo: 'Atendimento a Criancas e Adolescentes',
    tipo: 'multipla_escolha',
    dificuldade: 'medio',
    topico: 'Atendimento de menores',
    enunciado: 'Em relacao ao atendimento psicologico de criancas e adolescentes, o Codigo de Etica determina que:',
    alternativas: [
      'a) O consentimento dos pais e suficiente, nao sendo necessario o assentimento do menor',
      'b) O psicologo deve informar aos pais todo o conteudo das sessoes quando solicitado',
      'c) O psicologo deve garantir a protecao do menor, podendo romper o sigilo quando houver risco',
      'd) O atendimento de menores de 12 anos so pode ocorrer com autorizacao judicial',
    ],
    resposta: 'c',
    explicacao: 'O sigilo e mantido mas pode ser rompido em situacoes de risco como abuso, negligencia ou autolesao, priorizando a protecao integral do menor (ECA + Codigo de Etica).',
    dica_ollie: 'O ECA complementa o Codigo de Etica nesses casos. Vale a pena revisar os dois juntos!',
  },
  {
    id: 'eti_mc_006',
    titulo: 'Publicidade Profissional',
    tipo: 'multipla_escolha',
    dificuldade: 'facil',
    topico: 'Publicidade profissional',
    enunciado: 'Conforme o Art. 20 do Codigo de Etica, ao promover publicamente seus servicos, o psicologo:',
    alternativas: [
      'a) Pode garantir resultados de tratamento para atrair clientes',
      'b) Deve informar seu nome completo, CRP e area de atuacao',
      'c) Pode usar titulo de especialista mesmo sem registro no CFP',
      'd) Pode divulgar valores de honorarios em redes sociais sem restricoes',
    ],
    resposta: 'b',
    explicacao: 'Toda publicidade deve conter nome, CRP e nao pode fazer promessas de resultados, usar titulos nao reconhecidos ou sensacionalismo.',
    dica_ollie: 'Pense nas propagandas de psicologos no Instagram — muitas violam o codigo! Saber identificar isso e otimo treino.',
  },
  {
    id: 'eti_mc_007',
    titulo: 'Uso de Testes Psicologicos — SATEPSI',
    tipo: 'multipla_escolha',
    dificuldade: 'dificil',
    topico: 'Testes psicologicos e SATEPSI',
    enunciado: 'Sobre o uso de testes psicologicos segundo o Codigo de Etica e a Resolucao CFP 009/2018:',
    alternativas: [
      'a) Qualquer profissional da saude pode aplicar testes psicologicos em contexto clinico',
      'b) O psicologo pode utilizar testes nao aprovados pelo SATEPSI desde que tenha experiencia',
      'c) O psicologo deve utilizar apenas instrumentos reconhecidos pelo CFP e adequados ao contexto',
      'd) Testes psicologicos podem ser livremente comercializados em livrarias',
    ],
    resposta: 'c',
    explicacao: 'O uso de testes psicologicos e exclusividade do psicologo (Lei 4.119/62). Os testes devem constar no SATEPSI com parecer favoravel.',
    dica_ollie: 'SATEPSI e o site do CFP onde voce consulta quais testes sao aprovados. Conhecer essa ferramenta e essencial!',
  },
  {
    id: 'eti_mc_008',
    titulo: 'Responsabilidade Social do Psicologo',
    tipo: 'multipla_escolha',
    dificuldade: 'facil',
    topico: 'Responsabilidades profissionais',
    enunciado: 'O Art. 1 alinea "c" do Codigo de Etica estabelece que e dever fundamental do psicologo:',
    alternativas: [
      'a) Aceitar todo e qualquer caso que lhe for encaminhado',
      'b) Prestar servicos apenas em sua area de especializacao',
      'c) Prestar servicos profissionais em situacoes de calamidade publica ou emergencia, sem visar beneficio pessoal',
      'd) Manter-se neutro em questoes sociais e politicas',
    ],
    resposta: 'c',
    explicacao: 'O Codigo de Etica estabelece como dever prestar servicos em calamidades e emergencias, priorizando o bem-estar coletivo sem visar beneficio pessoal.',
    dica_ollie: 'O psicologo tem responsabilidade social! Esse principio aparece varias vezes ao longo do codigo.',
  },
  {
    id: 'eti_vf_001',
    titulo: 'Sigilo apos Falecimento',
    tipo: 'verdadeiro_falso',
    dificuldade: 'medio',
    topico: 'Sigilo profissional',
    enunciado: 'O dever de sigilo do psicologo se extingue apos o falecimento do paciente, permitindo que familiares tenham acesso irrestrito ao prontuario.',
    resposta: 'Falso',
    explicacao: 'O sigilo profissional permanece mesmo apos o falecimento do paciente. O Art. 9 nao preve excecao por morte.',
    dica_ollie: 'O sigilo e perpetuo! Nem a morte do paciente encerra essa obrigacao.',
  },
  {
    id: 'eti_vf_002',
    titulo: 'Atendimento Online',
    tipo: 'verdadeiro_falso',
    dificuldade: 'facil',
    topico: 'Atendimento online',
    enunciado: 'De acordo com a Resolucao CFP 011/2018, o psicologo pode realizar atendimento psicologico por meios de tecnologia da informacao e comunicacao, desde que siga as normas do CFP.',
    resposta: 'Verdadeiro',
    explicacao: 'A Resolucao CFP 011/2018 regulamenta a prestacao de servicos psicologicos por meios de TIC, permitindo atendimento online com cadastro na plataforma e-Psi.',
    dica_ollie: 'O atendimento online cresceu muito pos-pandemia. A resolucao 011/2018 e fundamental para a pratica atual!',
  },
  {
    id: 'eti_vf_003',
    titulo: 'Relacao Dual',
    tipo: 'verdadeiro_falso',
    dificuldade: 'facil',
    topico: 'Relacoes profissionais',
    enunciado: 'O psicologo pode atender clinicamente um familiar proximo, desde que mantenha a imparcialidade profissional.',
    resposta: 'Falso',
    explicacao: 'O Codigo de Etica veda relacoes duais que possam comprometer a qualidade do trabalho. Atender familiares configura conflito de interesses.',
    dica_ollie: 'Parece obvio, mas esse tipo de questao aparece em provas com cenarios mais sutis. Fique atento!',
  },
  {
    id: 'eti_vf_004',
    titulo: 'Prontuario — Tempo de Guarda',
    tipo: 'verdadeiro_falso',
    dificuldade: 'medio',
    topico: 'Prontuario psicologico',
    enunciado: 'O prontuario psicologico deve ser guardado pelo periodo minimo de 5 anos apos o ultimo atendimento, conforme resolucao do CFP.',
    resposta: 'Verdadeiro',
    explicacao: 'A Resolucao CFP 001/2009, Art. 15, determina que o prontuario deve ser mantido por no minimo 5 anos. Apos esse periodo, pode ser destruido com garantia de sigilo.',
    dica_ollie: '5 anos! Esse numero cai em prova. Destruicao deve garantir sigilo — triturar, nao jogar no lixo.',
  },
  {
    id: 'eti_vf_005',
    titulo: 'Interrupcao de Atendimento',
    tipo: 'verdadeiro_falso',
    dificuldade: 'medio',
    topico: 'Responsabilidades profissionais',
    enunciado: 'O psicologo pode interromper o atendimento a qualquer momento se julgar que o cliente nao esta colaborando com o processo terapeutico.',
    resposta: 'Falso',
    explicacao: 'O Art. 1 alinea "g" estabelece que o psicologo deve informar o cliente sobre possiveis interrupcoes e providenciar encaminhamento adequado. A interrupcao unilateral e sumaria nao e eticamente aceitavel.',
    dica_ollie: 'O encaminhamento responsavel e uma obrigacao etica! Nunca "abandonar" o paciente.',
  },
  {
    id: 'eti_vf_006',
    titulo: 'Sancoes do CRP',
    tipo: 'verdadeiro_falso',
    dificuldade: 'dificil',
    topico: 'Processos eticos',
    enunciado: 'As sancoes aplicaveis pelo CRP incluem advertencia, multa, censura publica, suspensao do exercicio profissional e cassacao.',
    resposta: 'Verdadeiro',
    explicacao: 'As penalidades sao progressivas conforme a Resolucao CFP 003/2007: advertencia, multa, censura publica, suspensao por ate 30 dias e cassacao.',
    dica_ollie: 'As punicoes vao do leve ao grave. Cassacao e a mais severa e so ocorre em casos gravissimos.',
  },
  {
    id: 'eti_cc_001',
    titulo: 'Dilema: Sigilo vs Risco de Suicidio',
    tipo: 'caso_clinico',
    dificuldade: 'dificil',
    topico: 'Sigilo profissional',
    enunciado: 'Marina, psicologa, atende Joao, 17 anos, ha 3 meses. Joao revela pensamentos suicidas recorrentes e uma tentativa de autolesao na semana passada, mas pede que Marina nao conte para seus pais. Como Marina deve proceder?',
    resposta: 'Marina deve romper o sigilo e comunicar os responsaveis legais. O Art. 10 permite a quebra de sigilo em situacoes de risco. O ECA (Art. 13) obriga a comunicacao em casos de risco a menores. Marina deve: 1) Acolher Joao e explicar a necessidade de envolver os pais; 2) Comunicar os responsaveis; 3) Encaminhar para avaliacao psiquiatrica; 4) Registrar no prontuario.',
    explicacao: 'O dever de protecao a vida prevalece sobre o sigilo quando ha risco iminente. No caso de menores, o ECA reforca a obrigatoriedade de comunicacao.',
    dica_ollie: 'VIDA > SIGILO, sempre. Casos com menores + risco de suicidio sao classicos em provas de etica.',
  },
  {
    id: 'eti_cc_002',
    titulo: 'Dilema: Informacoes do PAE',
    tipo: 'caso_clinico',
    dificuldade: 'medio',
    topico: 'Psicologia organizacional',
    enunciado: 'Carlos, psicologo organizacional, recebe pedido do RH para fornecer "perfil psicologico completo" de uma funcionaria em processo de demissao, incluindo informacoes do Programa de Apoio ao Empregado (PAE). Como deve proceder?',
    resposta: 'Carlos deve recusar. Informacoes do PAE sao sigilosas (Art. 9). Deve: 1) Explicar que o PAE e atendimento, nao avaliacao; 2) Informar que so pode emitir documentos pertinentes a demanda especifica; 3) Nunca misturar dados de apoio com avaliacoes organizacionais.',
    explicacao: 'O psicologo organizacional deve separar funcoes de apoio (PAE) das avaliativas. O sigilo permanece independentemente do contexto organizacional.',
    dica_ollie: 'Na psicologia organizacional, o "cliente" pode ser a empresa, mas o sigilo do individuo permanece!',
  },
  {
    id: 'eti_cc_003',
    titulo: 'Dilema: Redes Sociais e Publicidade',
    tipo: 'caso_clinico',
    dificuldade: 'medio',
    topico: 'Publicidade profissional',
    enunciado: 'Patricia publica no Instagram depoimentos de pacientes (com autorizacao) e frases como "Cure sua ansiedade em 10 sessoes!" e "Metodo exclusivo com 100% de sucesso". Identifique as violacoes eticas.',
    resposta: 'Violacoes: 1) Art. 20 "b": sensacionalismo e promessa de resultados; 2) Art. 20 "c": "metodo exclusivo" sem comprovacao cientifica; 3) Art. 2 "d": induzir conviccoes sobre resultados garantidos; 4) Depoimentos de pacientes, mesmo autorizados, configuram exposicao problematica.',
    explicacao: 'A publicidade do psicologo deve ser informativa, sem sensacionalismo, sem promessas de cura ou eficacia garantida.',
    dica_ollie: 'Observe os perfis de psicologos nas redes — voce vai notar violacoes por toda parte! Otimo exercicio pratico.',
  },
  {
    id: 'eti_cc_004',
    titulo: 'Dilema: Duplo Vinculo',
    tipo: 'caso_clinico',
    dificuldade: 'dificil',
    topico: 'Relacoes profissionais',
    enunciado: 'Roberto atende Ana em psicoterapia. Descobre que Ana e a nova professora de seu filho na escola. Ana diz que nao se importa em continuar. Roberto deve continuar atendendo?',
    resposta: 'Roberto deve encerrar e encaminhar Ana. O Art. 2 alinea "j" veda relacoes que possam interferir no servico. A relacao professor-pai compromete: neutralidade terapeutica, liberdade de expressao de Ana, e gera encontros involuntarios em reunioes. O consentimento do cliente NAO elimina o conflito etico — o psicologo deve avaliar objetivamente.',
    explicacao: 'O consentimento do cliente nao resolve conflitos de interesse. O psicologo tem a responsabilidade de avaliar se a relacao dual compromete o trabalho.',
    dica_ollie: 'O consentimento do paciente NAO resolve conflitos de interesse! O psicologo e quem deve avaliar e decidir.',
  },
  {
    id: 'eti_cc_005',
    titulo: 'Dilema: Equipe Multiprofissional no CAPS',
    tipo: 'caso_clinico',
    dificuldade: 'dificil',
    topico: 'Equipe multiprofissional',
    enunciado: 'Lucia, psicologa no CAPS, participa de reuniao onde o psiquiatra pede acesso ao conteudo completo das sessoes de psicoterapia de um paciente. A assistente social tambem pede informacoes sobre a dinamica familiar. Como proceder?',
    resposta: 'Lucia deve compartilhar apenas o estritamente necessario (Art. 12). Com o psiquiatra: dados sobre sintomas, evolucao e efeitos colaterais relatados — sem conteudo intimo das sessoes. Com a assistente social: informacoes pertinentes a demanda social. Manter prontuario psicologico detalhado separado e sob sua guarda.',
    explicacao: 'O trabalho em equipe nao elimina o sigilo — ele se adapta. Compartilha-se o minimo necessario para o cuidado integral.',
    dica_ollie: 'Em equipe multiprofissional: compartilhe o necessario, proteja o intimo.',
  },
  {
    id: 'eti_cc_006',
    titulo: 'Dilema: Pesquisa com Dados Clinicos',
    tipo: 'caso_clinico',
    dificuldade: 'medio',
    topico: 'Pesquisa com seres humanos',
    enunciado: 'Fernando quer usar prontuarios de seus pacientes para pesquisa sobre eficacia terapeutica, anonimizando os dados. Essa conduta e aceitavel? Quais providencias sao necessarias?',
    resposta: 'Exige cuidados: 1) Submeter ao CEP/CONEP (Resolucao CNS 510/2016); 2) Obter TCLE de cada paciente, mesmo anonimizando; 3) Separar papel de terapeuta e pesquisador; 4) Pacientes podem recusar sem prejuizo ao atendimento. Sem essas providencias, viola o Art. 16.',
    explicacao: 'A anonimizacao nao dispensa consentimento nem aprovacao etica. CEP + TCLE sao obrigatorios para qualquer pesquisa com seres humanos.',
    dica_ollie: 'CEP + TCLE = obrigatorios para QUALQUER pesquisa com seres humanos. Sem excecao!',
  },
];

// ============================================================
// PSICOLOGIA DA SAUDE
// ============================================================

const saudeExercises: BankExercise[] = [
  {
    id: 'sau_mc_001',
    titulo: 'Conceito de Saude da OMS',
    tipo: 'multipla_escolha',
    dificuldade: 'facil',
    topico: 'Conceito de saude',
    enunciado: 'A Organizacao Mundial da Saude (OMS) define saude como:',
    alternativas: [
      'a) A ausencia de doencas e enfermidades',
      'b) Um estado de completo bem-estar fisico, mental e social, e nao apenas a ausencia de doencas',
      'c) A capacidade de realizar atividades da vida diaria sem limitacoes',
      'd) O equilibrio entre fatores biologicos e ambientais',
    ],
    resposta: 'b',
    explicacao: 'A definicao da OMS (1948) amplia o conceito de saude para alem da ausencia de doenca, incluindo bem-estar fisico, mental e social.',
    dica_ollie: 'Essa definicao e basica mas cai em TODA prova! Decore: "completo bem-estar fisico, mental e social".',
  },
  {
    id: 'sau_mc_002',
    titulo: 'Principios do SUS',
    tipo: 'multipla_escolha',
    dificuldade: 'facil',
    topico: 'SUS — principios doutrinarios',
    enunciado: 'Sao principios doutrinarios do Sistema Unico de Saude (SUS), estabelecidos pela Lei 8.080/1990:',
    alternativas: [
      'a) Universalidade, integralidade e equidade',
      'b) Descentralizacao, regionalizacao e hierarquizacao',
      'c) Universalidade, participacao social e descentralizacao',
      'd) Equidade, eficiencia e resolutividade',
    ],
    resposta: 'a',
    explicacao: 'Os 3 principios doutrinarios do SUS sao: Universalidade (acesso a todos), Integralidade (atencao completa) e Equidade (tratar desigualmente os desiguais).',
    dica_ollie: 'Doutrinarios = UIE (Universalidade, Integralidade, Equidade). Organizativos sao os outros.',
  },
  {
    id: 'sau_mc_003',
    titulo: 'Modelo Biopsicossocial',
    tipo: 'multipla_escolha',
    dificuldade: 'medio',
    topico: 'Modelo biopsicossocial',
    enunciado: 'O modelo biopsicossocial de George Engel (1977) se diferencia do modelo biomedico por:',
    alternativas: [
      'a) Considerar que todas as doencas tem origem exclusivamente psicologica',
      'b) Integrar fatores biologicos, psicologicos e sociais na compreensao do processo saude-doenca',
      'c) Substituir completamente o modelo biomedico na pratica clinica',
      'd) Focar exclusivamente nos determinantes sociais da saude',
    ],
    resposta: 'b',
    explicacao: 'O modelo biopsicossocial propoe que saude e doenca resultam da interacao entre fatores biologicos, psicologicos e sociais. Nao substitui o biomedico, mas o amplia.',
    dica_ollie: 'Bio + Psico + Social = visao integral. Esse modelo e a base teorica da Psicologia da Saude!',
  },
  {
    id: 'sau_mc_004',
    titulo: 'Estrategia Saude da Familia e NASF',
    tipo: 'multipla_escolha',
    dificuldade: 'medio',
    topico: 'Atencao basica e ESF',
    enunciado: 'Sobre o papel do psicologo na Estrategia Saude da Familia (ESF), e correto afirmar:',
    alternativas: [
      'a) O psicologo atua exclusivamente em atendimento clinico individual nas UBS',
      'b) O psicologo integra o NASF-AB e atua por meio de matriciamento com as equipes',
      'c) O psicologo na ESF tem funcao apenas de encaminhamento',
      'd) A atuacao se limita a grupos terapeuticos',
    ],
    resposta: 'b',
    explicacao: 'O psicologo na Atencao Basica atua pelo NASF-AB realizando matriciamento, apoio tecnico, atendimentos compartilhados, grupos e acoes de prevencao e promocao.',
    dica_ollie: 'Matriciamento e a palavra-chave! O psicologo nao fica "preso" no consultorio — ele apoia a equipe toda.',
  },
  {
    id: 'sau_mc_005',
    titulo: 'CRAS vs CREAS',
    tipo: 'multipla_escolha',
    dificuldade: 'medio',
    topico: 'CRAS/CREAS',
    enunciado: 'Sobre a diferenca entre CRAS e CREAS, assinale a alternativa correta:',
    alternativas: [
      'a) O CRAS atende situacoes de violacao de direitos e o CREAS trabalha com prevencao',
      'b) O CRAS oferece Protecao Social Basica e o CREAS oferece Protecao Social Especial',
      'c) Ambos atuam exclusivamente com populacao em situacao de rua',
      'd) O CREAS e vinculado a Saude e o CRAS a Assistencia Social',
    ],
    resposta: 'b',
    explicacao: 'CRAS = Protecao Social Basica (prevencao). CREAS = Protecao Social Especial (violacao de direitos, violencia).',
    dica_ollie: 'CRAS = Basica (prevencao). CREAS = Especial (violacao). Essa diferenca e cobrada o tempo todo!',
  },
  {
    id: 'sau_mc_006',
    titulo: 'Politica Nacional de Humanizacao',
    tipo: 'multipla_escolha',
    dificuldade: 'dificil',
    topico: 'Humanizacao (PNH)',
    enunciado: 'Qual das alternativas representa um dispositivo da Politica Nacional de Humanizacao (HumanizaSUS)?',
    alternativas: [
      'a) Programa Mais Medicos',
      'b) Acolhimento com classificacao de risco',
      'c) Programa Nacional de Imunizacao',
      'd) Estrategia de Agentes Comunitarios de Saude',
    ],
    resposta: 'b',
    explicacao: 'O acolhimento com classificacao de risco e um dos dispositivos da PNH (2003). Outros: clinica ampliada, PTS, ambiencia, equipe de referencia e cogestao.',
    dica_ollie: 'Dispositivos da PNH: acolhimento, clinica ampliada, PTS, ambiencia, equipe de referencia, cogestao. Faca um mapa mental!',
  },
  {
    id: 'sau_mc_007',
    titulo: 'RAPS e CAPS',
    tipo: 'multipla_escolha',
    dificuldade: 'dificil',
    topico: 'RAPS e saude mental',
    enunciado: 'Na RAPS (Portaria 3.088/2011), qual componente e considerado estrategico e ordenador do cuidado em saude mental?',
    alternativas: [
      'a) Hospital psiquiatrico',
      'b) CAPS (Centro de Atencao Psicossocial)',
      'c) UBS (Unidade Basica de Saude)',
      'd) Servico de urgencia e emergencia',
    ],
    resposta: 'b',
    explicacao: 'O CAPS e o servico estrategico e ordenador da RAPS, responsavel pelo cuidado em saude mental territorial e comunitario. Existem CAPS I, II, III, CAPSi e CAPSad.',
    dica_ollie: 'CAPS = coracao da RAPS! Conhecer os tipos (I, II, III, i, ad) e essencial.',
  },
  {
    id: 'sau_mc_008',
    titulo: 'Reducao de Danos',
    tipo: 'multipla_escolha',
    dificuldade: 'medio',
    topico: 'Reducao de danos',
    enunciado: 'A abordagem de reducao de danos na Politica Nacional de Saude Mental se baseia em:',
    alternativas: [
      'a) Exigir abstinencia total como condicao para o tratamento',
      'b) Minimizar os danos associados ao uso de substancias sem exigir abstinencia como pre-requisito',
      'c) Internar compulsoriamente usuarios de drogas',
      'd) Focar exclusivamente na prevencao primaria',
    ],
    resposta: 'b',
    explicacao: 'Reducao de danos busca minimizar os danos sem exigir abstinencia, respeitando a autonomia do sujeito e oferecendo cuidado pragmatico.',
    dica_ollie: 'Reducao de danos NAO e "liberar drogas" — e oferecer cuidado realista e humanizado.',
  },
  {
    id: 'sau_vf_001',
    titulo: 'Promocao vs Prevencao',
    tipo: 'verdadeiro_falso',
    dificuldade: 'facil',
    topico: 'Promocao de saude',
    enunciado: 'Promocao de saude e prevencao de doencas sao conceitos identicos, pois ambos visam evitar o adoecimento.',
    resposta: 'Falso',
    explicacao: 'Promocao visa melhorar condicoes de vida de forma ampla. Prevencao foca em evitar doencas especificas. Sao complementares mas distintos.',
    dica_ollie: 'Promocao = qualidade de vida geral. Prevencao = evitar doencas especificas.',
  },
  {
    id: 'sau_vf_002',
    titulo: 'Determinantes Sociais',
    tipo: 'verdadeiro_falso',
    dificuldade: 'facil',
    topico: 'Determinantes sociais',
    enunciado: 'Os determinantes sociais de saude incluem moradia, escolaridade, renda e condicoes de trabalho, que influenciam o processo saude-doenca.',
    resposta: 'Verdadeiro',
    explicacao: 'Fatores sociais, economicos, culturais e comportamentais influenciam a saude. O modelo de Dahlgren e Whitehead (1991) organiza esses determinantes em camadas.',
    dica_ollie: 'Pesquise o modelo de Dahlgren e Whitehead — a imagem das camadas ajuda muito a memorizar!',
  },
  {
    id: 'sau_vf_003',
    titulo: 'Psicologia Hospitalar',
    tipo: 'verdadeiro_falso',
    dificuldade: 'medio',
    topico: 'Psicologia hospitalar',
    enunciado: 'A atuacao do psicologo hospitalar se restringe ao atendimento clinico individual de pacientes internados.',
    resposta: 'Falso',
    explicacao: 'O psicologo hospitalar atua de forma ampliada: pacientes, familiares e equipe; interconsulta; preparacao cirurgica; acompanhamento de obitos; grupos de sala de espera; humanizacao.',
    dica_ollie: 'No hospital, o psicologo atende paciente, familia E equipe! Atuacao muito mais ampla que so "terapia".',
  },
  {
    id: 'sau_cc_001',
    titulo: 'Caso: Acolhimento na UBS',
    tipo: 'caso_clinico',
    dificuldade: 'medio',
    topico: 'Acolhimento e clinica ampliada',
    enunciado: 'Dona Maria, 62 anos, chega a UBS chorando dizendo "nao aguenta mais viver assim". Tem dor cronica, insonia, solidao (viuva) e dificuldade financeira. Como a psicologa deve conduzir o caso?',
    resposta: 'Deve: 1) Acolhimento humanizado com escuta; 2) Avaliar risco suicida; 3) Considerar integralidade — dor (medico), insonia (psiquiatria), solidao (grupos/CRAS), financas (assistente social); 4) Construir PTS com a equipe; 5) Articular rede; 6) Oferecer acompanhamento psicologico focado no luto.',
    explicacao: 'Caso ilustra a clinica ampliada e trabalho interdisciplinar. O psicologo articula a rede e cuida da dimensao subjetiva.',
    dica_ollie: 'Clinica ampliada = olhar a pessoa inteira, nao so o "problema psicologico". Articule a rede!',
  },
  {
    id: 'sau_cc_002',
    titulo: 'Caso: Matriciamento em Saude Mental',
    tipo: 'caso_clinico',
    dificuldade: 'dificil',
    topico: 'Matriciamento',
    enunciado: 'Paulo, psicologo do NASF-AB, recebe pedido de "encaminhamento" da equipe: "Paciente com depressao, precisa de psicologo." A equipe espera que ele assuma o caso. Na logica do matriciamento, como Paulo deve proceder?',
    resposta: 'Deve: 1) Explicar que o NASF nao funciona como ambulatorio; 2) Discutir o caso em reuniao de equipe; 3) Avaliar se precisa atendimento individual ou se a equipe pode manejar; 4) Fazer atendimento compartilhado; 5) Capacitar a equipe para depressao leve; 6) Encaminhar para CAPS so se media/alta complexidade.',
    explicacao: 'Matriciamento: o especialista apoia a equipe, nao substitui. Atendimento individual e excecao, nao regra.',
    dica_ollie: 'Matriciamento = "ensinar a pescar, nao dar o peixe". O psicologo capacita a equipe!',
  },
  {
    id: 'sau_cc_003',
    titulo: 'Caso: Reforma Psiquiatrica na Pratica',
    tipo: 'caso_clinico',
    dificuldade: 'dificil',
    topico: 'Reforma Psiquiatrica',
    enunciado: 'No CAPS II, discute-se Jorge, com esquizofrenia e multiplas internacoes. A familia pede nova internacao. Considerando a Lei 10.216/2001, como conduzir?',
    resposta: 'Deve: 1) Internacao e ultimo recurso (Art. 4); 2) Intensificar acompanhamento no CAPS; 3) Suporte a familia (psicoeducacao, grupo de familiares); 4) Avaliar adesao medicamentosa; 5) PTS com reabilitacao psicossocial; 6) Articular rede (SRT, BPC); 7) Se inevitavel, internacao breve em hospital geral com projeto de alta.',
    explicacao: 'A Reforma Psiquiatrica prioriza tratamento comunitario e territorial. Internacao, quando necessaria, deve ser breve e em hospital geral.',
    dica_ollie: 'Lei 10.216/2001 e a lei da Reforma Psiquiatrica. Seus principios sao cobrados em quase toda prova de saude mental!',
  },
  {
    id: 'sau_cc_004',
    titulo: 'Caso: Projeto Terapeutico Singular',
    tipo: 'caso_clinico',
    dificuldade: 'medio',
    topico: 'PTS',
    enunciado: 'Rafaela, 28 anos, com ansiedade, dores de cabeca, trabalha 12h/dia e sofre assedio moral. Elabore elementos de um PTS.',
    resposta: 'PTS: 1) DIAGNOSTICO: sofrimento relacionado a trabalho, isolamento social; 2) METAS curto prazo: manejo ansiedade, avaliacao do assedio; medio prazo: rede de apoio e autonomia; 3) RESPONSABILIDADES: psicologo (psicoterapia breve), medico (reavaliacao medicacao), assistente social (direitos trabalhistas, CEREST); 4) REAVALIACAO: reuniao mensal.',
    explicacao: 'O PTS organiza o cuidado interdisciplinar com metas, responsaveis e prazo de reavaliacao.',
    dica_ollie: 'PTS = 4 momentos: diagnostico, metas, divisao de responsabilidades e reavaliacao. Memorize!',
  },
  {
    id: 'sau_cc_005',
    titulo: 'Caso: Promocao de Saude na Comunidade',
    tipo: 'caso_clinico',
    dificuldade: 'facil',
    topico: 'Promocao de saude',
    enunciado: 'Voce e psicologo em UBS de bairro periferico com violencia e gravidez na adolescencia. O coordenador pede uma acao de promocao de saude (nao prevencao). Proponha uma acao e justifique.',
    resposta: 'Grupo de protagonismo juvenil: rodas de conversa sobre projetos de vida, oficinas de expressao, mapeamento de recursos do territorio. E promocao (nao prevencao) porque nao foca em evitar doencas especificas, mas em fortalecer fatores protetivos, autonomia e qualidade de vida.',
    explicacao: 'Promocao atua nos determinantes amplos (empoderamento, participacao social). Prevencao atua no risco especifico.',
    dica_ollie: 'Se foca em "evitar algo especifico" = prevencao. Se foca em "melhorar a vida em geral" = promocao!',
  },
  {
    id: 'sau_cc_006',
    titulo: 'Caso: Intersetorialidade',
    tipo: 'caso_clinico',
    dificuldade: 'dificil',
    topico: 'Intersetorialidade',
    enunciado: 'Lucas, 8 anos, encaminhado pela escola com "agressividade". O pai e alcoolista e ha violencia domestica. Lucas apresenta sinais de negligencia. Quais setores articular e qual o papel do psicologo?',
    resposta: 'Articular: 1) SAUDE: avaliacao de Lucas, CAPSad para o pai; 2) CREAS: violacao de direitos; 3) EDUCACAO: orientacao a escola; 4) CONSELHO TUTELAR: notificacao obrigatoria (ECA Art. 13). Psicologo: coordena discussao, atende Lucas, orienta a mae, elabora relatorios.',
    explicacao: 'Casos complexos exigem articulacao SAUDE + ASSISTENCIA + EDUCACAO + JUSTICA.',
    dica_ollie: 'Saber articular a rede e a competencia mais importante na saude publica!',
  },
  {
    id: 'sau_ds_001',
    titulo: 'Atuacao do Psicologo na Atencao Basica',
    tipo: 'dissertativa',
    dificuldade: 'medio',
    topico: 'Atencao basica',
    enunciado: 'Descreva pelo menos 5 formas de atuacao do psicologo na Atencao Basica, diferenciando-as do modelo clinico tradicional de consultorio.',
    resposta: '1) Acolhimento na porta de entrada; 2) Matriciamento com equipes ESF; 3) Atendimentos compartilhados; 4) Grupos (gestantes, tabagismo, idosos); 5) Visitas domiciliares; 6) Acoes na comunidade; 7) Educacao permanente da equipe. A diferenca e a atuacao territorial, comunitaria e interdisciplinar.',
    explicacao: 'A Psicologia na Atencao Basica exige mudanca de paradigma: de clinico individual para comunitario e coletivo.',
    dica_ollie: 'Na UBS, o psicologo sai do consultorio! Matriciamento, grupos, visitas, territorio.',
  },
  {
    id: 'sau_ds_002',
    titulo: 'Reforma Psiquiatrica Brasileira',
    tipo: 'dissertativa',
    dificuldade: 'dificil',
    topico: 'Reforma Psiquiatrica',
    enunciado: 'Discorra sobre os principais marcos da Reforma Psiquiatrica Brasileira, desde o movimento antimanicomial ate a RAPS.',
    resposta: 'Marcos: 1) Movimento antimanicomial (anos 1970, influencia de Basaglia); 2) I Conferencia de Saude Mental (1987); 3) PL Paulo Delgado (1989); 4) Declaracao de Caracas (1990); 5) Lei 10.216/2001 — redireciona modelo para base comunitaria; 6) CAPS como servicos substitutivos; 7) Portaria 3.088/2011 — institui a RAPS. A Reforma e transformacao juridica, tecnica e cultural.',
    explicacao: 'A Reforma envolve dimensoes juridica, politica, tecnica e sociocultural.',
    dica_ollie: 'Linha do tempo: 1978 (movimento) -> 1987 (conferencia) -> 1989 (PL) -> 2001 (Lei) -> 2011 (RAPS).',
  },
  {
    id: 'sau_ds_003',
    titulo: 'Equidade no SUS',
    tipo: 'dissertativa',
    dificuldade: 'facil',
    topico: 'Principios do SUS',
    enunciado: 'Explique o principio da equidade no SUS e de um exemplo pratico na atuacao do psicologo.',
    resposta: 'Equidade = tratar desigualmente os desiguais, investindo mais onde a necessidade e maior. Exemplo: reservar mais vagas para pacientes em vulnerabilidade, fazer busca ativa de quem nao acessa o servico, adaptar horarios para trabalhadores informais.',
    explicacao: 'Equidade reconhece desigualdades e busca corrigi-las. Nem todos precisam do mesmo tipo de cuidado.',
    dica_ollie: 'Equidade ≠ Igualdade! Na prova, busque "tratar diferente quem e diferente".',
  },
];

// ============================================================
// PSICOLOGIA DO DESENVOLVIMENTO 1
// ============================================================

const desenvolvimentoExercises: BankExercise[] = [
  {
    id: 'dev_mc_001',
    titulo: 'Estagios de Piaget',
    tipo: 'multipla_escolha',
    dificuldade: 'facil',
    topico: 'Piaget — estagios',
    enunciado: 'Segundo Piaget, em qual estagio a crianca adquire a capacidade de realizar operacoes mentais reversiveis com objetos concretos?',
    alternativas: [
      'a) Sensorio-motor (0-2 anos)',
      'b) Pre-operatorio (2-7 anos)',
      'c) Operatorio concreto (7-11 anos)',
      'd) Operatorio formal (12 anos em diante)',
    ],
    resposta: 'c',
    explicacao: 'No operatorio concreto a crianca desenvolve operacoes logicas (classificacao, seriacao, conservacao) sobre objetos concretos. A reversibilidade e conquista central deste estagio.',
    dica_ollie: 'Concreto = logica com "coisas reais". Formal = logica com ideias abstratas. Diferenca fundamental!',
  },
  {
    id: 'dev_mc_002',
    titulo: 'Zona de Desenvolvimento Proximal',
    tipo: 'multipla_escolha',
    dificuldade: 'facil',
    topico: 'Vygotsky — ZDP',
    enunciado: 'A Zona de Desenvolvimento Proximal (ZDP) de Vygotsky se refere a:',
    alternativas: [
      'a) O nivel que a crianca ja alcancou de forma independente',
      'b) A distancia entre o nivel real e o nivel potencial com auxilio de alguem mais capaz',
      'c) A fase em que a crianca nao consegue realizar tarefas nem com ajuda',
      'd) O periodo critico em que a aprendizagem e impossivel',
    ],
    resposta: 'b',
    explicacao: 'ZDP e o espaco entre o que a crianca faz sozinha (nivel real) e o que faz com ajuda (nivel potencial). E onde a aprendizagem mais efetiva acontece.',
    dica_ollie: 'ZDP = o que voce faz COM ajuda hoje, fara SOZINHO amanha!',
  },
  {
    id: 'dev_mc_003',
    titulo: 'Assimilacao e Acomodacao',
    tipo: 'multipla_escolha',
    dificuldade: 'medio',
    topico: 'Piaget — processos adaptativos',
    enunciado: 'Uma crianca ve um cavalo pela primeira vez e diz "au-au". Qual processo piagetiano esta demonstrando?',
    alternativas: [
      'a) Acomodacao',
      'b) Equilibracao',
      'c) Assimilacao',
      'd) Conservacao',
    ],
    resposta: 'c',
    explicacao: 'Assimilacao e incorporar informacao nova a um esquema existente. A crianca usou o esquema "animal de 4 patas = au-au". Quando aprender a diferenca, fara acomodacao.',
    dica_ollie: 'AssIMILacao = encaixar no que JA sei. AcoMODAcao = MUDAR o que sei. O exemplo do cavalo/"au-au" e classico!',
  },
  {
    id: 'dev_mc_004',
    titulo: 'Mediacao em Vygotsky',
    tipo: 'multipla_escolha',
    dificuldade: 'medio',
    topico: 'Vygotsky — mediacao',
    enunciado: 'Para Vygotsky, os instrumentos de mediacao sao:',
    alternativas: [
      'a) Apenas a linguagem verbal',
      'b) Ferramentas tecnicas e ferramentas psicologicas (signos), sendo a linguagem o signo mais importante',
      'c) Exclusivamente materiais didaticos',
      'd) A interacao biologica entre organismo e ambiente',
    ],
    resposta: 'b',
    explicacao: 'Ferramentas tecnicas (orientadas externamente) e signos (orientados internamente). A linguagem e o instrumento psicologico mais importante por mediar o pensamento.',
    dica_ollie: 'Ferramenta = muda o ambiente externo. Signo = muda o pensamento interno. Linguagem = signo dos signos!',
  },
  {
    id: 'dev_mc_005',
    titulo: 'Apego Seguro — Bowlby/Ainsworth',
    tipo: 'multipla_escolha',
    dificuldade: 'medio',
    topico: 'Bowlby — teoria do apego',
    enunciado: 'Na Situacao Estranha de Ainsworth, a crianca com apego seguro tipicamente:',
    alternativas: [
      'a) Ignora a mae na separacao e no reencontro',
      'b) Fica extremamente angustiada e nao se acalma no reencontro',
      'c) Explora o ambiente com a mae presente, mostra desconforto na separacao e se acalma no reencontro',
      'd) Apresenta comportamentos contraditorios como aproximar-se e afastar-se',
    ],
    resposta: 'c',
    explicacao: 'Apego seguro (Tipo B): mae como base segura, desconforto moderado na separacao, conforto rapido no reencontro.',
    dica_ollie: 'Seguro = base segura + explora + desconforto moderado + acalma rapido. Faca uma tabela com os 4 tipos!',
  },
  {
    id: 'dev_mc_006',
    titulo: 'Fala Egocentrica — Piaget vs Vygotsky',
    tipo: 'multipla_escolha',
    dificuldade: 'dificil',
    topico: 'Piaget vs Vygotsky — linguagem',
    enunciado: 'Sobre a fala egocentrica, e correto afirmar:',
    alternativas: [
      'a) Ambos concordam que e um estagio transitorio sem funcao',
      'b) Para Piaget reflete pensamento pre-logico e desaparece; para Vygotsky tem funcao de autorregulacao e se internaliza',
      'c) Para Vygotsky e sinal de imaturidade; para Piaget e sinal de desenvolvimento',
      'd) Para Piaget se transforma em fala interior; para Vygotsky desaparece',
    ],
    resposta: 'b',
    explicacao: 'Piaget: fala egocentrica e egocentrismo cognitivo, desaparece. Vygotsky: tem funcao de autorregulacao, se internaliza como pensamento verbal.',
    dica_ollie: 'Piaget: fala egocentrica = imaturidade. Vygotsky: fala egocentrica = ferramenta de pensamento. Divergencia classica!',
  },
  {
    id: 'dev_mc_007',
    titulo: 'Estagio Pre-Operatorio',
    tipo: 'multipla_escolha',
    dificuldade: 'facil',
    topico: 'Piaget — pre-operatorio',
    enunciado: 'Qual caracteristica e tipica do estagio pre-operatorio segundo Piaget?',
    alternativas: [
      'a) Conservacao de quantidade',
      'b) Pensamento hipotetico-dedutivo',
      'c) Egocentrismo cognitivo e pensamento animista',
      'd) Permanencia do objeto',
    ],
    resposta: 'c',
    explicacao: 'Pre-operatorio (2-7 anos): egocentrismo, animismo, centracao, irreversibilidade e jogo simbolico. Conservacao so vem no operatorio concreto.',
    dica_ollie: 'Pre-operatorio = faz de conta, egocentrismo, "a lua me segue". Observe criancas dessa idade!',
  },
  {
    id: 'dev_mc_008',
    titulo: 'Erikson — Identidade vs Confusao',
    tipo: 'multipla_escolha',
    dificuldade: 'medio',
    topico: 'Erikson — estagios psicossociais',
    enunciado: 'A crise "Identidade vs. Confusao de Papeis" de Erikson e tipica de qual fase?',
    alternativas: [
      'a) Primeira infancia (0-18 meses)',
      'b) Idade escolar (6-12 anos)',
      'c) Adolescencia (12-18 anos)',
      'd) Inicio da vida adulta (18-40 anos)',
    ],
    resposta: 'c',
    explicacao: 'A 5a crise de Erikson ocorre na adolescencia. O jovem busca responder "Quem sou eu?" integrando experiencias, capacidades e expectativas.',
    dica_ollie: 'Os mais cobrados de Erikson: Confianca (bebe), Iniciativa (pre-escolar), Identidade (adolescente), Generatividade (adulto).',
  },
  {
    id: 'dev_as_001',
    titulo: 'Piaget vs Vygotsky — Quadro Comparativo',
    tipo: 'associacao',
    dificuldade: 'medio',
    topico: 'Piaget vs Vygotsky',
    enunciado: 'Associe cada conceito ao seu teorico:\n1) O desenvolvimento precede a aprendizagem\n2) A aprendizagem precede e impulsiona o desenvolvimento\n3) Conhecimento construido pela acao sobre o objeto\n4) Conhecimento construido nas interacoes sociais mediadas pela linguagem',
    resposta: '1-Piaget, 2-Vygotsky, 3-Piaget, 4-Vygotsky',
    explicacao: 'Para Piaget o desenvolvimento precede a aprendizagem (construtivismo). Para Vygotsky a aprendizagem impulsiona o desenvolvimento (sociointeracionismo).',
    dica_ollie: 'Piaget = o sujeito constroi sozinho. Vygotsky = o sujeito constroi COM o outro.',
  },
  {
    id: 'dev_as_002',
    titulo: 'Estagios e Conquistas de Piaget',
    tipo: 'associacao',
    dificuldade: 'facil',
    topico: 'Piaget — estagios',
    enunciado: 'Associe cada estagio a sua conquista:\n1) Sensorio-motor\n2) Pre-operatorio\n3) Operatorio concreto\n4) Operatorio formal',
    alternativas: [
      'A) Pensamento hipotetico-dedutivo',
      'B) Permanencia do objeto',
      'C) Funcao simbolica (linguagem, jogo simbolico)',
      'D) Conservacao e reversibilidade',
    ],
    resposta: '1-B, 2-C, 3-D, 4-A',
    explicacao: 'Sensorio-motor: permanencia do objeto. Pre-operatorio: funcao simbolica. Operatorio concreto: conservacao. Operatorio formal: raciocinio abstrato.',
    dica_ollie: 'Monte um cartao para cada estagio com idade, conquista e exemplo concreto!',
  },
  {
    id: 'dev_as_003',
    titulo: 'Teoricos e Conceitos-Chave',
    tipo: 'associacao',
    dificuldade: 'medio',
    topico: 'Teorias do desenvolvimento',
    enunciado: 'Associe:\n1) Zona de Desenvolvimento Proximal\n2) Complexo de Edipo\n3) Base segura\n4) Microssistema/macrossistema',
    alternativas: ['A) Bronfenbrenner', 'B) Bowlby', 'C) Vygotsky', 'D) Freud'],
    resposta: '1-C, 2-D, 3-B, 4-A',
    explicacao: 'ZDP = Vygotsky. Edipo = Freud. Base segura = Bowlby/Ainsworth. Sistemas ecologicos = Bronfenbrenner.',
    dica_ollie: 'Cada teorico tem 2-3 conceitos "marca registrada". Saber associar e meio caminho na prova!',
  },
  {
    id: 'dev_as_004',
    titulo: 'Tipos de Apego — Ainsworth',
    tipo: 'associacao',
    dificuldade: 'dificil',
    topico: 'Bowlby/Ainsworth — tipos de apego',
    enunciado: 'Associe cada tipo de apego ao comportamento:\n1) Seguro (B)\n2) Evitativo (A)\n3) Ambivalente (C)\n4) Desorganizado (D)',
    alternativas: [
      'A) Muita angustia, dificuldade em se acalmar, alterna busca de contato e raiva',
      'B) Explora, desconforto moderado, se acalma rapido',
      'C) Contraditorios: aproxima-se e congela, parece assustada',
      'D) Pouca reacao, evita contato no reencontro',
    ],
    resposta: '1-B, 2-D, 3-A, 4-C',
    explicacao: 'Seguro: confiante. Evitativo: indiferente. Ambivalente: grudento. Desorganizado: confuso (associado a maus-tratos).',
    dica_ollie: 'Seguro=confiante, Evitativo=indiferente, Ambivalente=grudento, Desorganizado=confuso.',
  },
  {
    id: 'dev_vf_001',
    titulo: 'Scaffolding',
    tipo: 'verdadeiro_falso',
    dificuldade: 'facil',
    topico: 'Vygotsky — scaffolding',
    enunciado: 'O conceito de scaffolding refere-se ao suporte temporario de um adulto ou par mais capaz, gradualmente retirado conforme a crianca adquire competencia, e esta relacionado a ZDP.',
    resposta: 'Verdadeiro',
    explicacao: 'Scaffolding (Wood, Bruner & Ross, 1976) e o apoio ajustavel dentro da ZDP. Conforme a competencia aumenta, o suporte e reduzido.',
    dica_ollie: 'Andaimes de obra: estao la enquanto precisa, saem quando a construcao se sustenta sozinha!',
  },
  {
    id: 'dev_vf_002',
    titulo: 'Piaget Ignora o Social?',
    tipo: 'verdadeiro_falso',
    dificuldade: 'medio',
    topico: 'Piaget — papel do social',
    enunciado: 'Piaget ignora completamente o papel do ambiente social no desenvolvimento cognitivo.',
    resposta: 'Falso',
    explicacao: 'Piaget reconhece 4 fatores: maturacao, experiencia, interacao social e equilibracao. Porem enfatiza mais a construcao individual que a mediacao social.',
    dica_ollie: 'Cuidado com "ignora completamente"! Piaget considera o social, so nao o coloca no centro como Vygotsky.',
  },
  {
    id: 'dev_vf_003',
    titulo: 'Permanencia do Objeto',
    tipo: 'verdadeiro_falso',
    dificuldade: 'facil',
    topico: 'Piaget — sensorio-motor',
    enunciado: 'A permanencia do objeto significa que a crianca compreende que objetos continuam existindo mesmo quando nao visiveis.',
    resposta: 'Verdadeiro',
    explicacao: 'Adquirida gradualmente no sensorio-motor (0-2 anos). Completa por volta de 18-24 meses.',
    dica_ollie: 'Esconder um brinquedo debaixo do pano — o bebe procura? Essa e a experiencia classica!',
  },
  {
    id: 'dev_vf_004',
    titulo: 'Kohlberg — Nivel Pos-Convencional',
    tipo: 'verdadeiro_falso',
    dificuldade: 'dificil',
    topico: 'Kohlberg — desenvolvimento moral',
    enunciado: 'Segundo Kohlberg, o nivel pos-convencional da moralidade e alcancado pela maioria das pessoas na vida adulta.',
    resposta: 'Falso',
    explicacao: 'A maioria dos adultos permanece no nivel convencional (estagios 3-4). O pos-convencional (estagios 5-6) e alcancado por poucos.',
    dica_ollie: 'Pre-convencional = egocentrico. Convencional = leis/sociedade. Pos-convencional = principios universais. A maioria para no convencional!',
  },
  {
    id: 'dev_cc_001',
    titulo: 'Caso: ZDP em Sala de Aula',
    tipo: 'caso_clinico',
    dificuldade: 'medio',
    topico: 'Vygotsky — ZDP na educacao',
    enunciado: 'Joao, 7 anos, nao resolve adicao com "vai um" sozinho, mas consegue com ajuda da professora ou de uma colega mais adiantada. Analise a luz de Vygotsky identificando nivel real, potencial e estrategias de mediacao.',
    resposta: 'NIVEL REAL: resolve adicoes simples. POTENCIAL: resolve com "vai um" quando auxiliado. ZDP: distancia entre os dois. MEDIACAO: scaffolding da professora, par mais capaz (colega). ESTRATEGIAS: ensino por etapas, trabalho em dupla, reducao gradual do apoio, material concreto (abaco).',
    explicacao: 'Ilustra ZDP, mediacao, scaffolding e importancia da interacao social na aprendizagem.',
    dica_ollie: 'Quando a prova pede "analise a luz de Vygotsky": nivel real + potencial + ZDP + mediacao. Sempre!',
  },
  {
    id: 'dev_cc_002',
    titulo: 'Caso: Egocentrismo Infantil',
    tipo: 'caso_clinico',
    dificuldade: 'facil',
    topico: 'Piaget — egocentrismo',
    enunciado: 'Laura, 4 anos, fala ao telefone com a avo e aponta para o brinquedo dizendo "esse aqui, vo!". Analise segundo Piaget.',
    resposta: 'Egocentrismo cognitivo do pre-operatorio (2-7 anos): incapacidade de perceber a perspectiva do outro. Laura acredita que a avo ve o que ela ve. Sera superado no operatorio concreto com a descentracao.',
    explicacao: 'Egocentrismo nao e egoismo — e uma etapa normal do desenvolvimento cognitivo.',
    dica_ollie: 'Sempre que a crianca nao entende que o outro nao ve/sabe o que ela ve/sabe = egocentrismo piagetiano.',
  },
  {
    id: 'dev_cc_003',
    titulo: 'Caso: Conservacao de Liquido',
    tipo: 'caso_clinico',
    dificuldade: 'medio',
    topico: 'Piaget — conservacao',
    enunciado: 'Marcos (5 anos) diz que o copo alto tem "mais suco" apos o liquido ser transferido. Pedro (8 anos) diz que a quantidade e a mesma. Explique as respostas com base em Piaget.',
    resposta: 'MARCOS (pre-operatorio): sem conservacao. Centracao (foca na altura), irreversibilidade (nao "desfaz" mentalmente). PEDRO (operatorio concreto): tem conservacao. Descentracao (altura E largura), reversibilidade (pode "despejar de volta" mentalmente), identidade (nada foi adicionado/retirado).',
    explicacao: 'A prova de conservacao e um dos experimentos mais famosos de Piaget. Marca a transicao entre pre-operatorio e operatorio concreto.',
    dica_ollie: 'Saiba descrever o experimento E a explicacao teorica — as provas piagetianas sao cobradas com frequencia!',
  },
  {
    id: 'dev_cc_004',
    titulo: 'Caso: Bronfenbrenner — Sistemas Ecologicos',
    tipo: 'caso_clinico',
    dificuldade: 'dificil',
    topico: 'Bronfenbrenner — bioecologia',
    enunciado: 'Thiago, 10 anos, com queda no rendimento: pai desempregado, mae trabalha mais, escola mudou metodo, bairro violento, governo cortou programas sociais. Analise com Bronfenbrenner.',
    resposta: 'MICRO: familia (tensao, mae ausente), escola (novo metodo). MESO: relacao familia-escola prejudicada. EXO: emprego do pai, horario da mae. MACRO: politicas publicas (cortes), crise economica. CRONO: confluencia temporal amplifica o impacto. A queda no rendimento resulta da interacao entre multiplos sistemas.',
    explicacao: 'O desenvolvimento acontece em contextos aninhados. Nenhum comportamento se explica isoladamente.',
    dica_ollie: 'Micro -> Meso -> Exo -> Macro -> Crono. Decore essa sequencia!',
  },
];

// ============================================================
// EXPORTACAO DO BANCO DE EXERCICIOS
// ============================================================

export const exerciseBank: Record<string, SubjectExerciseBank> = {
  psicologia_experimental_3: {
    materia_id: 'psicologia_experimental_3',
    materia_nome: 'Psicologia Experimental 3',
    exercicios: experimentalExercises,
  },
  metodo_pesquisa_quantitativa: {
    materia_id: 'metodo_pesquisa_quantitativa',
    materia_nome: 'Metodo de Pesquisa Quantitativa',
    exercicios: quantitativaExercises,
  },
  psicologia_personalidade_2: {
    materia_id: 'psicologia_personalidade_2',
    materia_nome: 'Psicologia da Personalidade 2',
    exercicios: personalidadeExercises,
  },
  etica_profissional: {
    materia_id: 'etica_profissional',
    materia_nome: 'Etica Profissional',
    exercicios: eticaExercises,
  },
  psicologia_da_saude: {
    materia_id: 'psicologia_da_saude',
    materia_nome: 'Psicologia da Saude',
    exercicios: saudeExercises,
  },
  psicologia_desenvolvimento_1: {
    materia_id: 'psicologia_desenvolvimento_1',
    materia_nome: 'Psicologia do Desenvolvimento 1',
    exercicios: desenvolvimentoExercises,
  },
};
