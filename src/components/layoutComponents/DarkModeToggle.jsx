import { useEffect, useState } from 'react';
import { MdWbSunny } from "react-icons/md";
import { IoMdMoon } from "react-icons/io";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  // On initial load, check the stored theme in localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setDarkMode(storedTheme === "dark");
      // Apply the stored theme to the HTML element
      document.documentElement.setAttribute("data-theme", storedTheme);
    } else {
      // Fallback to user's system preference if no theme is stored
      const systemPreference = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      setDarkMode(systemPreference === "dark");
      document.documentElement.setAttribute("data-theme", systemPreference);
    }
  }, []);

  // Handle theme toggle
  const toggleTheme = () => {
    const newTheme = !darkMode ? "dark" : "light";
    setDarkMode(!darkMode);
    localStorage.setItem("theme", newTheme);

    // Apply the theme to the HTML element
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={toggleTheme}
        className="bg-gray-700 text-white p-3 rounded-full shadow-lg hover:bg-gray-600 transition-colors duration-300 flex items-center justify-center"
      >
        {darkMode ? (
          <MdWbSunny className="text-xl" />
        ) : (
          <IoMdMoon className="text-xl" />
        )}
      </button>
    </div>
  );
};

export default DarkModeToggle;
