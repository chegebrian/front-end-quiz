

function AnswerList({ option, answer,onClick }) {
  return (
    <label
      htmlFor={option}
      className="flex items-center gap-4 rounded-lg px-4 py-3"
      onClick={onClick}
    >
      <input
        type="radio"
        name="answer-radio"
        id={option}
        value={answer}
        className="hidden"
      />

      <span>{option}</span>
      <p className="text-xl font-bold text-stone-700">{answer}</p>
    </label>
  );
}

export default AnswerList;

{
  /* <li className="flex items-center gap-4 px-4 py-3 rounded-lg border border-red-700"> */
}
