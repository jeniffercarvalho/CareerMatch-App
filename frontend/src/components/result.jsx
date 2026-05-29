export default function Result({ results }) {

  return (

    <div className="resultCard">

      {/* TOP */}
      <div className="resultTop">

        <img
          src="/careermatch.png"
          alt="avatar"
          className="resultAvatar"
        />

        <div>

          <div className="resultBadge">
            Seu resultado
          </div>

          <h2 className="resultTitle">
            {results.title}
          </h2>

          <p className="resultPercent">
            {results.percent}% de compatibilidade
          </p>

        </div>

      </div>

      {/* DESCRIPTION */}
      <p className="resultDescription">
        {results.description}
      </p>

      <div className="divider"></div>

      {/* CAREERS */}
      <h3 className="sectionTitle">
        Carreiras recomendadas
      </h3>

      <div className="careerList">

        {results.careers?.map((item, index) => (
          <div
            key={index}
            className="careerItem"
          >
            {item}
          </div>
        ))}

      </div>

      {/* BUTTON */}
      <button
        className="resultButton"
        onClick={() => window.location.reload()}
      >
        Refazer avaliação
      </button>

    </div>
  );
}
