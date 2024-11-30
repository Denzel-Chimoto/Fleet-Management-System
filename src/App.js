
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';
import DashBoard from './components/DashBoard';
import 'bootstrap/dist/css/bootstrap.min.css';
import VehicleManagementHome from './components/VehicleManagementHome';
import VMH from './components/VMH';
import TaskAssignmentPage from './components/TaskAssignmentPage';


// First Login Page Components
//      <Header/>
//      <Form/>
//<DashBoard/>
//<AddVehicleForm/>
//      <VMH/>
//You can uncomment them, render them insisde the div instead of the dashboard component to see the Login Page

function App() {
  return (
    <div>
      <TaskAssignmentPage/>
    </div>
  );
}

export default App;
