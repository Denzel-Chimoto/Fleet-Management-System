import React, { useState } from 'react';
import Logo from './Logo';
import { useNavigate } from 'react-router-dom';
import './styles/AddVehicleForm.css';

const AddVehicleForm = () => { 
  const [formData, setFormData] = useState({
    type: "",
    registration: "",
    driver: "",
    status: "idle",
    location: "depot",
    user_id: 2,
  }); 
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Simulate POST request (replace with actual API call if necessary)
      console.log('Submitted data:', formData);
      setMessage("Vehicle added successfully!");
      setFormData({
        type: "",
        registration: "",
        driver: "",
        status: "idle",
        location: "depot",
        user_id: 2,
      });
    } catch (error) {
      setMessage("Error adding vehicle. Please try again.");
    }
    navigate('/vehicle-management');
  };

  return (
    <form className="add-vehicle-form" onSubmit={handleSubmit}>
      <div className="logo-wrapper">
        <Logo style={{ height: "20vh" }} imgSrc={"vfmsIMGBlack.png"} />
      </div>
      <div className="form-group">
        <label htmlFor="type">Vehicle Type</label>
        <input
          type="text"
          name="type"
          value={formData.type}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="registration">Reg No</label>
        <input
          type="text"
          name="registration"
          value={formData.registration}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="driver">Assigned Driver</label>
        <input
          type="text"
          name="driver"
          value={formData.driver}
          onChange={handleInputChange}
          required
        />
      </div>
      <button className="custom-button" type="submit">
        Submit
      </button>
      {message && <p className="form-message">{message}</p>}
    </form>
  );
};

export default AddVehicleForm;
