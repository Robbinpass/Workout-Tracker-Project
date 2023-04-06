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
                "exercise",
                "add member",
                "add exercise"
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
            case "add member":
                addMember();
                break;
            case "add exercise":
                addExercise();
                break;
            default:
                process.exit();
        }
    }).catch(err => console.error(err));
}

const viewMember = () => {
    //goes to the database and select (* all) from the department table
    db.query(`SELECT * FROM people`, (err, results) => {
        // if error (? or) console error stop but if success put it in a table format
        err ? console.error(err) : console.table(results);
    })
    return null
};

const viewExercise = () => {
    //goes to the database and select (* all) from the roles table
    db.query(`SELECT * FROM exercise`, (err, results) => {
        // if error (? or) console error stop but if success put it in a table format
        err ? console.error(err) : console.table(results);
    })
    return null
};

const addMember = () => {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Please enter you first name?",
                name: "addMember"
            },
            {
                type: "input",
                message: "Please enter you last name?",
                name: "addMember"
            },
            {
                type: "input",
                message: "Please enter you username name?",
                name: "addMember"
            },
            {
                type: "input",
                message: "Please enter you password name?",
                name: "addMember"
            }
        ]).then(answers => {
            //put your answers in the table in department in the group name
            db.query(`INSERT INTO people(name)
                    VALUES(?)`, answers.addMember, (err, results) => {
                        //show the answer in the department // if there an error console it
                if (err) {
                    console.log(err)
                } else {
                    //goes to the database and select (* all) from the department table
                    db.query(`SELECT * FROM people`, (err, results) => {
                        // if error (? or) console error stop but if success put it in a table format
                        err ? console.error(err) : console.table(results);

                    })
                }
            }
            )
        })
        return null
};