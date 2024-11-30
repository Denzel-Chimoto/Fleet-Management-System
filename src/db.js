import pg from 'pg';

const db = new pg.Client({
    user: "PostgreSQL 17",
    host:"localhost",
    database:"world",
    password:"080704",
    port: 5432,
});

db.connect();

db.query("SELECT * FROM capitals", (err,res)=>{
    if(err){console.error("Error executing query",err.stack);}
    else{let quiz = res.rows;console.log(quiz)}
    db.end();
})
