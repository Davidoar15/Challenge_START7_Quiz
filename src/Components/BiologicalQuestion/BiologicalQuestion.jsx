import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getBiological } from "../../Redux/actions";
import style from '../Question.module.css'
import { NavLink } from "react-router-dom";

function QuestionBiological({ biological, getBiological }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [shuffledOptions, setShuffledOptions] = useState([]);
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState(null);

  useEffect(() => {
    if (biological.length === 0) {
      getBiological();
    }
  }, [biological, getBiological]);

  useEffect(() => {
    if (currentQuestionIndex < biological.length) {
      const currentQuestion = biological[currentQuestionIndex];
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
  }, [currentQuestionIndex, biological]);

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
    if (currentQuestionIndex < biological.length - 1) {
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

  if (biological.length === 0) {
    return <div>Cargando...</div>;
  }

  return (
    <div className={style.container}>
      <div>
        <NavLink to={'/'}>
          <button className={style.btnMenu}>Menú</button>
        </NavLink>
      </div>
      {showResult ? (
        <div className={style.containerReset}>
          <h1>Resultados</h1>
          <p>Puntaje: {score}/4</p>
          <button onClick={restartQuiz} className={style.buttonReset}>Reiniciar Quiz</button>
        </div>
      ) : (
        <div className={style.questionContainer}>
            <div className={style.containerQ}>
                <h1>Pregunta {currentQuestionIndex + 1}</h1>
                <h2>{biological[currentQuestionIndex].question}</h2>
            </div>
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
            <button onClick={handleNextQuestion} className={style.buttonNext}>Siguiente</button>
          )}
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    biological: state.biological,
  };
};

export default connect(mapStateToProps, { getBiological })(QuestionBiological);