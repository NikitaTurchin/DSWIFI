import React, { useState } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";

export default function (props) {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let loggedIn = false;

  function handleSubmit(event) {
    event.preventDefault();
    if (email === "admin" && password === "admin" && loggedIn === false) {
      window.location.href='/tables';
      loggedIn = true;
    } else return(alert("Wrong Email or Password"));
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="email" bsSize="large">
          <ControlLabel>Email</ControlLabel>
          <FormControl
            autoFocus
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <ControlLabel>Password</ControlLabel>
          <FormControl
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <Button block bsSize="large" type="submit">
          Login
        </Button>
      </form>
    </div>
  );
}