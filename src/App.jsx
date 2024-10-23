import React, { useState } from "react";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import AccountPage from "./components/AccountPage";
import "./styles.css";

function App() {
  const [user, setUser] = useState(null);
  const [view, setView] = useState("login"); // Possible values: 'login', 'register', 'account'

  return (
    <div>
      <nav>
        {user ? (
          <button onClick={() => setView("account")}>Account</button>
        ) : (
          <>
            <button onClick={() => setView("login")}>Login</button>
            <button onClick={() => setView("register")}>Register</button>
          </>
        )}
      </nav>

      <div>
        {view === "login" && <LoginPage setUser={setUser} setView={setView} />}
        {view === "register" && (
          <RegisterPage setUser={setUser} setView={setView} />
        )}
        {view === "account" && user && (
          <AccountPage user={user} setUser={setUser} setView={setView} />
        )}
      </div>
    </div>
  );
}

export default App;
