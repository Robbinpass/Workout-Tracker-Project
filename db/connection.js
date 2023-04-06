const mysql = require('mysql2');
const inquirer = require('inquirer');

const db = mysql.createConnection(

    {
        host: 'localhost',
        // MySQL username,
        user: 'root',
        // MySQL password
        password: 'Dragonseye3$',
        database: 'PROJECT'
    },
    //testing the connection
    console.log(`Connected to the PROJECT database.`)
);

db.query("SELECT * FROM workout_db", (err, result) => {
    console.log("hello")
})