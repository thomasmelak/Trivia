import React from "react";
import { AnswerObject } from "../App";
import { Card } from "../App.styles";

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNumber: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNumber,
  totalQuestions,
}) => (
  <Card>
    <p className="number">
      Question: {questionNumber} / {totalQuestions}
    </p>
    <p className="question" dangerouslySetInnerHTML={{ __html: question }} />

    {userAnswer ? (
      userAnswer.correct ? (
        <p>Correct! 😊 answer is {userAnswer.correctAnswer}</p>
      ) : (
        <p> Incorrect 😭 answer is {userAnswer.correctAnswer}</p>
      )
    ) : null}

    <div className="answers">
      {answers.map((answer) => (
        <div key={answer}>
          <button
            disabled={userAnswer ? true : false}
            value={answer}
            onClick={callback}
          >
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </button>
        </div>
      ))}
    </div>
  </Card>
);

export default QuestionCard;
