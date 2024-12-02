import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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

  // Fetch tasks from the database
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

  // Handle form submission
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

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle delete operation
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
    <div>
      {/* Form for Task Creation */}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <Logo />
        </div>
        <div>
          <label className="form-label" htmlFor="description">
            Task Description
          </label>
          <input
            type="text"
            className="form-control"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label className="form-label" htmlFor="location">
            Location
          </label>
          <input
            type="text"
            className="form-control"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label className="form-label" htmlFor="deadline">
            Deadline
          </label>
          <input
            type="datetime-local"
            className="form-control"
            name="deadline"
            value={formData.deadline}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Assign To Driver</label>
          <select
            name="driver"
            className="form-control"
            value={formData.driver}
            onChange={handleInputChange}
          >
            <option value="Chimoto">Chimoto</option>
            <option value="Mutenje">Mutenje</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Status</label>
          <select
            name="status"
            className="form-control"
            value={formData.status}
            onChange={handleInputChange}
          >
            <option value="Pending">Pending</option>
            <option value="In-Progress">In-Progress</option>
          </select>
        </div>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>

      {/* Task List Table */}
      <div className="container mt-5">
        <h2>Task List</h2>
        {message && <div className="alert alert-info">{message}</div>}
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Task ID</th>
              <th>Description</th>
              <th>Driver</th>
              <th>Status</th>
              <th>Deadline</th>
              <th>Quick Actions</th>
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
                  <button className="btn btn-warning btn-sm m-1">Edit</button>
                  <button
                    className="btn btn-danger btn-sm m-1"
                    onClick={() => handleDelete(task.id)}
                  >
                    Delete
                  </button>
                  <button className="btn btn-success btn-sm m-1">
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
