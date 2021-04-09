import React, { useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from 'axios';
import "./login.css";

export default function Login({ history }) {
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
useEffect(() => {
  if (localStorage.getItem("authToken")) {
    history.push("/");
  }
}, [history]);

const loginHandler = async (e) => {
  e.preventDefault();

  const config = {
    header: {
      "Content-Type": "application/json",
    },
  };

  try {
    const { data } = await axios.post(
      "https://speacty.herokuapp.com/",
      { Email, password },
      config
    );

    localStorage.setItem("authToken", data.token);

    window.location.href = '/';
  } catch (error) {
    setError(error.response.data.error);
    setTimeout(() => {
      setError("");
    }, 5000);
  }
};
  function validateForm() {
    return Email.length > 0 && password.length > 0;
  }


  return (
    <div className="Login">
      <Form onSubmit={loginHandler}>
      {error && <span className="error-message">{error}</span>}
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
        <Link to="/forgotpassword" className="login-screen__forgotpassword">
              Forgot Password?
            </Link>
      </Form>
    </div>
  );
}


