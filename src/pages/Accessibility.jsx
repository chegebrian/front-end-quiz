
import Quizzes from '../ui/Quizzes';
import { useQuestions } from '../contexts/Questions';

function Accessibility() {
  const { questionsData } = useQuestions();
  const accessibilityQuestions = questionsData[3];

  return <Quizzes questions={accessibilityQuestions} />;
}

export default Accessibility