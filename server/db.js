const Pool = require("pg").Pool;

const pool =  new Pool({
    user: "postgres",
    password: "workingATL7!",
    host: "localhost",
    port: 5432,
    database: "plightsout"
});

module.exports = pool;
