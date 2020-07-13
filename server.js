const express = require('express');
const socket = require('socket.io');
const connectDB = require('./config/db');
const userRoutes = require('./routes/user.routes');
const authRoutes = require('./routes/auth.routes');
const chatRoutes = require('./routes/chat.routes');

const app = express();

// Connect to database
connectDB();

app.use(express.json({ extended: false }));

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/chat', chatRoutes);

const PORT = process.env.PORT || 5000;

const exressServer = app.listen(PORT, () => console.log(`Server started on port: ${PORT}`)); 

const io = socket(exressServer);

io.on('connection', socket => {
  socket.on('online', (name) => {
    console.log(`${name} is joined!`)
  });

  socket.on('joinChat', ({ email, chat }) => {
    socket.join(chat);
  });

  socket.on('message', ({ user, message, chat}) => {
    io.to(chat).emit('message', { user, message, chat });
  });
})