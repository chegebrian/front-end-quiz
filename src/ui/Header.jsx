import { useDarkMode } from "../contexts/Darkmode";

function Header({ children }) {
  const {isDarkMode, handleDarkMode} = useDarkMode();

  const sunSrc = isDarkMode
    ? "/public/images/icon-sun-light.svg"
    : "/public/images/icon-sun-dark.svg";
  const moonSrc = isDarkMode
    ? "/public/images/icon-moon-light.svg"
    : "/public/images/icon-moon-dark.svg";
  return (
    <nav
      className={`flex items-center ${children ? "justify-between" : "justify-end"}`}
    >
      {children && <div className="flex items-center gap-3">{children}</div>}
      <div className="flex items-center gap-3">
        <img src={sunSrc} alt="sun-icon" />
        <input
          type="checkbox"
          name="checkbox"
          id="checkbox"
          value={isDarkMode}
          onChange={handleDarkMode}
        />
        <img src={moonSrc} alt="moon-icon" />
      </div>
    </nav>
  );
}

export default Header;
