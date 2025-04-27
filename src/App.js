import { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";
import axios from "axios";
import { ThemeProvider } from "./components/ThemeProvider";

function App() {
  const [userData, setUserData] = useState(null);

  const handleUserFound = (data) => {
    setUserData(data);
  };

  useEffect(() => {
    const fetchOctocatData = async () => {
      try {
        const response = await axios.get(
          "https://api.github.com/users/octocat"
        );
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching Octocat's data:", error);
      }
    };

    fetchOctocatData();
  }, []);

  return (
    <ThemeProvider>
      <div
        className={`
          app-container
          font-mono
          bg-light-bg text-light-text
          dark:bg-dark-bg dark:text-dark-text
          pt-8 px-6
          tablet:px-24 tablet:pt-36 tablet:pb-40
          desktop:pt-18 desktop:pb-24 desktop:px-[30%]
        `}
      >
        <Header />
        <SearchBar onUserFound={handleUserFound} />
        <UserCard userData={userData} />
      </div>
    </ThemeProvider>
  );
}

export default App;
