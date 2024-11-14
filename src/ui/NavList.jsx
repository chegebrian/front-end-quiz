import React from "react";
import { NavLink } from "react-router-dom";

function NavList() {
  return (
    <ul className="flex gap-3 flex-col">
      <NavLink to="/html" className="flex items-center gap-4 px-4 py-3 rounded-lg border border-red-700">
        <img src="/public/images/icon-html.svg" alt="html-icon" />
        <span className="text-xl font-bold text-stone-700 ">HTML</span>
      </NavLink>
      <NavLink to="/css" className="flex items-center gap-4 px-4 py-3 rounded-lg border border-red-700">
        <img src="/public/images/icon-css.svg" alt="css-icon" />
        <span className="text-xl font-bold text-stone-700">CSS</span>
      </NavLink>
      <NavLink to="/javascript" className="flex items-center gap-4 px-4 py-3 rounded-lg border border-red-700">
        <img src="/public/images/icon-js.svg" alt="js-icon" />
        <span className="text-xl font-bold text-stone-700">JAVASCRIPT</span>
      </NavLink>
      <NavLink to="accessibility" className="flex items-center gap-4 px-4 py-3 rounded-lg border border-red-700">
        <img src="/public/images/icon-accessibility.svg" alt="access-icon" />
        <span className="text-xl font-bold text-stone-700">ACCESSIBILITY</span>
      </NavLink>
    </ul>
  );
}

export default NavList;
