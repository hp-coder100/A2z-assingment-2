import React, { useState } from "react";
import { Col, Button, Form, Container } from "react-bootstrap";

const Login = ({ login }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const validateForm = () => {
    if (username === "" || password === "" || email === "") {
      setError("All Fields are Required.");
      return false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Email address is invalid");
      return false;
    } else if (password.length < 8) {
      setError("Password Must be at lease 8 Characters long");
      return false;
    }
    return true;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (validateForm()) {
      login({
        username,
        password,
        email,
      });
    }
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    setError("This Function is not defined");
  };

  return (
    <Container className="justify-content-center">
      <h1 className="text-primary text-center p-2">Login</h1>
      <Form
        onChange={(e) => setError(null)}
        as={Col}
        md={6}
        className="p-3 my-3 mx-auto shadow">
        <Form.Group controlId="formUsername">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your name"
            required
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </Form.Group>

        <Button variant="primary" onClick={handleLogin}>
          Login
        </Button>
        <Button variant="link" onClick={handleForgotPassword}>
          Forgot Password
        </Button>

        {error && <p className="text-danger">{error}</p>}
      </Form>
    </Container>
  );
};

export default Login;
