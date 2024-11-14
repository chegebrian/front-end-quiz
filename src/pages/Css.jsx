
import Quizzes from '../ui/Quizzes';
import { useQuestions } from '../contexts/Questions';

function Css() {
  const { questionsData } = useQuestions();
  const cssQuestions = questionsData[1];

  return <Quizzes questions={cssQuestions} />;
}

export default Css