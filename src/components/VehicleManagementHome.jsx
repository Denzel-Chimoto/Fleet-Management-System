import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./styles/VMH.css";

const VehicleManagementHome = () => {
  // State for storing vehicle data from the API
  const [data, setData] = useState([]);
  // State for search input
  const [searchText, setSearchText] = useState("");
  // State to track the row being edited
  const [editData, setEditData] = useState(null);
  // State to toggle edit mode
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  // Fetch data when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  // Fetch vehicle data from the API
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/vehicles");
      setData(response.data); // Update the state with the fetched data
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Handle deletion of a vehicle record
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/vehicles/${id}`);
      // Update the data state by removing the deleted row
      setData(data.filter((row) => row.id !== id));
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  // Enter edit mode for the selected row
  const handleEdit = (row) => {
    setEditData(row); // Store the row being edited
    setIsEditing(true); // Enable edit mode
  };

  // Save the changes made to the row being edited
  const handleSave = async () => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/vehicles/${editData.id}`,
        editData
      );
      // Update the row in the state with the new data
      setData(
        data.map((row) => (row.id === editData.id ? response.data : row))
      );
      setIsEditing(false); // Exit edit mode
      setEditData(null); // Clear the edit data
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  // Cancel the editing process
  const handleCancel = () => {
    setIsEditing(false); // Exit edit mode
    setEditData(null); // Clear the edit data
  };

  // Filter the data based on the search input
  const filteredData = data.filter((row) =>
    ["type", "registration", "status", "location"].some((key) =>
      row[key]?.toString().toLowerCase().includes(searchText.toLowerCase())
    )
  );

  return (
    <div className="vehicle-container">
      {/* Search bar and Add Vehicle button */}
      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Search by type, registration, status, or location..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)} // Update search input state
        />
        <button className="add-button" onClick={() => navigate("/addVehicle")}>
          Add Vehicle
        </button>
      </div>

      {/* Edit form for updating vehicle data */}
      {isEditing ? (
        <div className="edit-form">
          <h3>Edit Vehicle</h3>
          <input
            type="text"
            value={editData.type}
            onChange={(e) => setEditData({ ...editData, type: e.target.value })}
            placeholder="Vehicle Type"
          />
          <input
            type="text"
            value={editData.registration}
            onChange={(e) =>
              setEditData({ ...editData, registration: e.target.value })
            }
            placeholder="Registration"
          />
          <input
            type="text"
            value={editData.status}
            onChange={(e) =>
              setEditData({ ...editData, status: e.target.value })
            }
            placeholder="Status"
          />
          <input
            type="text"
            value={editData.location}
            onChange={(e) =>
              setEditData({ ...editData, location: e.target.value })
            }
            placeholder="Location"
          />
          <div className="edit-actions">
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
          </div>
        </div>
      ) : (
        // Table displaying vehicle data
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
                <td>{index + 1}</td> {/* Display row index */}
                <td>{row.type}</td>
                <td>{row.registration}</td>
                <td>{row.status}</td>
                <td>{row.location}</td>
                <td>
                  {/* Edit and Delete buttons */}
                  <button
                    className="edit-button"
                    onClick={() => handleEdit(row)}
                  >
                    Edit
                  </button>
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
      )}
    </div>
  );
};

export default VehicleManagementHome;
