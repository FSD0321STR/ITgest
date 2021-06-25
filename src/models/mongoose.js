require('dotenv').config();
const mongoose = require('mongoose');


mongoose.connect(`mongodb+srv://dbITgestion:${process.env.MONGODB_PASSWORD}@cluster0.seyh6.mongodb.net/ITgest?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true });
