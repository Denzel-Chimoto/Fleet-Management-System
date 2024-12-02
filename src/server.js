const express = require("express");
const cors = require("cors");
const pool = require("./db");
const app = express();
const port = 5000;
const bcrypt = require("bcrypt");

// Middleware to handle CORS and JSON payloads
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Establish connection to PostgreSQL database
pool.connect((err) => {
  if (err) {
    console.error("Database connection error", err.stack);
  } else {
    console.log("Connected to PostgreSQL");
  }
});

// Route to create a new task
app.post("/api/tasks", async (req, res) => {
  const { description, location, deadline, driver, status } = req.body; // Destructure task data from request body
  try {
    const query = `
      INSERT INTO tasks (description, location, deadline, driver, status)
      VALUES ($1, $2, $3, $4, $5) RETURNING *;
    `;
    const values = [description, location, deadline, driver, status];

    const result = await pool.query(query, values); // Insert task into database
    res.status(201).json(result.rows[0]); // Respond with the newly created task
  } catch (error) {
    console.error("Error creating task:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Route to fetch all tasks
app.get("/api/tasks", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM tasks ORDER BY id ASC"); // Query all tasks ordered by ID
    res.json(result.rows); // Respond with the list of tasks
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Route to create a new user
app.post("/api/users", async (req, res) => {
  const { name, email, password, role } = req.body; // Destructure user data from request body

  try {
    const query = `
      INSERT INTO users (name, email, password, role)
      VALUES ($1, $2, $3, $4) RETURNING *;
    `;
    const values = [name, email, password, role];

    const result = await pool.query(query, values); // Insert user into database
    res.status(201).json(result.rows[0]); // Respond with the newly created user
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Route to handle user login
app.post("/check", async (req, res) => {
  const { email, password } = req.body; // Destructure login credentials from request body

  try {
    const result = await pool.query("SELECT * FROM users WHERE email = $1", [email]); // Query user by email

    if (result.rows.length === 0) {
      return res.status(400).json({ message: "User not found" });
    }

    const user = result.rows[0];

    if (user.password !== password) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    res.status(200).json({ message: "Login successful", user }); // Respond with user data on successful login
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// Route to fetch all vehicles
app.get("/api/vehicles", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM vehicles"); // Query all vehicles
    res.json(result.rows); // Respond with the list of vehicles
  } catch (error) {
    console.error("Error fetching vehicles:", error);
    res.status(500).json({ message: "Error fetching vehicles" });
  }
});

// Route to add a new vehicle
app.post("/addVehicles", async (req, res) => {
  try {
    const { type, registration, status } = req.body; // Destructure vehicle data from request body
    const query = `
      INSERT INTO vehicles (type, registration, status, location, user_id)
      VALUES ($1, $2, $3, $4, $5) RETURNING *;
    `;
    const values = [type, registration, status, "depot", 2];

    const result = await pool.query(query, values); // Insert vehicle into database
    res.status(201).json(result.rows[0]); // Respond with the newly created vehicle
  } catch (error) {
    console.error(error.message);
  }
});

// Route to fetch all users
app.get("/api/users", async (req, res) => {
  try {
    const allEmails = await pool.query("SELECT * FROM users"); // Query all users
    res.json(allEmails.rows); // Respond with the list of users
  } catch (error) {
    console.error(error.message);
  }
});


// Route to delete a vehicle by ID
app.delete("/api/vehicles/:id", async (req, res) => {
  try {
    const { id } = req.params; // Extract the vehicle ID from the URL parameters
    await pool.query("DELETE FROM vehicles WHERE id = $1", [id]); // Delete the vehicle from the database
    res.json({ message: "Vehicle was deleted" }); // Respond with a success message
  } catch (error) {
    console.error(error.message);
  }
});

// Route to delete a task by ID
app.delete("/api/tasks/:id", async (req, res) => {
  try {
    const { id } = req.params; // Extract the task ID from the URL parameters
    const result = await pool.query("DELETE FROM tasks WHERE id = $1 RETURNING *", [id]); // Delete the task from the database and return the deleted row

    if (result.rowCount === 0) {
      return res.status(404).json({ message: "Task not found" }); // Handle case where the task does not exist
    }

    res.json({ message: "Task was deleted successfully", deletedTask: result.rows[0] }); // Respond with success and details of the deleted task
  } catch (error) {
    console.error("Error deleting task:", error);
    res.status(500).json({ message: "Internal server error" }); // Handle server errors
  }
});



// Update vehicle endpoint
app.put('/api/vehicles/:id', async (req, res) => {
  const { id } = req.params; // Extract vehicle ID from URL
  const { type, registration, status, location } = req.body; // Extract updated data from request body

  try {
    // SQL query to update vehicle data
    const query = `
      UPDATE vehicles 
      SET type = $1, registration = $2, status = $3, location = $4
      WHERE id = $5
      RETURNING *;
    `;

    // Execute query
    const result = await pool.query(query, [type, registration, status, location, id]);

    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Vehicle not found' });
    }

    res.status(200).json(result.rows[0]); // Return updated vehicle data
  } catch (error) {
    console.error('Error updating vehicle:', error);
    res.status(500).json({ error: 'An error occurred while updating the vehicle' });
  }
});




// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});

