// imported modules
const express = require("express");

// middleware
const app = express();

// server port connection
const PORT = 8000;
app.listen(PORT, () => {
    console.log("You are listening at port: 8000");
})