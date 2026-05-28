export default function Home({ setStart }) {

  return (

    <div className="home-screen">

      {/* LOGO */}
      <div className="brand">

        <div className="brandIcon">
          🎯
        </div>

        <div>

          <h1 className="logoTitle">
            Career <span>Match</span>
          </h1>

          <p className="brandSubtitle">
            Career Guidance App
          </p>

        </div>

      </div>

      {/* CHARACTER */}
      <div className="heroWrapper">

        <div className="heroGlow"></div>

        <img
          className="heroImage"
          src="../public/careermatch.png"
          alt="career illustration"
        />

      </div>

      {/* TEXT */}
      <div className="homeContent">

        <h2 className="homeTitle">
          Descubra sua
          <br />
          carreira ideal
        </h2>

        <p className="homeText">
          Descubra sua carreira ideal com base
          na sua personalidade e interesses.
        </p>

      </div>

      {/* BUTTON */}
      <button
        className="startButton"
        onClick={() => setStart(true)}
      >
        Iniciar avaliação
      </button>

      <span className="timeText">
        ⏱ Tempo médio: 3 minutos
      </span>

    </div>

  );
}