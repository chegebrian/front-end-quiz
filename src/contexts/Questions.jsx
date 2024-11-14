import { createContext, useContext, useEffect, useReducer } from "react";

const questions = createContext();
function reducer(state, action) {
  if (action.type === "dataReceived")
    return { ...state, questionsData: action.payload };
  if (action.type === "correctAnswer")
    return { ...state, correctAnswer: action.payload };

  if (action.type === "submitAnswer") {
    return {
      ...state,
      selectedAnswer: action.payload,
      // points:
      //   action.payload === state.correctAnswer
      //     ? state.points + 1
      //     : state.points,
    };
  }

  if(action.type === "getPoints"){
    return {
      ...state,
      
      points:
        state.selectedAnswer === state.correctAnswer
          ? state.points + 1
          : state.points,
    };
  }
  if (action.type === "nextQuestion")
    return {
      ...state,
      index: state.index + action.payload,
      selectedAnswer: "",
    };
  if (action.type === "playAgain")
    return { ...state, index: action.payload, points: 0 };
}

function QuestionsProvider({ children }) {
  const initialState = {
    questionsData: [],
    index: 0,
    selectedAnswer: "",
    correctAnswer: "",
    points: 0,
  };


  const [{ questionsData, index, points, selectedAnswer }, dispatch] = useReducer(
    reducer,
    initialState,
  );
console.log(points);

  useEffect(() => {
    async function getQuestions() {
      try {
        let res = await fetch("http://localhost:9000/quizzes");
        let data = await res.json();
        console.log(data);
        dispatch({ type: "dataReceived", payload: data });
      } catch (error) {
        console.error(error.message);
      }
    }
    getQuestions();
  }, []);
  return (
    <questions.Provider value={{ dispatch, questionsData, index, points, selectedAnswer }}>
      {children}
    </questions.Provider>
  );
}

function useQuestions() {
  const context = useContext(questions);
  if (context === undefined)
    throw new Error("Question context was used ouside the QuetionsProvider");

  return context;
}

export { QuestionsProvider, useQuestions };
