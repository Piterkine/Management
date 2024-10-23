import React, { useState } from "react";

function AccountPage({ user, setUser, setView }) {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const handleSave = () => {
    const updatedUser = { ...user, name, email };
    localStorage.setItem("user", JSON.stringify(updatedUser));
    setUser(updatedUser);
    alert("Account updated successfully");
  };

  const handleLogout = () => {
    setUser(null);
    setView("login"); // Navigate back to login page
  };

  return (
    <div>
      <h2>Account Information</h2>
      <label>Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleSave}>Save</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default AccountPage;
