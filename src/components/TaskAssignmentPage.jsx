import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./styles/TaskAssignmentPage.css";

const TaskAssignmentPage = () => {
  const [formData, setFormData] = useState({
    description: "",
    location: "",
    deadline: "",
    driver: "Chimoto",
    status: "Pending",
  });

  const [tasks, setTasks] = useState([]);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/tasks");
        setTasks(response.data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };
    fetchTasks();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/tasks", formData);
      setMessage("Task added successfully!");
      setTasks([...tasks, response.data]);
      setFormData({
        description: "",
        location: "",
        deadline: "",
        driver: "Chimoto",
        status: "Pending",
      });
    } catch (error) {
      setMessage("Error adding task. Please try again.");
      console.error(error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  //Handle Task Update
  const handleUpdateStatus = async (id, newStatus) => {
    try {
      const updatedTask = await axios.put(`http://localhost:5000/api/tasks/${id}`, { status: newStatus });
      setTasks(tasks.map(task => task.id === id ? updatedTask.data : task));
      setMessage("Task status updated successfully!");
    } catch (error) {
      console.error("Error updating task status:", error);
      setMessage("Error updating task status.");
    }
  };
  

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/tasks/${id}`);
      setTasks(tasks.filter((task) => task.id !== id));
      setMessage("Task deleted successfully!");
    } catch (error) {
      console.error("Error deleting task:", error);
      setMessage("Error deleting task. Please try again.");
    }
  };

  return (
    <div className="task-page">
      <form onSubmit={handleSubmit} className="task-form">
        <div className="logo-container">
          <Logo imgSrc={"vfmsIMGBlack.png"} />
        </div>
        <div className="form-group">
          <label htmlFor="description">Task Description</label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="deadline">Deadline</label>
          <input
            type="datetime-local"
            name="deadline"
            value={formData.deadline}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Assign To Driver</label>
          <select
            name="driver"
            value={formData.driver}
            onChange={handleInputChange}
          >
            <option value="Chimoto">Chimoto</option>
            <option value="Mutenje">Mutenje</option>
          </select>
        </div>
        <div className="form-group">
          <label>Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleInputChange}
          >
            <option value="Pending">Pending</option>
            <option value="In-Progress">In-Progress</option>
          </select>
        </div>
        <button type="submit" className="custom-button">
          Submit
        </button>
      </form>

      <div className="task-list">
        <h2 style={{color:"white"}}>Task List</h2>
        {message && <div className="task-message">{message}</div>}
        <table className="task-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Task ID</th>
              <th>Description</th>
              <th>Driver</th>
              <th>Status</th>
              <th>Deadline</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={task.id}>
                <td>{index + 1}</td>
                <td>{task.id}</td>
                <td>{task.description}</td>
                <td>{task.driver}</td>
                <td>{task.status}</td>
                <td>{task.deadline}</td>
                <td>
                  <button className="custom-button edit-button">Edit</button>
                  <button
                    className="custom-button delete-button"
                    onClick={() => handleDelete(task.id)}
                  >
                    Delete
                  </button>
                  <button className="custom-button update-button">
                    Update Status
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaskAssignmentPage;
