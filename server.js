// imported modules
const express = require("express");
const cors = require('cors');
const app = express();
require('./server/config/mongoose.config');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./server/routes/plant.routes')(app);

// 3. server port connection
const PORT = 8000;
app.listen(PORT, () => {
    console.log("You are listening at port: 8000");
})