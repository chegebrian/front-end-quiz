import React from "react";
import { useQuestions } from "../contexts/Questions";

function Completed({numQuestions}) {
  const {points} = useQuestions()

  
  return (
    <>
      <h3 className="text-lg">
        Quiz completed <span className="font-bold">You scored...</span>
      </h3>
      <div>
        <p>
          <span>icon</span>HTML
        </p>
        <p>{points}</p>
        <p>out of {numQuestions}</p>
      </div>
    </>
  );
}

export default Completed;
