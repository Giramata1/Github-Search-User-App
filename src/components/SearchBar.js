import { useState } from "react";
import { FaSearch } from "react-icons/fa";

function SearchBar({ onUserFound, onError }) {
  const [username, setUsername] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!username.trim()) return;

    setIsSearching(true);
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error("User not found");
        }
        throw new Error("Error accessing GitHub API");
      }
      const data = await response.json();
      onUserFound(data);
    } catch (error) {
      console.error("Error fetching user data:", error);
      onError(error.message);
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <form onSubmit={handleSearch} className="mb-6">
      <div className="bg-light-card dark:bg-dark-secondary rounded-xl shadow-md flex items-center p-2 relative">
        <FaSearch className="text-accent-blue mx-4 text-xl" />
        <input
          type="text"
          placeholder="Search GitHub username..."
          className="flex-grow px-2 py-3 text-sm bg-transparent focus:outline-none text-slate-700 dark:text-white"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          type="submit"
          disabled={isSearching}
          className="bg-accent-blue text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-600 transition-all"
        >
          {isSearching ? "..." : "Search"}
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
