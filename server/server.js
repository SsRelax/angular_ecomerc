
// Step 1 import...
const PORT = 5000;
const express = require('express');
const morgan = require('morgan');
const app = express();
const {readdirSync} = require('fs');
const cors = require('cors');

// middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

readdirSync('./routes').map((c) => app.use('/api',require('./routes/'+c)) );

// Step 2 Start Server
app.listen( PORT , () => {
    console.log("Server is runner on port 5000");
}) 


