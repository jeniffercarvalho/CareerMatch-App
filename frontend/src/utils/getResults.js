export function getResults(scores = {}) {
  const areas = {
    tech: {
      title: "Tecnologia",
      description: "Perfil lógico e técnico, voltado a sistemas e programação",
      roadmap: ["HTML/CSS", "JavaScript", "React", "Backend básico"],
      careers: [
        "Desenvolvedor Front-end",
        "Desenvolvedor Back-end",
        "Desenvolvedor Full Stack",
        "Suporte Técnico",
        "Analista de TI"
      ]
    },

    creativity: {
      title: "Criatividade",
      description: "Perfil criativo, visual e inovador",
      roadmap: ["Figma", "Design UI/UX", "Portfólio", "Branding"],
      careers: [
        "Designer UI/UX",
        "Designer Gráfico",
        "Diretor de Arte",
        "Criador de Conteúdo",
        "Social Media"
      ]
    },

    people: {
      title: "Comunicação",
      description: "Perfil comunicativo e social",
      roadmap: ["Oratória", "Marketing", "Comunicação"],
      careers: [
        "Marketing Digital",
        "Relações Públicas",
        "Vendas",
        "Recursos Humanos"
      ]
    },

    business: {
      title: "Negócios",
      description: "Perfil estratégico e empreendedor",
      roadmap: ["Gestão", "Empreendedorismo", "Finanças"],
      careers: [
        "Administrador",
        "Empreendedor",
        "Gestor de Projetos",
        "Consultor de Negócios"
      ]
    },

    logic: {
      title: "Lógica",
      description: "Perfil analítico e estruturado",
      roadmap: ["Algoritmos", "Excel", "Análise de dados"],
      careers: [
        "Analista de Dados",
        "Engenheiro de Software",
        "Financeiro",
        "Pesquisador"
      ]
    }
  };

  const safe = {
    tech: 0,
    creativity: 0,
    people: 0,
    business: 0,
    logic: 0,
    ...scores
  };

  let bestKey = null;
  let bestValue = -1;

  Object.entries(safe).forEach(([key, value]) => {
    if (value > bestValue) {
      bestValue = value;
      bestKey = key;
    }
  });

  return {
    key: bestKey,
    ...areas[bestKey],
    percent: 100
  };
}