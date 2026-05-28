export const questions = [
  {
    text: "Você prefere resolver problemas ou criar coisas novas?",
    options: [
      { text: "Resolver problemas", points: { logic: 2, tech: 2 } },
      { text: "Criar coisas novas", points: { creativity: 3 } }
    ]
  },
  {
    text: "Você gosta de tecnologia?",
    options: [
      { text: "Sim", points: { tech: 3 } },
      { text: "Não", points: { creativity: 1, people: 1 } }
    ]
  },
  {
    text: "Você gosta de trabalhar com pessoas?",
    options: [
      { text: "Sim", points: { people: 3 } },
      { text: "Não", points: { logic: 2 } }
    ]
  },
  {
    text: "Você gosta de matemática?",
    options: [
      { text: "Sim", points: { logic: 3 } },
      { text: "Não", points: { creativity: 1 } }
    ]
  },
  {
    text: "Você prefere trabalhar sozinho ou em equipe?",
    options: [
      { text: "Sozinho", points: { logic: 2, tech: 1 } },
      { text: "Equipe", points: { people: 2, business: 2 } }
    ]
  },
  {
    text: "Você gosta de criar designs ou artes?",
    options: [
      { text: "Sim", points: { creativity: 3 } },
      { text: "Não", points: { tech: 1 } }
    ]
  },
  {
    text: "Você gosta de organizar e planejar coisas?",
    options: [
      { text: "Sim", points: { business: 3 } },
      { text: "Não", points: { creativity: 1 } }
    ]
  },
  {
    text: "Você gosta de redes sociais ou marketing?",
    options: [
      { text: "Sim", points: { business: 2, creativity: 1 } },
      { text: "Não", points: { logic: 1 } }
    ]
  },
  {
    text: "Você aprende coisas novas rapidamente?",
    options: [
      { text: "Sim", points: { tech: 2, logic: 1 } },
      { text: "Não", points: { business: 1 } }
    ]
  },
  {
    text: "Você gosta de liderar pessoas?",
    options: [
      { text: "Sim", points: { business: 3, people: 2 } },
      { text: "Não", points: { logic: 1 } }
    ]
  },
  {
    text: "Você gosta de rotina ou inovação?",
    options: [
      { text: "Rotina", points: { logic: 2 } },
      { text: "Inovação", points: { tech: 2, creativity: 2 } }
    ]
  },
  {
    text: "Você se imagina trabalhando com computador?",
    options: [
      { text: "Sim", points: { tech: 3 } },
      { text: "Não", points: { people: 2, creativity: 1 } }
    ]
  }
];