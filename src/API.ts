import {shuffleArray} from './utils'


export type Question = {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
}

export type QuestionState = Question & {answers: string[]};

export enum Difficulty{
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard"
}


export const fetchQuizQuestions = async(amount: number, difficulty: Difficulty) => {
    const enpoint=`https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
    const data = await (await fetch(enpoint)).json();
    return data.results.map((question: Question) =>(
        {
            ...question,
            answers: shuffleArray([question.correct_answer, ...question.incorrect_answers])

        }
    ))
}



