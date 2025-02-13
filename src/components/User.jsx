import React, { useState, useEffect } from "react";

const UserList = () => {
  
  const [users, setUsers] = useState(() => {
    const storedUsers = localStorage.getItem("users");
    return storedUsers ? JSON.parse(storedUsers) : [
      { id: 1, name: "Nisha", role: "student", usn: "1001" },
      { id: 2, name: "Kawshik", role: "student", usn: "1002" },
      { id: 3, name: "Bhuvan", role: "student", usn: "1003" },
    ];
  });

  const [newUser, setNewUser] = useState({ name: "", role: "", usn: "" });

  
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const handleInputChange = (event) => {
    setNewUser({ ...newUser, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextId = users.length > 0 ? Math.max(...users.map((u) => u.id)) + 1 : 1;
    const user = { ...newUser, id: nextId };
    setUsers([...users, user]);
    setNewUser({ name: "", role: "", usn: "" });
  };

  const handleReset = () => {
    setNewUser({ name: "", role: "", usn: "" });
  };

  return (
    <div className="user-list">
      <h2>Student List</h2>
      <form onSubmit={handleSubmit} onReset={handleReset}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={newUser.name}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Role:
          <input
            type="text"
            name="role"
            value={newUser.role}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          USN:
          <input
            type="text"
            name="usn"
            value={newUser.usn}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
      </form>
      <ul>
        {users.map((user) => (
          <li key={user.id} className="user-item">
            <h3>Name: {user.name}</h3>
            <p>
              Role: {user.role}
              <br />
              USN: {user.usn}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
