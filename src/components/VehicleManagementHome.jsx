import React, { useEffect, useState } from 'react';
import axios from 'axios';



const VehicleManagementHome = () => {
    const [data, setData] = useState([]);
    const [searchText, setSearchText] = useState('');
  
    // Fetch data from the backend
    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/users');
        setData(response.data);
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
  
    return (
      <div className="container mt-5">
        {/* Search Bar */}
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
  
        {/* Table */}
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, index) => (
              <tr key={row.id}>
                <td>{index + 1}</td>
                <td>{row.name}</td>
                <td>{row.email}</td>
                <td>{row.role}</td>
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