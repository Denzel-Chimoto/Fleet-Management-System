
import './App.css';
import CreateUser from './components/CreateUser';
import Form from './components/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
<<<<<<< HEAD
import FleetTracking from './components/FleetTracking';
import AddVehicleForm from './components/AddVehicleForm';
=======
import { Routes, Route } from "react-router-dom";
import VehicleManagementHome from './components/VehicleManagementHome';
import AddVehicleForm from './components/AddVehicleForm';
import DashBoard from './components/DashBoard';

>>>>>>> refs/remotes/origin/main


// First Login Page Components

//You can uncomment them, render them insisde the div instead of the dashboard component to see the Login Page

function App() {
  return (
<<<<<<< HEAD
    <div>
      {/* <Header/> */}
      <Header/>
     <Form/>
<DashBoard/>
<AddVehicleForm/>
     {/* <VMH/> */}
      {/* <FleetTracking/> */}
      {/* <DashBoard/> */}
    </div>
=======
    <Routes>
    <Route path="/create-user" element={<CreateUser />} />
    <Route path="/login" element={<Form />} />
    <Route path="/vehicle-management" element={<VehicleManagementHome />} />
    <Route path="/" element={<Form />} />
    <Route path='/addVehicle' element={<AddVehicleForm/>} />
    <Route path='/dashboard' element={<DashBoard/>}/>
  </Routes>
>>>>>>> refs/remotes/origin/main
  );
}

export default App;

// {/* <TaskAssignmentPage/>
// {/* <Header/> */}
// <FleetTracking/>
// <DashBoard/> */}





