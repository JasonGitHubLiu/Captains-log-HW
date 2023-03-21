require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');

const app = express();
connectDB();
const PORT = 8080;

const logRoutes = require('./routes/logRoutes.js');

const { createEngine } = require('jsx-view-engine');

const methodOverride = require('method-override');

app.set('view engine', 'jsx');

app.engine('jsx', createEngine());

app.use(express.urlencoded({ extended: true }));

app.use(methodOverride('_method'));

app.use(express.static('public'));

app.use((req, res, next) => {
  console.log('inside middleware');
  console.log(`${req.method} ${req.path}`);
  next();
});

// app.use('/', require('./routes/index'))
app.use('/logs', logRoutes);

// // Listen for incoming requests on the specified port
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
