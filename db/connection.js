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

topices();

function topices() {
    inquirer.prompt([
        {
            //the format will be in list
            type: "list",
            //the thing to do
            message: "select options:",
            // the name of the chart below
            name: "gym",
            choices: [
                "new member",
                "exercise"
            ]
        }

    ]).then(answers => {
        switch (answers.company) {
            case "new member":
                viewMember();
                break;
            case "exercise":
                viewExercise();
                break;
                default:
                    process.exit();
            }
        }).catch(err => console.error(err));
    }