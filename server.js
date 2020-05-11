const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const connectDB = require('./config/db');
const cors = require('cors');

dotenv.config({ path:'./config/config.env' });

connectDB();

const transactions = require('./Routes/transactions');

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api/v1/transactions', transactions)

app.get('/', (req,res) => res.send('Hello'));

const PORT = process.env.port || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));


