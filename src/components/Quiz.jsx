import React, { useCallback } from "react";
import { useState } from "react";
import Questions from "../questions.js";

import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;

  const quizIsComplete = activeQuestionIndex === Questions.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    setUserAnswers((prevUserAnswers) => [...prevUserAnswers, selectedAnswer]);
  },
  []);

  const handleSkippedAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizIsComplete) {
    return <Summary userAnswers={userAnswers} />;
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        questionIndex={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkippedAnswer}
      />
    </div>
  );
}

export default Quiz;
