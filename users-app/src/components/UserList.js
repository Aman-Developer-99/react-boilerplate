import React, { useEffect, useState } from "react";

const UserList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Optional: for loader
  const [error, setError] = useState(null); // Optional: for error handling
  useEffect(() => {
    // Fetch API data here
    fetch("https://jsonplaceholder.typicode.com/users") 
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok"); // Handle errors
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error);
        setLoading(false);
      });
  }, []); // [] makes sure it runs once when the component loads
  if (loading) {
    return <div>Loading...</div>; // Show loading state
  }
  if (error) {
    return <div>Error: {error.message}</div>; // Show error state
  }
  return (
    <div className="App">
      <h1>List of Users</h1>
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;