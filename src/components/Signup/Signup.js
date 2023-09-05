import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Signup/Signup.scss";
import axios from "axios";

function Signup(props) {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email);

    const userData = {
      name,
      email,
      password,
    };

    try {
      // Make a POST request to your backend API using Axios
      const response = await axios.post(
        "http://localhost:7777/signup",
        userData
      );

      // Handle the response from the server (e.g., redirection)
      console.log(response.data);

      // Redirect the user to the login page
      navigate("/login");
    } catch (error) {
      // Handle any errors
      console.error(error);
    }
  };

  return (
    <section className="auth-form-container">
      <h2>Register</h2>
      <form
        className="register-form"
        onSubmit={handleSubmit}
        action="/signup"
        method="POST"
      >
        <label htmlFor="name">Full Name</label>
        <input
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
          id="name"
          placeholder="full name"
        />
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="email"
          id="email"
          name="email"
        />
        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />
        <button type="submit">Sign up</button>
      </form>
      <button className="link-btn" onClick={() => navigate("/login")}>
        Already have an account? Login here.
      </button>
    </section>
  );
}

export default Signup;
