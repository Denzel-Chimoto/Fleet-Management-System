import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // For navigation

const CreateUser = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "Driver",
  });

  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // Hook for navigation

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/users", formData);
      setMessage("User created successfully!");
      setFormData({
        name: "",
        email: "",
        password: "",
        role: "Driver",
      });
    } catch (error) {
      setMessage("Error creating user. Please try again.");
    }
  };

  const handleLoginRedirect = () => {
    navigate("/login"); // Redirect to the login route
  };

  return (
    <div>
      <h2>Create User</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Role:</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleInputChange}
          >
            <option value="Driver">Driver</option>
            <option value="Fleet Manager">Fleet Manager</option>
            <option value="Admin">Admin</option>
          </select>
        </div>
        <button type="submit">Create User</button>
      </form>
      <p>{message}</p>

      {/* Login Button */}
      <button onClick={handleLoginRedirect} style={{ marginTop: "10px" }}>
        Login
      </button>
    </div>
  );
};

export default CreateUser;
