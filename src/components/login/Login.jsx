import "./Login.scss";
import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import InputWithLabel from "./input-with-label/InputWithLabel";
import { login } from "../../services/api.service";

export default function Login({ user, onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    login(email, password)
      .then((r) => {
        onLogin(r)
      }) 
      .catch((e) => setError(e.response.data.message));
  };

  if (user) {    
    return <Redirect to="/products" />;  
  }

  return (
    <div className="Login">
      {error && <p>There was an error: {error}</p>}
      <form onSubmit={onSubmit}>
        <InputWithLabel
          value={email}
          label="email"
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
        <InputWithLabel
          value={password}
          label="password"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
}
