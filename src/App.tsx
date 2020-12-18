import React, { useState } from "react";

import { QuestionState, fetchQuizQuestions, Difficulty } from "./API";

//Components
import QuestionCard from "./components/QuestionCard";

//Styles
import { GlobalStyle, Wrapper } from "./App.styles";

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const TOTAL_Questions = 10;

const App = () => {
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [loading, setLoading] = useState(false);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(
      TOTAL_Questions,
      Difficulty.EASY
    );

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      //User's answer
      const answer = e.currentTarget.value;
      //Check if answer is correct
      const correct: boolean = questions[number].correct_answer === answer;
      //set score
      if (correct) setScore((previousScore) => previousScore + 1);
      //save answerObject
      const answerObject: AnswerObject = {
        answer,
        question: questions[number].question,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((previousAnswers) => [...previousAnswers, answerObject]);
    }
  };

  const nextQuestion = () => {
    const nextQuestion = number + 1;
    if (nextQuestion === TOTAL_Questions) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>React Quiz</h1>
        {gameOver || userAnswers.length === TOTAL_Questions ? (
          <button className="start" onClick={startTrivia}>
            Start
          </button>
        ) : null}
        {!gameOver && !loading && <p className="score">Score : {score} </p>}
        {loading && <p>Loading Questions ...</p>}
        {!gameOver && !loading && (
          <QuestionCard
            questionNumber={number + 1}
            totalQuestions={TOTAL_Questions}
            answers={questions[number].answers}
            question={questions[number].question}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />
        )}
        {!gameOver &&
        !loading &&
        userAnswers.length === number + 1 &&
        number !== TOTAL_Questions - 1 ? (
          <button className="next" onClick={nextQuestion}>
            Next
          </button>
        ) : null}
      </Wrapper>
    </>
  );
};

export default App;
