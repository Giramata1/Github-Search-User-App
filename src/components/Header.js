
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "./ThemeProvider"; 

function Header() {
  const { theme, toggleDarkMode } = useTheme(); 

  return (
    <header className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold text-black dark:text-white">devfinder</h1>

      <button
        onClick={toggleDarkMode}
        className="flex items-center gap-2 text-sm font-bold  text-gray-600 dark:text-white uppercase hover:text-blue-500 transition-colors"
      >
        {theme === "dark" ? (
          <div>
            Light <FaSun />
          </div>
        ) : (
          <div>
            Dark <FaMoon />
          </div>
        )}
      </button>
    </header>
  );
}

export default Header;
