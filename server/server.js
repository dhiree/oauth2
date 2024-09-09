const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const pagesRoutes = require('./routes/pagesRoutes');
const insightsRoutes = require('./routes/insightsRoutes');

require('dotenv').config();

const app = express();

connectDB();

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/pages', pagesRoutes);
app.use('/api/insights', insightsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));