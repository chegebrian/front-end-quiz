import Quizzes from "../ui/Quizzes";
import { useQuestions } from "../contexts/Questions";
import { useDarkMode } from "../contexts/Darkmode";
import Header from "../ui/Header";

function Accessibility() {
  const { questionsData } = useQuestions();
  const accessibilityQuestions = questionsData[3];
  const { isDarkMode } = useDarkMode();

  return (
    <>
      <Header>
        {" "}
        <div className={`flex items-center gap-4 rounded-2xl py-3`}>
          <div className="rounded-lg bg-green-100 p-1">
            <img
              src={accessibilityQuestions?.icon}
              alt={accessibilityQuestions?.title}
            />
          </div>
          <span
            className={`text-2xl font-bold ${isDarkMode ? "text-slate-200" : "text-stone-700"}`}
          >
            {accessibilityQuestions?.title}
          </span>
        </div>
      </Header>
      <Quizzes questions={accessibilityQuestions} />
    </>
  );
}

export default Accessibility;
