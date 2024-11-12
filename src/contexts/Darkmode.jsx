import { createContext, useContext, useState } from "react";

const Darkmode = createContext();

function DarkmodeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  function handleDarkMode() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }
  return (
    <Darkmode.Provider value={{ isDarkMode, handleDarkMode }}>
      {children}
    </Darkmode.Provider>
  );
}

function useDarkMode() {
  const context = useContext(Darkmode);
  if (context === undefined)
    throw new Error("DarkModeContext was used outside of DarkModeProvider");
  return context;
}

export { DarkmodeProvider, useDarkMode };
