import React, { Fragment, useState } from 'react';
import DropDown from './DropDown';
import Logo from './Logo';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Driver");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const onSubmitForm = async e => {
    e.preventDefault();
    setLoading(true);

    try {
      const body = { email, password, role };
      const response = await fetch("http://localhost:5000/check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log("Sending data:", { email, password, role });


      const result = await response.json();
      console.log(result)

      if (response.ok) {
        // Successful login, redirect to Vehicle Management
        setMessage(result.message);
        navigate("/dashboard"); // Redirect to Vehicle Management
      } else {
        // Failed login
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
      <div className="mb-3">
        <Logo />
      </div>
      <form onSubmit={onSubmitForm}>
        <div>
          <label className="form-label" htmlFor="email">Email</label>
          <input onChange={e => setEmail(e.target.value)} type="email" value={email} className="form-control" name="email" id="email" required />
        </div>
        <div>
          <label className="form-label" htmlFor="password">Password</label>
          <input onChange={e => setPassword(e.target.value)} type="password" value={password} className="form-control" name="password" id="password" required />
        </div>
        <div className="mb-3">
          <a href="/create-user">Forgot Password</a>
          <DropDown value1="Fleet Manager" value2="Driver" onChange={e => setRole(e.target.value)} />
        </div>
        <input className="btn btn-primary" type="submit" value="Submit" disabled={loading} />
      </form>
      {loading && <p>Loading...</p>}
      {message && <p>{message}</p>}
    </Fragment>
  );
};

export default Form;
