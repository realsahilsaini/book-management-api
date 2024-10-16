const express = require('express');
const bodyParser = require('body-parser');
const comicRoutes = require('./routes/comicRoutes'); // Update this line
const connectDB = require('./connectDB');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

connectDB();

app.use('/api/v1/comics', comicRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});