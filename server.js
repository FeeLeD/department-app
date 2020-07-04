const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/user.routes');
const authRoutes = require('./routes/auth.routes');

const app = express();

// Connect to database
connectDB();

app.use(express.json({ extended: false }));

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`)); 