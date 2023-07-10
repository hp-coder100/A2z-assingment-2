import "./App.css";
import Home from "./Home";
import { Container, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Login";
import { useState } from "react";
import Navigation from "./Navigation";
function App() {
  const [user, setUser] = useState(null);

  const login = (newUser) => {
    setUser(newUser);
  };
  const logout = () => {
    setUser(null);
  };

  return (
    <>
      <Navigation user={user} logout={logout}></Navigation>
      {user && <Home user={user} />}
      {!user && <Login login={login} />}

      <div className="d-flex flex-column flex-md-row justify-content-around px-2 align-items-center bg-dark text-white fixed-bottom">
        <p>Subbmitted by : HEMANT PRAJAPTI</p>
        <p> Email : hemantprajapati6507@gmail.com </p>
      </div>
    </>
  );
}

export default App;
