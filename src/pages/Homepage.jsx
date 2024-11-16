import React from "react";
import Header from "../ui/Header";
import NavList from "../ui/NavList";
import { useDarkMode } from "../contexts/Darkmode";

function Homepage() {
  const { isDarkMode } = useDarkMode();
  return (
    <>
      <div className="py-6">
        <Header />
      </div>
      <div>
        <h1
          className={`text-4xl ${isDarkMode ? "text-slate-200" : "text-stone-700"}`}
        >
          Welcome to the <span className="font-bold">Frontend Quiz!</span>
        </h1>
        <p
          className={`my-4 italic ${isDarkMode ? "text-slate-200" : "text-stone-700"}`}
        >
          Pick a subject to get started.
        </p>
      </div>
      <NavList />
    </>
  );
}

export default Homepage;
