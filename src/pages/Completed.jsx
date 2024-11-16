import { useDarkMode } from "../contexts/Darkmode";


function Completed({numQuestions, points}) {
const {isDarkMode} = useDarkMode()

  
  return (
    <>
    <div className="flex flex-col gap-7">

      <h3 className={`text-4xl ${isDarkMode ? "text-slate-200" : "text-stone-700"}`}>
        Quiz completed <span className="font-bold">You scored...</span>
      </h3>
      <div className={`flex flex-col items-center justify-center gap-8 py-7 mb-7 rounded-lg ${isDarkMode ? "bg-slate-700" : "bg-slate-50"}`}>
        <p className={`${isDarkMode ? "text-slate-200" : "text-stone-700"}`} >
          <span>icon</span>HTML
        </p>
        <p className={`font-bold text-6xl  ${isDarkMode ? "text-slate-200" : "text-stone-700"}`}>{points}</p>
        <p className={`${isDarkMode ? "text-slate-500" : "text-stone-700"}`}>out of {numQuestions}</p>
      </div>
    </div>
    </>
  );
}

export default Completed;
