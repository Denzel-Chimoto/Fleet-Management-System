import React from 'react';
import Header from './Header';
import Card from './Card';

const DashBoard = () => {
  return (
    <div className='dashboard'>
        <div className='cards'>
            <div className='card'>
                <Card first="Active" second="Idle" third="Maintanance" />
            </div>
            <div className='card'>
                <Card first="Pending" second="In-Progress" third="Completed" />
            </div>
            <div className='card'>
                <Card first="Driver Name" second="Driver ID " third="Number Of Tasks" />
            </div>
        </div>
        <div>
            <button>Vehicle</button>
            <button>Tasks</button>
            <button>Reports</button>
        </div>

    </div>
  )
}

export default DashBoard
