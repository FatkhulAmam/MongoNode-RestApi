const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan');
const cors = require('cors');

require('dotenv/config')
const {APP_PORT, DB_CONNECTION} = process.env

app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(cors());

// import routing
const makananRoute = require('./src/routes/makananRoute')

app.use('/makanan', makananRoute)

// routing check
app.get('/', (req, res) => {
    res.send({
      success: true,
      message: 'Maos News running well',
    });
})

// connection to db
mongoose.connect(DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection

db.on('error', console.error.bind(console, 'Database Connection ERROR!!'))
db.once('open', () => {
    console.log('Database Connected');
})

// listen port
app.listen(APP_PORT, () => {
    console.log(`Server running on port ${APP_PORT}`);
})