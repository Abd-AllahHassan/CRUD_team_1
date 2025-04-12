import { useTheme } from '../context/ThemeContext';
import { MdWbSunny } from "react-icons/md";
import { IoMdMoon } from "react-icons/io";

const DarkModeToggle = () => {
  const { darkMode, setDarkMode } = useTheme();

  return (
<div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="bg-gray-700 text-white p-3 rounded-full shadow-lg hover:bg-gray-600 transition-colors duration-300 flex items-center justify-center"
      >
        {/* Display sun icon when dark mode is off (light mode) and moon icon when dark mode is on */}
        {darkMode ? (
          <MdWbSunny className="text-xl dark:hidden" />
        ) : (
          <IoMdMoon className="text-xl hidden dark:inline-block" />
        )}
      </button>
    </div>
  );
};

export default DarkModeToggle;
