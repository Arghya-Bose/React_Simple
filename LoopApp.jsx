import { useState } from "react";
import "./App.css";
import Login, { Profile, Setting } from "./UserComponent";

function App() {
  const userData = [
    {
      id: 1,
      age: "25",
      name: "John Doe",
      email: "john.doe@example.com",
    },
    {
      id: 2,
      age: "30",
      name: "Jane Smith",
      email: "jane.smith@example.com",
    },
    {
      id: 3,
      age: "28",
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
    },
    {
      id: 4,
      age: "35",
      name: "Bob Brown",
      email: "bob.brown@example.com",
    },
  ];

  return (
    <div>
      <h1>User Information</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Age</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((item) => (
            <tr key={item.id}>
              <th>{item.id}</th>
              <th>{item.name}</th>
              <th>{item.age}</th>
              <th>{item.email}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default App;
