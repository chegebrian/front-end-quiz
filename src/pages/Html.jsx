import { useDarkMode } from "../contexts/Darkmode";
import { useQuestions } from "../contexts/Questions";
import Header from "../ui/Header";
import Quizzes from "../ui/Quizzes";

function Html() {
  const { questionsData } = useQuestions();
  const htmlQuestions = questionsData[0];
  const { isDarkMode } = useDarkMode();

  return (
    <>
      <Header>
        {" "}
        <div className={`flex items-center gap-4 rounded-2xl py-3`}>
          <div className="rounded-lg bg-orange-100 p-1">
            <img src={htmlQuestions?.icon} alt={htmlQuestions?.title} />
          </div>
          <span
            className={`text-2xl font-bold ${isDarkMode ? "text-slate-200" : "text-stone-700"}`}
          >
            {htmlQuestions?.title}
          </span>
        </div>
      </Header>
      <Quizzes questions={htmlQuestions} />
    </>
  );
}

export default Html;
