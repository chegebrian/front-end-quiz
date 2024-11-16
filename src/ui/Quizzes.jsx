import { useEffect, useState } from "react";
import { useQuestions } from "../contexts/Questions";
import Completed from "../pages/Completed";
import AnswerList from "./AnswerList";
import Button from "./Button";
import { useDarkMode } from "../contexts/Darkmode";
import Header from "./Header";

function Quizzes({ questions }) {
  const { isDarkMode } = useDarkMode();
  const [answer, setAnswer] = useState("");
  const { index, dispatch, selectedAnswer, points } = useQuestions();

  const numQuestions = questions?.questions.length;
  const currentQuestion = questions?.questions[index];
  const question = currentQuestion?.question;
  const correctAnswer = currentQuestion?.answer;
  const options = currentQuestion?.options;

  useEffect(() => {
    dispatch({ type: "correctAnswer", payload: correctAnswer });
  }, [correctAnswer, dispatch]);
  function submitAnswer() {
    setAnswer(selectedAnswer);
    dispatch({ type: "getPoints" });
  }
  function nextQuestion() {
    setAnswer("");
    dispatch({ type: "nextQuestion", payload: 1 });
  }
  function playAgain() {
    dispatch({ type: "playAgain", payload: 0 });
  }

  return (
    <>
      {/* <Header>
        {" "}
        <div
          
          className={`flex items-center gap-4 rounded-2xl py-3 `}
        >
          <div className="rounded-lg bg-orange-100 p-1">
            <img src={questions?.icon} alt="css-icon" />
          </div>
          <span
            className={`text-2xl font-bold ${isDarkMode ? "text-slate-200" : "text-stone-700"}`}
          >
            {questions?.title}
          </span>
        </div>
      </Header> */}
      {index < numQuestions && (
        <>
          <div>
            <h3
              className={`italic ${isDarkMode ? "text-slate-400" : "text-stone-700"} `}
            >
              Question {index + 1} of {numQuestions}
            </h3>
            <p
              className={`font-bold ${isDarkMode ? "text-slate-200" : "text-stone-700"}`}
            >
              {question}
            </p>

            <progress
              value={index}
              max={numQuestions - 1}
              className="min-w-full [&::-moz-progress-bar]:bg-fuchsia-700 [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-value]:bg-fuchsia-700"
            />
          </div>
          <div className="mb-6 mt-4 flex flex-col gap-3">
            {options?.map((option, index) => (
              <AnswerList
                key={index}
                answer={option}
                option={String.fromCharCode(index + "A".charCodeAt(0))}
                onClick={() =>
                  dispatch({ type: "submitAnswer", payload: option })
                }
              />
            ))}
          </div>
        </>
      )}
      {index === numQuestions && (
        <Completed numQuestions={numQuestions} points={points} />
      )}
      {answer === "" && index !== numQuestions && (
        <Button onClick={submitAnswer}>Submit answer</Button>
      )}
      {answer !== "" && index < numQuestions && (
        <Button onClick={nextQuestion}>Next question</Button>
      )}
      {index === numQuestions && (
        <Button onClick={playAgain}>Play again</Button>
      )}
    </>
  );
}

export default Quizzes;

// dispatch({ type: "submitAnswer", payload: option })
