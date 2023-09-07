import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getSports } from "../../Redux/actions";
import style from '../Question.module.css'
import { NavLink } from "react-router-dom";

function QuestionSports({ sports, getSports }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [shuffledOptions, setShuffledOptions] = useState([]);
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState(null);

  useEffect(() => {
    if (sports.length === 0) {
      getSports();
    }
  }, [sports, getSports]);

  useEffect(() => {
    if (currentQuestionIndex < sports.length) {
      const currentQuestion = sports[currentQuestionIndex];
      const options = [
        currentQuestion.option1,
        currentQuestion.option2,
        currentQuestion.option3,
        currentQuestion.option4,
      ];
      shuffleOptions(options);
      setShuffledOptions(options);
      setCorrectAnswerIndex(options.indexOf(currentQuestion.option1));
    }
  }, [currentQuestionIndex, sports]);

  const shuffleOptions = (options) => {
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [options[i], options[j]] = [options[j], options[i]];
    }
  };

  const handleOptionSelect = (option, index) => {
    if (!userAnswer) {
      setUserAnswer(option);
      if (index === correctAnswerIndex) {
        setScore(score + 1);
      }
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < sports.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setUserAnswer(null);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setUserAnswer(null);
    setShowResult(false);
    setScore(0);
  };

  if (sports.length === 0) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <div>
        <NavLink to={'/'}>
          <button>Menu</button>
        </NavLink>
      </div>
      {showResult ? (
        <div>
          <h1>Resultados</h1>
          <p>Puntaje: {score}</p>
          <button onClick={restartQuiz}>Reiniciar Quiz</button>
        </div>
      ) : (
        <div>
          <h1>Pregunta {currentQuestionIndex + 1}</h1>
          <h2>{sports[currentQuestionIndex].question}</h2>
          {shuffledOptions.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionSelect(option, index)}
              className={`${style.optionButton} ${
                userAnswer ? 
                (index === correctAnswerIndex
                  ? style.correct
                  : index === shuffledOptions.indexOf(userAnswer)
                  ? style.incorrect
                  : "")
                : ""
              }`}
            >
              {option}
            </button>
          ))}
          {userAnswer && (
            <button onClick={handleNextQuestion}>Siguiente</button>
          )}
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    sports: state.sports,
  };
};

export default connect(mapStateToProps, { getSports })(QuestionSports);