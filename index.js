const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

const adRoutes = require('./routes/ads');
app.use('/api/ads', adRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));