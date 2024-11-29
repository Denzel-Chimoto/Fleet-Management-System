
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';
import DashBoard from './components/DashBoard';
import 'bootstrap/dist/css/bootstrap.min.css';
import FleetTracking from './components/FleetTracking';


// First Login Page Components
//      <Header/>
//      <Form/>
//You can uncomment them, render them insisde the div instead of the dashboard component to see the Login Page

function App() {
  return (
    <div>
      {/* <Header/> */}
      <FleetTracking/>
      {/* <DashBoard/> */}
    </div>
  );
}

export default App;
