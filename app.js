const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const gameRoutes = require('./routes/games');
app.use('/games', gameRoutes);

//Połączenie z MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.get('/', (req, res) => {
    res.send('Welcome to My Games Repository');
});

//Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});