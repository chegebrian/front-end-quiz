import { useEffect, useState } from "react";
import { useQuestions } from "../contexts/Questions";
import Completed from "../pages/Completed";
import AnswerList from "./AnswerList";
import Button from "./Button";

function Quizzes({ questions }) {
  const [answer, setAnswer] = useState("");
  const { index, dispatch, selectedAnswer } = useQuestions();

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
      {index < numQuestions && (
        <>
          <div>
            <h3 className="italic">
              Question {index + 1} of {numQuestions}
            </h3>
            <p className="font-bold">{question}</p>
            <progress value={index} max={numQuestions - 1} />
          </div>
          <div className="flex flex-col gap-3">
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
      {index === numQuestions && <Completed numQuestions={numQuestions} />}
      {answer === "" && <Button onClick={submitAnswer}>Submit answer</Button>}
      {answer !== "" && index < numQuestions && (
        <Button onClick={nextQuestion}>Next question</Button>
      )}
      {answer !== "" && index === numQuestions && (
        <Button onClick={playAgain}>Play again</Button>
      )}
    </>
  );
}

export default Quizzes;

// dispatch({ type: "submitAnswer", payload: option })
