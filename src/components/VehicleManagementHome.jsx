import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const VehicleManagementHome = () => {
    const [data, setData] = useState([]);
    const [searchText, setSearchText] = useState('');
    const navigate = useNavigate();
  
    // Fetch data from the backend
    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/vehicles');
        setData(response.data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    // Handle delete operation
    const handleDelete = async (id) => {
      try {
        await axios.delete('http://localhost:5000/api/users/${id}');
        setData(data.filter(row => row.id !== id));
      } catch (error) {
        console.error('Error deleting data:', error);
      }
    };
  
    // Filter data based on search input
    const filteredData = data.filter(row =>
      Object.values(row).some(value =>
        value.toString().toLowerCase().includes(searchText.toLowerCase())
      )
    );

    const handleAdd = () =>{
      console.log("Clicked Add Button");
      navigate("/addVehicle");
    }
  
    return (
      <div className="container mt-5">
        {/* Search Bar */}
        <div className="mb-3">
          <div>
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          </div>
          <div>
            <button onClick={handleAdd} className="btn btn-warning btn-sm">Add Vehicle</button>
          </div>

        </div>
  
        {/* Table */}
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
            <th>Entry #</th>
            <th>Vehicle Type</th>
              <th>Reg No</th>
              <th>Status</th>
              <th>Location</th>
              <th>Quick Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, index) => (
              <tr key={row.id}>
                <td>{index + 1}</td>
                <td>{row.type}</td>
                <td>{row.registration}</td>
                <td>{row.status}</td>
                <td>{row.location}</td>
                <td>
                  <button className="btn btn-warning btn-sm">Edit</button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(row.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  export default VehicleManagementHome;