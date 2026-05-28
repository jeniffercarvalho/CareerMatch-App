import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Result({ result, onRestart }) {
  const data = [
    { name: "Tecnologia", value: result.tecnologia },
    { name: "Criativo", value: result.criativo },
    { name: "Comunicação", value: result.comunicacao },
    { name: "Organização", value: result.organizacao },
    { name: "Liderança", value: result.lideranca },
  ];

  return (
    <div style={styles.container}>
      <h1>🎯 Seu Perfil Profissional</h1>

      <div style={{ width: "100%", height: 300, marginTop: 20 }}>
        <ResponsiveContainer>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#667eea" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <h2 style={{ marginTop: 20 }}>
        🏆 Área dominante: {result.topArea}
      </h2>

      <button onClick={onRestart} style={styles.button}>
        Refazer teste
      </button>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Arial",
    padding: 20,
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    color: "#fff",
  },
  button: {
    marginTop: 20,
    padding: 12,
    borderRadius: 10,
    border: "none",
    cursor: "pointer",
    background: "#fff",
    color: "#333",
    fontWeight: "bold",
  },
};