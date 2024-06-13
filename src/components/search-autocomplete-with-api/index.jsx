import { useEffect, useState } from "react";
import Suggestions from "./suggestions";

export default function SearchAutocomplete() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const fetchListOfUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      if (data && data.users && data.users.length) {
        setUsers(data.users.map((user) => user.firstName));
        setLoading(false);
        setError(null);
      }
    } catch (error) {
      console.log(error.message);
      setError(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchListOfUsers();
  }, []);

  const handleChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);
    if (query.length > 0) {
      const filteredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFilteredUsers(filteredData);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  };
  const handleClick = (event) => {
    setSearchParam(event.target.innerText);
    setShowDropdown(false);
    setFilteredUsers([]);
  };
  console.log(users, filteredUsers);
  return (
    <section className="search_autocomplete container">
      {loading ? (
        <h2 className="heading">Loading data! Please wait</h2>
      ) : (
        <div className="input_box">
          <input
            type="text"
            value={searchParam}
            name="search-users"
            placeholder="Search Users here..."
            onChange={handleChange}
          />
        </div>
      )}
      {showDropdown && (
        <Suggestions handleClick={handleClick} data={filteredUsers} />
      )}
    </section>
  );
}
