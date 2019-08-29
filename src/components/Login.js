import React, { useState } from "react";
import axios from "axios";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    const baseURL = "https://ilovelambda.herokuapp.com/api";
    axios
      .post(`${baseURL}/auth/login`, { username: email, password })
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        props.history.push("/booklist");
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>Login</p>
      <input
        value={email}
        name="email"
        type="text"
        onChange={e => setEmail(e.target.value)}
        placeholder="email"
      />
      <input
        value={password}
        name="password"
        type="password"
        onChange={e => setPassword(e.target.value)}
        placeholder="password"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Login;
