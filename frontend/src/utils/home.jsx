export default function Home() {
  return (
    <div>
      {/* NAVBAR */}
      <nav style={nav}>
        <h2>Romário Dev</h2>

        <div style={{ display: 'flex', gap: '15px' }}>
          <a href="#">Home</a>
          <a href="#">Projetos</a>
          <a href="#">Sobre</a>
          <a href="#">Contato</a>
        </div>
      </nav>

      {/* HERO */}
      <section style={hero}>
        <h1>👋 Olá, eu sou Romário</h1>
        <p>
          Desenvolvedor Frontend em formação, focado em React, Vite e projetos modernos.
        </p>
      </section>

      {/* PROJETOS */}
      <section style={{ padding: '40px 20px' }}>
        <h2>🚀 Projetos</h2>

        <div style={grid}>
          <div style={card}>
            <h3>📊 Comparador de Preços</h3>
            <p>Projeto para análise e comparação de preços.</p>
          </div>

          <div style={card}>
            <h3>💼 Portfólio Pessoal</h3>
            <p>Site profissional com React e Vite.</p>
          </div>

          <div style={card}>
            <h3>⚙️ Backend API</h3>
            <p>Projeto backend para estudos e lógica.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

/* ===== ESTILOS ===== */

const nav = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px',
  borderBottom: '1px solid #1e293b',
  background: '#0f172a'
}

const hero = {
  padding: '60px 20px',
  textAlign: 'center'
}

const grid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '20px',
  marginTop: '20px'
}

const card = {
  background: '#1e293b',
  padding: '20px',
  borderRadius: '12px',
  border: '1px solid #334155'
}