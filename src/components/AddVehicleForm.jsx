import React, { useState } from 'react';
import Logo from './Logo';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

//Don't forget to add a default status of idle when passing the form to the database
const AddVehicleForm = () => { 
  const [formData, setFormData] = useState({
    type: "",
    registration: "",
    driver: "",
    status:"idle",
    location:"depot",
    user_id:2
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
        const response = await axios.post("http://localhost:5000/addVehicles", formData);
        setMessage("User created successfully!");
        setFormData({
          type: "",
          registration: "",
          driver: "",
        });
      } catch (error) {
        setMessage("Error adding Vehicle. Please try again.");
      }
      navigate('/vehicle-management')
    };
    return (
        <form action="POST" onSubmit={handleSubmit}>
          <div className='mb-3' >
            <Logo style={{height:"20vh"}} imgSrc={"vfmsIMGBlack.png"}/>
          </div>
          <div>
            <label className="form-label" htmlFor="type">Vehicle Type</label>
            <input type='text'
              className="form-control"
              name="type"
              value={formData.name}
              onChange={handleInputChange}
              required/>
          </div>
          <div>
            <label 
            className="form-label" htmlFor="password">Reg No</label>
            <input className="form-control"
             name="registration"
             value={formData.name}
             onChange={handleInputChange}
             required
             />
          </div>
          <div className="mb-3">
            
            <label className="form-label" htmlFor="assignedDriver">Assigned Driver</label>
            <input className="form-control"
              name="driver"
              value={formData.name}
              onChange={handleInputChange}
              required
             />
          </div>
         
            <input className="btn btn-primary" type="submit" />
        </form>
      )
}

export default AddVehicleForm
