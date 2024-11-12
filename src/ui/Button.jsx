import React from "react";

function Button({ children, onClick }) {
  return (
    <button className="rounded-lg border-0 bg-fuchsia-700 px-4 py-3 text-slate-300 outline-0" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
