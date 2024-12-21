export const START_QUIZ = 'START_QUIZ';
export const ANSWER_QUESTION = 'ANSWER_QUESTION';
export const FINISH_QUIZ = 'FINISH_QUIZ';

export const startQuiz = () => ({
    type: START_QUIZ,
});

export const answerQuestion = (questionId, answer) => ({
    type: ANSWER_QUESTION,
    payload: { questionId, answer},
});

export const finishQuiz = () => ({
    type: FINISH_QUIZ,
});