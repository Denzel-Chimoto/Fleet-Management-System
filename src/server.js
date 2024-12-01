const express = require("express");
const cors = require( "cors");
const  pool =require("./db");
const app = express();
const port =5000
const bcrypt = require("bcrypt");


app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

pool.connect((err) => {
  if (err) {
    console.error("Database connection error", err.stack);
  } else {
    console.log("Connected to PostgreSQL");
  }
});

app.post("/api/users", async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    const query = `
      INSERT INTO users (name, email, password, role)
      VALUES ($1, $2, $3, $4) RETURNING *;
    `;
    const values = [name, email, password, role];

    const result = await pool.query(query, values);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});


//The following method is for the Login form, to compare the password, authenticate and login the user
app.post("/check", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Query the user by email
    const result = await pool.query("SELECT * FROM users WHERE email = $1", [email]);

    if (result.rows.length === 0) {
      return res.status(400).json({ message: "User not found" });
    }

    const user = result.rows[0];

    // Compare the entered password with the stored hashed password
    const match = await bcrypt.compare(password, user.password);
    console.log(user.password);
    console.log(password)

    if (user.password!==password) {


      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Send back a success response with user data
    res.status(200).json({ message: "Login successful", user });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

//From the Vehicle Management Home to populate the Table
app.get('/api/vehicles', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM vehicles');
    res.json(result.rows);  // Respond with vehicle data
  } catch (error) {
    console.error('Error fetching vehicles:', error);
    res.status(500).json({ message: 'Error fetching vehicles' });
  }
});

app.post('/addVehicles',async(req,res)=>{
  try {
    const {type,registration,status} = req.body
    const query = `
      INSERT INTO vehicles (type, registration, status, location, user_id)
      VALUES ($1, $2, $3, $4, $5) RETURNING *;
    `;
    const values = [type, registration, status, "depot",2];

    const result = await pool.query(query, values);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error.message)
  }
})


//get all users
app.get('/api/users',async(req,res)=>{
  try {
    const allEmails = await pool.query("SELECT * FROM users");
    req.json(allEmails.rows);
  } catch (error) {
    console.error(error.message)
  }
});

//get a user


app.put("/todos/:id",async(req,res)=>{
  try {
    const {id} =req.params;
    const {description} = req.body; 
    const updateTodo = await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2",[description,id]);
    res.json()
  } catch (error) {
    console.error(error.message)
  }
});
app.delete("/todos/:id",async (req,res)=>{
  try {
    const {id} = req.params;
    const deleteTodo = await pool.query("DELETE FROM users WHERE todo_id = $1",[id]);
    res.json("Todo was deleted");
  } catch (error) {
    console.error(error.message)
  }
})

app.listen(port, ()=>{console.log(`Server is running at ${port}`)})