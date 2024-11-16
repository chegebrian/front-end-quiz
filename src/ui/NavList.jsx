import React from "react";
import { NavLink } from "react-router-dom";
import { useDarkMode } from "../contexts/Darkmode";

function NavList() {
  const { isDarkMode } = useDarkMode();
  return (
    <ul className="flex flex-col gap-3">
      <NavLink
        to="/html"
        className={`flex items-center gap-4 rounded-2xl px-4 py-3 ${isDarkMode ? "bg-slate-700" : "bg-slate-50"}`}
      >
        <div className="rounded-lg bg-orange-100 p-1">
          <img src="/public/images/icon-html.svg" alt="html-icon" />
        </div>
        <span
          className={`text-2xl font-bold ${isDarkMode ? "text-slate-200" : "text-stone-700"}`}
        >
          HTML
        </span>
      </NavLink>
      <NavLink
        to="/css"
        className={`flex items-center gap-4 rounded-2xl px-4 py-3 ${isDarkMode ? "bg-slate-700" : "bg-slate-50"}`}
      >
        <div className="rounded-lg bg-green-100 p-1">
          <img src="/public/images/icon-css.svg" alt="css-icon" />
        </div>
        <span
          className={`text-2xl font-bold ${isDarkMode ? "text-slate-200" : "text-stone-700"}`}
        >
          CSS
        </span>
      </NavLink>
      <NavLink
        to="/javascript"
        className={`flex items-center gap-4 rounded-2xl px-4 py-3 ${isDarkMode ? "bg-slate-700" : "bg-slate-50"}`}
      >
        <div className="rounded-lg bg-blue-100 p-1">
          <img src="/public/images/icon-js.svg" alt="js-icon" />
        </div>
        <span
          className={`text-2xl font-bold ${isDarkMode ? "text-slate-200" : "text-stone-700"}`}
        >
          JAVASCRIPT
        </span>
      </NavLink>
      <NavLink
        to="accessibility"
        className={`flex items-center gap-4 rounded-2xl px-4 py-3 ${isDarkMode ? "bg-slate-700" : "bg-slate-50"}`}
      >
        <div className="rounded-lg bg-purple-100 p-1">
          <img src="/public/images/icon-accessibility.svg" alt="access-icon" />
        </div>
        <span
          className={`text-2xl font-bold ${isDarkMode ? "text-slate-200" : "text-stone-700"}`}
        >
          ACCESSIBILITY
        </span>
      </NavLink>
    </ul>
  );
}

export default NavList;
