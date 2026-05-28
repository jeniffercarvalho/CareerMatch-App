export function calculateResult(answers) {
  const score = { A: 0, B: 0, C: 0, D: 0, E: 0 };

  answers.forEach((a) => {
    score[a] = (score[a] || 0) + 1;
  });

  const total = answers.length || 1;

  const result = {
    tecnologia: Math.round((score.A / total) * 100),
    criativo: Math.round((score.B / total) * 100),
    comunicacao: Math.round((score.C / total) * 100),
    organizacao: Math.round((score.D / total) * 100),
    lideranca: Math.round((score.E / total) * 100),
  };

  let topArea = "tecnologia";
  let max = 0;

  Object.entries(result).forEach(([key, value]) => {
    if (value > max) {
      max = value;
      topArea = key;
    }
  });

  return { ...result, topArea };
}