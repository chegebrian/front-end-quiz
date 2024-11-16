import { useDarkMode } from "../contexts/Darkmode";


function AnswerList({ option, answer,onClick }) {
 const {isDarkMode} = useDarkMode()
  return (
    <label
      htmlFor={option}
      className={`flex items-center gap-4 rounded-2xl px-4 py-3 ${isDarkMode ? "bg-slate-700" : "bg-slate-50"}`}
      onClick={onClick}
    >
      <input
        type="radio"
        name="answer-radio"
        id={option}
        value={answer}
        className="hidden"
      />

      <span className={`text-stone-700 font-bold py-4 px-4 text-xl  rounded-lg ${isDarkMode ? "bg-slate-200" :"bg-slate-300"}`}>{option}</span>
      <p className={`text-xl font-bold ${isDarkMode ? "text-slate-200" : "text-stone-700"}`}>{answer}</p>
    </label>
  );
}

export default AnswerList;

{
  /* <li className="flex items-center gap-4 px-4 py-3 rounded-lg border border-red-700"> */
}
