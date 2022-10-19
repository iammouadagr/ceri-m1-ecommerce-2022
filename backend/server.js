require('dotenv').config({ path: './config/.env' })
const express = require('express')
const bodyParser= require('body-parser');
var os = require('os');
const router = require('./api/routes/routes.js')



// app config
const app = express()
const server = require('http').Server(app);
const hostname = os.hostname();
const PORT= process.env.PORT;






// routes 
app.use('/api/v1/',router)



app.listen(PORT, () => {  console.log("Running on port :",PORT)});
