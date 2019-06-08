const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// starting app
const app = express();
app.use(express.json());
app.use(cors());

// starting DB
mongoose.connect('mongodb://localhost:27017/nodeapi', {
    useNewUrlParser: true, 
    useFindAndModify: false
});

require('./src/model/Product');

app.use('/api', require('./src/routes'));

app.listen(3000);