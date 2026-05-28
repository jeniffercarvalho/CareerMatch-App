// src/components/StartScreen.jsx

export default function StartScreen({ setStart }) {
  return (
    <div style={styles.card}>
      <img
        src="/logo.svg"
        alt="logo"
        style={styles.logo}
      />

      <h1>Avaliação Profissional</h1>

      <p>
        Descubra sua área ideal de carreira
      </p>

      <button
        style={styles.btn}
        onClick={() => setStart(true)}
      >
        Iniciar teste
      </button>
    </div>
  )
}

const styles = {
  card: {
    width: "100%",
    maxWidth: 550,
    background: "#111827",
    borderRadius: 18,
    padding: 30,
    textAlign: "center"
  },

  logo: {
    width: 90,
    marginBottom: 20
  },

  btn: {
    marginTop: 20,
    width: "100%",
    padding: 14,
    border: "none",
    borderRadius: 12,
    background: "#2563eb",
    color: "#fff",
    cursor: "pointer",
    fontSize: 16
  }
}