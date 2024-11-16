import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { DarkmodeProvider } from "./contexts/Darkmode.jsx";
import { QuestionsProvider } from "./contexts/Questions.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DarkmodeProvider>
      <QuestionsProvider>
        <App />
      </QuestionsProvider>
    </DarkmodeProvider>
  </StrictMode>,
);
