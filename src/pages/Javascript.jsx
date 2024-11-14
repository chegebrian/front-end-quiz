
import { useQuestions } from '../contexts/Questions';
import Quizzes from '../ui/Quizzes';

function Javascript() {
  const { questionsData } = useQuestions();
  const jsQuestions = questionsData[2];

  return <Quizzes questions={jsQuestions} />;
}

export default Javascript