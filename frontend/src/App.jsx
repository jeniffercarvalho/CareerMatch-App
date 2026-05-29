import { useState } from "react";

import Home from "./components/Home";
import QuizCard from "./components/QuizCard";
import Result from "./components/Result";

import { questions } from "./data/questions";
import { getResults } from "./utils/getResults";


import "./App.css";

window.addEventListener("mousemove", (e) => {

  document.documentElement.style.setProperty(
    "--x",
    `${e.clientX}px`
  );

  document.documentElement.style.setProperty(
    "--y",
    `${e.clientY}px`
  );

});

export default function App() {

  const [start, setStart] = useState(false);
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState({});
  const [finish, setFinish] = useState(false);

  // START
  function startQuiz() {
    setStart(true);
    setStep(0);
    setScores({});
    setFinish(false);
  }

  // ANSWER
  function answer(option) {

    if (!option || !option.points) return;

    const updated = { ...scores };

    Object.entries(option.points).forEach(([key, value]) => {
      updated[key] = (updated[key] || 0) + value;
    });

    setScores(updated);

    const nextStep = step + 1;

    if (nextStep >= questions.length) {
      setFinish(true);
      return;
    }

    setStep(nextStep);
  }

  const result = finish ? getResults(scores) : null;

  return (
    <div className="app">

      {/* BACKGROUND */}
      <div className="bg-grid"></div>
      <div className="bg-light"></div>

      {/* PHONE */}
      <div className="phone">

        {/* HOME */}
        {!start && (
          <div className="screen home-screen">

            <div className="brand">
              <span className="brandIcon">🧭</span>
              <h1>
                Career<span>Match</span>
              </h1>
            </div>

            {/* IMAGE */}
            <img
              src="/careermatch.png"
              alt="character"
              className="heroImage"
            />

            <h2 className="homeTitle">
              Encontre seu
              <br />
              Caminho Profissional
            </h2>

            <p className="homeText">
              Descubra suas forças e combine
              com carreiras que você ama
              em apenas 3 minutos.
            </p>

            <button
              className="startButton"
              onClick={startQuiz}
            >
              Iniciar Avaliação Gratuita
            </button>

            <small className="timeText">
              Tempo estimado: 3 min.
            </small>

          </div>
        )}

        {/* QUIZ */}
        {start && !finish && questions[step] && (

          <div className="screen quiz-screen">

            {/* TOP */}
            <div className="quizHeader">

              <button
                className="backBtn"
                onClick={() => {
                  if (step > 0) {
                    setStep(step - 1);
                  }
                }}
              >
                ←
              </button>

              <div className="progressArea">

                <span>
                  Questão {step + 1}/{questions.length}
                </span>

                <div className="progressBar">
                  <div
                    className="progressFill"
                    style={{
                      width:
                        `${((step + 1) / questions.length) * 100}%`
                    }}
                  />
                </div>

              </div>

            </div>

            {/* QUESTION */}
            <QuizCard
              question={questions[step]}
              step={step}
              total={questions.length}
              answer={answer}
            />

          </div>
        )}

        {/* RESULT */}
        {finish && result && (
          <div className="screen result-screen">
            <Result results={result} />
          </div>
        )}

      </div>
    </div>
  );
}
