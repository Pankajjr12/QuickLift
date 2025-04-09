const mongoose = require('mongoose')

function connectTodb() {
    mongoose.connect(process.env.DB_CONNECT)
        .then(() => {
            console.log('Connected to db');
        })
        .catch((err) => {
            console.error('Error connecting to db:', err);
        });
}


module.exports = connectTodb