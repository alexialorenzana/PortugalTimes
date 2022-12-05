//setting up mysql database connection 
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json())
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'ilove0TTers',
  database: 'userData'
})

// Route for creating the post
app.post('/register', (req, res) => {
  const  username = req.body.username
  const email = req.body.email
  db.query("INSERT INTO users (username, email) VALUES (?,?)", [username, email], (err, result)=> {
    console.log(err)
  })
} )
app.listen(3001, () => {
  console.log('running server')
})





