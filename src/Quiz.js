import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { answerQuestion, finishQuiz, startQuiz } from './redux/action';
import './Quiz.css';

const Quiz = () => {
    const dispatch = useDispatch();
    const { questions, currentQuestionIndex, score, quizFinished } = useSelector(state => state);

    const handleStart = () => {
        dispatch(startQuiz());
    };

    const handleAnswer = (answer) => {
        dispatch(answerQuestion(currentQuestionIndex + 1, answer));
        if (currentQuestionIndex + 1 === questions.length) {
            dispatch(finishQuiz());
        }
    };

    if (quizFinished) {
        return (
            <div className="quiz-container">
                <h2>Your score: {score} out of {questions.length}</h2>
            </div>
        );
    }

    return (
        <div className="quiz-container">
            <h2>{questions[currentQuestionIndex].question}</h2>
            {questions[currentQuestionIndex].options.map(option => (
                <button key={option} onClick={() => handleAnswer(option)}>
                    {option}
                </button>
            ))}
            {currentQuestionIndex === 0 && (
                <button onClick={handleStart}>Start Quiz</button>
            )}
        </div>
    );
};

export default Quiz;
