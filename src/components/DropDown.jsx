import React, { useState } from 'react';
import './styles/DropDown.css';

const DropDown = (props) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    console.log('Selected:', event.target.value);
  };

  return (
    <div className="dropdown-container">
      <label className="dropdown-label">{props.heading}</label>
      <select
        className="custom-dropdown"
        onChange={handleChange}
        value={selectedOption}
      >
        <option value="">--Select--</option>
        <option value={props.value1}>{props.value1}</option>
        <option value={props.value2}>{props.value2}</option>
      </select>
    </div>
  );
};

export default DropDown;
