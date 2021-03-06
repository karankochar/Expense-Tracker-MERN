const path = require('path');
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

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
}

//abc
const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));


