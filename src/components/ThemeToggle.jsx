import React from "react";
import { useState } from "react";
import { MdNightlightRound, MdWbSunny } from "react-icons/md";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setIsDark(!isDark);
  };
  return (
    <button
      onClick={toggleTheme}
      className="text-2xl rounded-full p-2 text-text-primary transition hover:bg-section-bg"
    >
      {isDark ? <MdWbSunny /> : <MdNightlightRound />}
    </button>
  );
};

export default ThemeToggle;
