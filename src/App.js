
import './App.css';
import CreateUser from './components/CreateUser';
import Form from './components/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import VehicleManagementHome from './components/VehicleManagementHome';
import AddVehicleForm from './components/AddVehicleForm';
import DashBoard from './components/DashBoard';



// First Login Page Components
//      <Header/>
//      <Form/>
//<DashBoard/>
//<AddVehicleForm/>
//      <VMH/>
//You can uncomment them, render them insisde the div instead of the dashboard component to see the Login Page

function App() {
  return (
    <Routes>
    <Route path="/create-user" element={<CreateUser />} />
    <Route path="/login" element={<Form />} />
    <Route path="/vehicle-management" element={<VehicleManagementHome />} />
    <Route path="/" element={<Form />} />
    <Route path='/addVehicle' element={<AddVehicleForm/>} />
    <Route path='/dashboard' element={<DashBoard/>}/>
  </Routes>
  );
}

export default App;

// {/* <TaskAssignmentPage/>
// {/* <Header/> */}
// <FleetTracking/>
// <DashBoard/> */}





