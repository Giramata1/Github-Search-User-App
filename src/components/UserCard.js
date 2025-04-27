import { FaMapMarkerAlt, FaLink, FaTwitter, FaBuilding } from "react-icons/fa";

function UserCard({ userData }) {
  if (!userData) return null;

  return (
    <div className="bg-white dark:bg-dark-secondary rounded-xl p-6 shadow-md text-black dark:text-white">
      <div className="flex items-center mb-6">
        <img
          src={userData.avatar_url}
          alt={userData.name}
          className="w-20 h-20 rounded-full mr-6"
        />
        <div>
          <h2 className="text-xl font-bold">{userData.name || "No Name"}</h2>
          <p className="text-sm text-blue-500">@{userData.login}</p>
          <p className="text-xs text-gray-600 dark:text-gray-400">
            {userData.created_at?.slice(0, 10)}
          </p>
        </div>
      </div>

      <p className="mb-4">{userData.bio || "This profile has no bio."}</p>

      <div className="bg-light-bg dark:bg-dark-bg rounded-md p-4 flex justify-between text-sm font-medium mb-6">
        <div>
          <p>Repos</p>
          <p>{userData.public_repos}</p>
        </div>
        <div>
          <p>Followers</p>
          <p>{userData.followers}</p>
        </div>
        <div>
          <p>Following</p>
          <p>{userData.following}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
        <p className="flex items-center gap-2">
          <FaMapMarkerAlt />
          <span className="font-semibold"></span>{" "}
          {userData.location || "Not Available"}
        </p>

        <p className="flex items-center gap-2">
          <FaLink />
          <span className="font-semibold"></span>{" "}
          {userData.blog ? (
            <a
              href={userData.blog.startsWith("http") ? userData.blog : `https://${userData.blog}`}
              className="text-blue-500"
              target="_blank"
              rel="noreferrer"
            >
              {userData.blog}
            </a>
          ) : (
            "Not Available"
          )}
        </p>

        <p className="flex items-center gap-2">
          <FaTwitter />
          <span className="font-semibold"></span>{" "}
          {userData.twitter_username ? (
            <a
              href={`https://twitter.com/${userData.twitter_username}`}
              className="text-blue-500"
          
              
            >
              @{userData.twitter_username}
            </a>
          ) : (
            "Not Available"
          )}
        </p>

        <p className="flex items-center gap-2">
          <FaBuilding />
          <span className="font-semibold"></span>{" "}
          {userData.company || "Not Available"}
        </p>
      </div>
    </div>
  );
}

export default UserCard;
