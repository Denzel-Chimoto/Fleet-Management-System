import React, {useState} from 'react'

const DropDown = () => {
    const [selectedOption,setSelectedOption] = useState('');

    const handleChange = (event)=>{
        setSelectedOption(event.target.value);
        console.log('Selected :',event.target.value);
    };
  return (
    <div>
      <p>Choose your Office</p>
      <select onChange={handleChange} value={selectedOption} name="" id="">
        <option value="">--Select--</option>
        <option value="manager">Manager</option>
        <option value="driver">Driver</option>
        
      </select>
      
    </div>
  )
}

export default DropDown
