import React from 'react';
import Header from './Header';
import Card from './Card';
import { useNavigate } from 'react-router-dom';

const DashBoard = () => {
    const navigate = useNavigate()
    const handleClick = ()=>{
        navigate('/vehicle-management');
    }
    
  return (
    <div className='dashboard'>
        <Header/>
        <div className='cards'>
            <div className='card'>
                <Card first="Active :" second="Idle :" third="Maintanance :" />
            </div>
            <div className='card'>
                <Card first="Pending :" second="In-Progress :" third="Completed :" />
            </div>
            <div className='card'>
                <Card first="Driver Name :" second="Driver ID :" third="Number Of Tasks :" />
            </div>
        </div>
        <div>
            <button onClick={handleClick}>Vehicle</button>
            <button>Tasks</button>
            <button>Reports</button>
        </div>

    </div>
  )
}

export default DashBoard
