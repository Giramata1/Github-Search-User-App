import { useState } from "react";

function SearchBar({ onUserFound }) {
  const [username, setUsername] = useState("");

  const handleSearch = async () => {
    if (!username) return;

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) throw new Error("User not gotten");
      const data = await response.json();
      onUserFound(data);
    } catch (error) {
      console.error("User getting data failed:", error);
    }
  };

  return (
    <div className="bg-white dark:bg-dark-secondary rounded-xl shadow-md flex items-center p-2 mb-6">
      <input
        type="text"
        placeholder="Search GitHub username..."
        className="flex-grow px-4 py-2 text-sm bg-transparent focus:outline-none text-black dark:text-white"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-600 transition-all"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
