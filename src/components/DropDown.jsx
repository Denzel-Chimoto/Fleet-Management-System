import React, {useState} from 'react'




const DropDown = (props) => {
    const [selectedOption,setSelectedOption] = useState('');

    const handleChange = (event)=>{
        setSelectedOption(event.target.value);
        console.log('Selected :',event.target.value);
    };
  return (
    <div class="dropdown ">
      <p>{props.heading}</p>
      <select onChange={handleChange} value={selectedOption} name="" id="">
        <option value="">--Select--</option>
        <option class="dropdown-item" value={props.value1}>{props.value1}</option>
        <option class="dropdown-item" value={props.value2}>{props.value2}</option>
        
      </select>
      
    </div>
  )
}

export default DropDown
