import { ANSWER_QUESTION, FINISH_QUIZ, START_QUIZ } from "./action";


const initialState = {
    questions: [
        { id: 1, question: 'What is the capital of France?', options: ['Paris', 'London', 'Berlin'], answer: 'Paris' },
        { id: 2, question: 'What is 2 + 2?', options: ['3', '4', '5'], answer: '4' },
    ],
    currentQuestionIndex: 0,
    score: 0,
    quizFinished: false,
};

const quizReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_QUIZ:
            return { ...state, currentQuestionIndex: 0, score: 0, quizFinished: false };
        case ANSWER_QUESTION:
            const isCorrect = state.questions[action.payload.questionId - 1].answer === action.payload.answer;
            return {
                ...state,
                score: isCorrect ? state.score + 1 : state.score,
                currentQuestionIndex: state.currentQuestionIndex + 1,
            };
        case FINISH_QUIZ:
            return { ...state, quizFinished: true};
        default:
            return state;

    }
};

export default quizReducer;