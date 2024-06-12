import { useEffect, useState } from "react";
import User from "./user";

export default function GithubProfileFinder() {
  const [username, setUsername] = useState("mrvin100");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  async function fetchGithubUserData() {
    setLoading(true);
    const res = await fetch(`https://api.github.com/users/${username}`);
    const data = await res.json();
    if (data) {
      setUserData(data);
      setLoading(false);
      setUsername("");
    }
  }
  const handleSubmit = () => {
    fetchGithubUserData();
  };
  useEffect(() => {
    fetchGithubUserData();
  }, []);
  if (loading) {
    return <h3 className="heading loading">Loading data ! Please wait</h3>;
  }
  return (
    <section className="github_finder container">
      <div className="input_box">
        <input
          type="text"
          name="search-by-username"
          placeholder="Search Github Username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button className="btn" onClick={handleSubmit}>
          search
        </button>
      </div>
      {userData !== null ? <User user={userData} /> : null}
    </section>
  );
}
