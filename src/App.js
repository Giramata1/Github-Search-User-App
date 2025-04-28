import { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";
import axios from "axios";
import { ThemeProvider } from "./components/ThemeProvider";

function App() {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleUserFound = (data) => {
    setUserData(data);
    setError(null);
  };

  const handleError = (message) => {
    setError(message);
  };

  useEffect(() => {
    const fetchOctocatData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          "https://api.github.com/users/octocat"
        );
        setUserData(response.data);
        setError(null);
      } catch (error) {
        console.error("Error fetching Octocat's data:", error);
        setError("Failed to load default user");
      } finally {
        setIsLoading(false);
      }
    };

    fetchOctocatData();
  }, []);

  return (
    <ThemeProvider>
      <div
        className="
          min-h-screen 
          font-mono
          bg-light-bg text-slate-700
          dark:bg-dark-bg dark:text-white
          pt-8 px-6
          tablet:px-24 tablet:pt-36 tablet:pb-40
          desktop:pt-18 desktop:pb-24 desktop:flex desktop:flex-col desktop:items-center
        "
      >
        <div className="max-w-3xl w-full mx-auto">
          <Header />
          <SearchBar onUserFound={handleUserFound} onError={handleError} />
          {isLoading ? (
            <div className="text-center py-10">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-accent-blue mx-auto"></div>
            </div>
          ) : error ? (
            <div className="bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400 p-4 rounded-lg">
              {error}
            </div>
          ) : (
            <UserCard userData={userData} />
          )}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
