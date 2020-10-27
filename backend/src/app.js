const express = require('express');
const cors = require('cors');
const app = express();

//settings
app.set('port', 3000);

//middlewares
app.use(cors());
app.use(express.json());
 
//Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/notes', require('./routes/notes'));


module.exports = app;