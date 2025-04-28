import React from "react";

const data = [
  { id: 1, name: "Aman", age: 25 },
  { id: 2, name: "Harsh", age: 30 },
  { id: 3, name: "Mohit", age: 22 },
];

function App() {
  return (
    <div className="App">
      <h1>List of Users</h1>
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age} years old
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
