import Quizzes from "../ui/Quizzes";
import { useQuestions } from "../contexts/Questions";
import Header from "../ui/Header";
import { useDarkMode } from "../contexts/Darkmode";

function Css() {
  const { questionsData } = useQuestions();
  const cssQuestions = questionsData[1];
  const { isDarkMode } = useDarkMode();

  return (
    <>
      <Header>
        {" "}
        <div className={`flex items-center gap-4 rounded-2xl py-3`}>
          <div className="rounded-lg bg-green-100 p-1">
            <img src={cssQuestions?.icon} alt={cssQuestions?.title} />
          </div>
          <span
            className={`text-2xl font-bold ${isDarkMode ? "text-slate-200" : "text-stone-700"}`}
          >
            {cssQuestions?.title}
          </span>
        </div>
      </Header>
      <Quizzes questions={cssQuestions} />
    </>
  );
}

export default Css;
