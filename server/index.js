const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//MIDDLEWARE//
app.use(cors());
app.use(express.json());

//ROUTES//



//LISTENER//
app.listen(5000, () => {
    console.log("The server as started on port 5000")
});
