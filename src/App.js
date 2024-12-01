
import './App.css';
import CreateUser from './components/CreateUser';
import Form from './components/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import VehicleManagementHome from './components/VehicleManagementHome';
import AddVehicleForm from './components/AddVehicleForm';
import DashBoard from './components/DashBoard';
import FleetTracking from './components/FleetTracking';
import TaskAssignmentPage from './components/TaskAssignmentPage';



// First Login Page Components

//You can uncomment them, render them insisde the div instead of the dashboard component to see the Login Page

function App() {
  return (
    <Routes>
    <Route path="/create-user" element={<CreateUser />} />
    <Route path="/login" element={<Form />} />
    <Route path="/vehicle-management" element={<VehicleManagementHome />} />
    <Route path="/" element={<DashBoard />} />
    <Route path='/addVehicle' element={<AddVehicleForm/>} />
    <Route path='/dashboard' element={<DashBoard/>}/>
    <Route path='/taskAssignment' element={<TaskAssignmentPage/>}/>

  </Routes>
  );
}

// {/* <Route path="/" element={<Form />} /> */}

export default App;

// {/* <TaskAssignmentPage/>
// {/* <Header/> */}
// <FleetTracking/>
// <DashBoard/> */}





