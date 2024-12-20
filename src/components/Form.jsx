import React, { Fragment, useState } from "react";
import DropDown from "./DropDown";
import Logo from "./Logo";
import { useNavigate } from "react-router-dom";
import "./styles/Form.css";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Driver");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const onSubmitForm = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const body = { email, password, role };
      const response = await fetch("http://localhost:5000/check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const result = await response.json();
      if (response.ok) {
        setMessage(result.message);
        navigate("/dashboard");
      } else {
        setMessage(result.message);
      }
    } catch (err) {
      console.error("There was an error", err);
      setMessage("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Fragment>
      <div className="form-container">
        <div className="logo-container">
          <Logo imgSrc={"vfmsIMG.png"} />
        </div>
        <form onSubmit={onSubmitForm} className="custom-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              value={email}
              name="email"
              id="email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              value={password}
              name="password"
              id="password"
              required
            />
          </div>
          <div className="form-group">
            <a href="/create-user">Forgot Password?</a>
            <DropDown
              value1="Fleet Manager"
              value2="Driver"
              onChange={(e) => setRole(e.target.value)}
            />
          </div>
          <button
            className="custom-button"
            type="submit"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
        {message && <p className="form-message">{message}</p>}
      </div>
    </Fragment>
  );
};

export default Form;
