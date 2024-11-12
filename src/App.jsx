import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import { useDarkMode } from "./contexts/Darkmode";
import AppLayout from "./ui/AppLayout";
import Html from "./pages/Html";
import Css from "./pages/Css";
import Javascript from "./pages/Javascript";
import Accessibility from "./pages/Accessibility";

function App() {
  const { isDarkMode } = useDarkMode();

  const backgrdColor = isDarkMode ? "#313e51" : "#e2e8f0";

  return (
    <div
      style={{
        backgroundColor: `${backgrdColor}`,
      }}
      
      className={`grid h-screen grid-cols-1 bg-cover bg-center bg-no-repeat bg-origin-border px-4 ${isDarkMode ? "bg-mobile-dark" : "bg-mobile-light"}`}
    >
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/html" element={<Html />} />
            <Route path="/css" element={<Css />} />
            <Route path="/javascript" element={<Javascript />} />
            <Route path="/accessibility" element={<Accessibility />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
