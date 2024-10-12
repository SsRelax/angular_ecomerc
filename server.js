
// Step 1 import...
const express = require('express');
const morgan = require('morgan');
const app = express();
const PORT = 5000;

// middleware
app.use(morgan('dev'))
app.use(express.json())



// Step 3 Riuter
// app.get('/frontend/login', (req, res) => {
//     const {username , password  } = req.query

//     console.log(username);
//     console.log(password);

//     // let Obj = {
//     //     username : username,
//     //     password : password
//     // }

//     res.send('Get response API -> username');
// })











// Step 2 Start Server
app.listen( PORT , () => {
    console.log("Server is runner on port 5000");
}) 


