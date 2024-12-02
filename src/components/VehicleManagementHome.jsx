import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./styles/VMH.css";

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
    <div className="vehicle-container">
      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Search by type, registration, status, or location..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={handleAdd} className="add-button">
          Add Vehicle
        </button>
      </div>

      {/* Table */}
      <table className="vehicle-table">
        <thead>
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
                <button className="edit-button">Edit</button>
                <button
                  className="delete-button"
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