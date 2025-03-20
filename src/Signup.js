import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./styles.css"; // Import the CSS file

function Signup() {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://a02d89b7b24714d5d988cfb712dadbbd-1833324318.us-east-1.elb.amazonaws.com/api/signup", formData);
      alert(response.data.message);
      navigate("/login");
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Signup</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
          <button type="submit">Signup</button>
        </form>
        <p>Already have an account?</p>
        <button className="secondary" onClick={() => navigate("/login")}>Login</button>
      </div>
    </div>
  );
}

export default Signup;
