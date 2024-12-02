import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./styles/VMH.css";

const VehicleManagementHome = () => {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [editData, setEditData] = useState(null); // Track the row being edited
  const [isEditing, setIsEditing] = useState(false); // Toggle edit mode
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/vehicles");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/vehicles/${id}`);
      setData(data.filter((row) => row.id !== id));
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  const handleEdit = (row) => {
    setEditData(row);
    setIsEditing(true);
  };

  const handleSave = async () => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/vehicles/${editData.id}`,
        editData
      );
      setData(
        data.map((row) => (row.id === editData.id ? response.data : row))
      );
      setIsEditing(false);
      setEditData(null);
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditData(null);
  };

  const filteredData = data.filter((row) =>
    ["type", "registration", "status", "location"].some((key) =>
      row[key]?.toString().toLowerCase().includes(searchText.toLowerCase())
    )
  );

  return (
    <div className="vehicle-container">
      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Search by type, registration, status, or location..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="add-button" onClick={() => navigate("/addVehicle")}>Add Vehicle</button>
      </div>

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
            onChange={(e) => setEditData({ ...editData, status: e.target.value })}
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
                  <button className="edit-button" onClick={() => handleEdit(row)}>Edit</button>
                  <button className="delete-button" onClick={() => handleDelete(row.id)}>Delete</button>
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
