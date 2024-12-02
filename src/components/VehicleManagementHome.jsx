import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const VehicleManagementHome = () => {
  const [data, setData] = useState([]); // State for vehicle data
  const [searchText, setSearchText] = useState(""); // State for search input
  const navigate = useNavigate(); // Hook for navigation

  // Fetch data from the backend
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/vehicles");
      setData(response.data); // Update state with fetched data
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Handle delete operation
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/vehicles/${id}`); // Include ID in the URL
      setData(data.filter((row) => row.id !== id)); // Remove deleted row from state
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  // Filter data based on search input
  const filteredData = data.filter((row) =>
    ["type", "registration", "status", "location"].some((key) =>
      row[key]?.toString().toLowerCase().includes(searchText.toLowerCase())
    )
  );

  // Navigate to Add Vehicle page
  const handleAdd = () => {
    navigate("/addVehicle");
  };

  return (
    <div className="container mt-5">
      {/* Search Bar */}
      <div className="d-flex justify-content-between mb-3">
        <input
          type="text"
          className="form-control me-3"
          placeholder="Search by type, registration, status, or location..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={handleAdd} className="btn btn-warning">
          Add Vehicle
        </button>
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
                <button className="btn btn-warning btn-sm me-2">Edit</button>
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
