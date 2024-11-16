import { useDarkMode } from "../contexts/Darkmode";
import { useQuestions } from "../contexts/Questions";
import Header from "../ui/Header";
import Quizzes from "../ui/Quizzes";

function Javascript() {
  const { questionsData } = useQuestions();
  const jsQuestions = questionsData[2];
  const { isDarkMode } = useDarkMode();

  return (
    <>
      <Header>
        {" "}
        <div className={`flex items-center gap-4 rounded-2xl py-3`}>
          <div className="rounded-lg bg-green-100 p-1">
            <img src={jsQuestions?.icon} alt={jsQuestions?.title} />
          </div>
          <span
            className={`text-2xl font-bold ${isDarkMode ? "text-slate-200" : "text-stone-700"}`}
          >
            {jsQuestions?.title}
          </span>
        </div>
      </Header>
      <Quizzes questions={jsQuestions} />
    </>
  );
}

export default Javascript;
