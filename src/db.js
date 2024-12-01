const Pool =require('pg').Pool;

const db = new Pool({
    user: "postgres",
    host:"localhost",
    database:"fms",
    password:"080704",
    port: 5432,
});

db.connect();

module.exports= db;