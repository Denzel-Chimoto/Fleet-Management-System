import React from 'react'; 
import './App.css';
import CreateUser from './components/CreateUser';
import Form from './components/Form';
import { Routes, Route } from "react-router-dom";
import VehicleManagementHome from './components/VehicleManagementHome';
import AddVehicleForm from './components/AddVehicleForm';
import DashBoard from './components/DashBoard';
import FleetTracking from './components/FleetTracking';
import TaskAssignmentPage from './components/TaskAssignmentPage';
import ReportsPage from './components/ReportsPage';
import Header from './components/Header';
import Sidebar from './components/SideBar';



// First Login Page Components
//      <Header/>
//      <Form/>
//<DashBoard/>
//<AddVehicleForm/>
//      <VMH/>
//You can uncomment them, render them insisde the div instead of the dashboard kuti muone Dashboard

function App() {



  return (
    <>
    <Header/>
    <div className='grid-container'>
      <Sidebar/>
    <Routes>
    <Route path="/create-user" element={<CreateUser />} />
    <Route path="/login" element={<Form />} />
    <Route path="/vehicle-management" element={<VehicleManagementHome />} />
    <Route path="/" element={<Form />} /> 
    <Route path='/addVehicle' element={<AddVehicleForm/>} />
    <Route path='/dashboard' element={<DashBoard/>}/>
    <Route path='/taskAssignment' element={<TaskAssignmentPage/>}/>
    <Route path='/tracking' element={<FleetTracking/>}/>
    <Route path='/reportsPage' element={<ReportsPage/>}/>

  </Routes>
  </div>
  </>
  );
}

// {/* <Route path="/" element={<Form />} /> */}

export default App;

// {/* <TaskAssignmentPage/>
// {/* <Header/> */}
// <FleetTracking/>
// <DashBoard/> */}





