/** @format */

// npm install mysql express cors

const mysql = require('mysql');
const express = require('express');
// const http = require('http');
const cors = require('cors');
const bcrypt = require('bcryptjs');

const app = express();
app.use(cors());
app.use(express.json());
const port = 3004;

// create a connnection
const connection = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: '',
  database: 'aoma_sat',
});

// to check mysql is connected
// connection.connect((err)=>{
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('connected !!!');
//     }
// })

// insert data in database
// connection.query(
//   "INSERT INTO user(username,email,password) VALUES ('markey','mark@gamil.com','passwordresults12')",
//   (err, results) => {
//     if (err) {
//       console.log(err.sqlMessage);
//     } else {
//       console.log('sent !!!');
//     }
//   }
// );

app.get('/', (req, res) => {
  res.send(req.url);
});

app.get('/list-users', (req, res) => {
  connection.query('SELECT * FROM user', (err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.send(results);
    }
  });
});

app.post('/sigup', async(req, res) => {
    // console.log( req.body);
  const { username, email, password } = req.body;
  encryptedPassword = await bcrypt.hash(password, 10);
  connection.query(
    'INSERT INTO user(username,email,password) VALUES (?,?,?)',
    [username, email, encryptedPassword],
    (err, results) => {
      if (err) {
        console.log(err.sqlMessage);
      } else {
        console.log('sent !!!');
      }
    }
  );
});


app.delete('/delete/:id', (req, res) => {
 
  const { id } = req.params;
  console.log( id);
  connection.query('DELETE FROM user WHERE id = ?',id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
    //   res.json(result);
    }
  });
});
app.listen(port, () => {
  console.log(`Starting development server at http://localhost:3004/
Quit the server with CONTROL-C.`);
});
