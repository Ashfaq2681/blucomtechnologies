


const express = require('express');
const dotenv = require('dotenv').config();
const dbConnect = require("./database/index");
const {PORT} = require('./config/index');
const router = require('./routes/index');
const errorHandle = require('./middleware/errorHandler');
const cors = require('cors');

const app = express();

const corsOptions = {
  origin: 'http://localhost:5173',
  methods: 'GET, POST, PUT, DELETE, PATCH, HEAD',
  Credentials: true,
}
app.use(cors(corsOptions));

app.use(express.json()); 

app.use(router);

dbConnect();

app.use(errorHandle);

// code
// router.post("/multiStepForm", authController.multiStepForm);

app.listen(PORT, console.log(`express is running on port: ${PORT} ` ));
