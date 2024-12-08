import React, { useState, useEffect } from 'react';
import { WiDayCloudyHigh } from "react-icons/wi";
import { GiNightSleep } from "react-icons/gi";

const ThemeToggler = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <button
      className="p-2 border rounded-full "
      onClick={toggleTheme}
    >
      {theme === 'light' ? <GiNightSleep /> : <WiDayCloudyHigh />}
    </button>
  );
};

export default ThemeToggler;