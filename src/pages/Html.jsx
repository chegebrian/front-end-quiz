import { useQuestions } from "../contexts/Questions";
import Quizzes from "../ui/Quizzes";

function Html() {
  const { questionsData } = useQuestions();
  const htmlQuestions = questionsData[0];

  return <Quizzes questions={htmlQuestions} />;
}

export default Html;
