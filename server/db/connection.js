const mongoose = require('mongoose');

// Directly use the connection string
const dbURI = "mongodb+srv://rishidongre519:1WtpxaNS7xsrAs0v@cluster0.zx7yc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connection = mongoose.connect(dbURI)
.then(db => {
    console.log("Database is connected");
    return db;
})
.catch(err => {
    console.log("Connection Error", err);
});

module.exports = connection;
