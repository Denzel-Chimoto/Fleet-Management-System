import React from 'react';
import Header from './Header';
import Card from './Card';
import Graph from './Graph';
import { useNavigate } from 'react-router-dom';
import './styles/Dashboard.css';

const DashBoard = () => {
    const navigate = useNavigate();

    // Code for Searching to our db when done with it

//     const [vehicleData, setVehicleData] = React.useState({});
// React.useEffect(() => {
//     fetch('/api/vehicle-data')
//         .then((res) => res.json())
//         .then((data) => setVehicleData(data));
// }, []);


    // Dummy data for cards
    const vehicleData = {
        active: 12,
        idle: 5,
        maintenance: 3,
    };

    const taskData = {
        pending: 8,
        inProgress: 4,
        completed: 20,
    };

    const driverData = {
        driverName: "John Doe",
        driverID: "DR12345",
        numberOfTasks: 15,
    };

    // Button click handlers
    const handleClick = () => {
        navigate('/vehicle-management');
    };

    const handleClickTask = () => {
        navigate('/taskAssignment');
    };

    return (
        <div className="dashboard">
            <Header />
            <div className="cards">
                {/* Vehicle Card */}
                <div className="card">
                    <Card 
                        first={`Active: ${vehicleData.active}`} 
                        second={`Idle: ${vehicleData.idle}`} 
                        third={`Maintenance: ${vehicleData.maintenance}`} 
                    />
                </div>
                
                {/* Task Card */}
                <div className="card">
                    <Card 
                        first={`Pending: ${taskData.pending}`} 
                        second={`In-Progress: ${taskData.inProgress}`} 
                        third={`Completed: ${taskData.completed}`} 
                    />
                </div>
                
                {/* Driver Card */}
                <div className="card">
                    <Card 
                        first={`Driver Name: ${driverData.driverName}`} 
                        second={`Driver ID: ${driverData.driverID}`} 
                        third={`Number Of Tasks: ${driverData.numberOfTasks}`} 
                    />
                </div>
            </div>
            
            <Graph /> {/* Graph component */}

            {/* Action buttons */}
            <div className="buttons">
                <button onClick={handleClick}>Vehicle</button>
                <button onClick={handleClickTask}>Tasks</button>
                <button>Reports</button>
            </div>
        </div>
    );
};

export default DashBoard;
