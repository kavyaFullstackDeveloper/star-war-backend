const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://kavyawhy:v0NHKHRdpKMsPr9U@cluster0.ienx7ub.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5005;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

//v0NHKHRdpKMsPr9U
//mongodb+srv://kavyawhy:v0NHKHRdpKMsPr9U@cluster0.ienx7ub.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0