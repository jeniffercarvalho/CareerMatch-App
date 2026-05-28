export default function QuizCard({
  question,
  step,
  total,
  answer
}) {

  const progress =
    ((step + 1) / total) * 100;

  return (

    <div className="quizContainer">

      {/* QUESTION */}
      <h2 className="questionTitle">
        {question.text}
      </h2>

      {/* OPTIONS */}
      <div className="optionsGrid">

        {question.options.map((option, i) => (

          <button
            key={i}
            className="optionCard"
            onClick={() => answer(option)}
          >

            <span className="optionLetter">
              {String.fromCharCode(65 + i)}.
            </span>

            <span className="optionText">
              {option.text}
            </span>

          </button>

        ))}

      </div>

      {/* PROGRESS */}
      <div className="bottomProgress">

        <div className="progressBar">
          <div
            className="progressFill"
            style={{
              width: `${progress}%`
            }}
          />
        </div>

        <span>
          {step + 1}/{total}
        </span>

      </div>

    </div>
  );
}