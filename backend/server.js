require('dotenv').config({ path: './config/.env' })
const express = require('express')
const bodyParser= require('body-parser');
var os = require('os');
const router = require('./api/routes/routes.js')
var cors = require('cors')



// app config
const app = express()
const server = require('http').Server(app);
const hostname = os.hostname();
const PORT= 8080;

app.use(bodyParser.urlencoded({extended: true})); 

app.use(bodyParser.json({limit: '10mb'}));


app.use(cors({
    origin: '*'
}));

app.use(cors({
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));
// routes 
app.use('/api/v1/',router)


if (process.env.NODE_ENV !== 'test') {
    app.listen(PORT, () => {  console.log("Running on port :",PORT)});
}

module.exports = app;
