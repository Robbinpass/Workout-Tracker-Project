const mysql = require('mysql2');
const inquirer = require('inquirer');

const db = mysql.createConnection(

    {
        host: 'localhost',
        // MySQL username,
        user: 'root',
        // MySQL password
        password: 'Dragonseye3$',
        database: 'workout_db'
    },
    //testing the connection
    console.log(`Connected to the workout_db database.`)
);

db.query("SELECT * FROM people", (err, result) => {
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
        switch (answers.gym) {
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
                name: "First_name"
            },
            {
                type: "input",
                message: "Please enter you last name?",
                name: "Last_name"
            },
            {
                type: "input",
                message: "Please enter you username name?",
                name: "Username"
            },
            {
                type: "input",
                message: "Please enter you password name?",
                name: "Passwords"
            }
        ]).then(answers => {
            //put your answers in the table in department in the group name
            db.query("INSERT INTO people(First_name, Last_name, Username, Passwords) VALUES(?,?,?,?)", [answers.First_name, answers.Last_name, answers.Username, answers.Passwords],(err, results) => {
                        //show the answer in the department // if there an error console it
                        err ? console.error(err) : console.table(results);
            }
            )
            db.query(`SELECT * FROM people`, (err, results) => {
                // if error (? or) console error stop but if success put it in a table format
                err ? console.error(err) : console.table(results);
            
        })
        })
        return null
};
////////////////////////////////////////
const addExercise = () => {
    /////////////////the choices from below put in database from department
    // const deptChoices = () => db.promise().query(`SELECT * FROM people`)
    //     .then((rows) => {
    //         let arrNames = rows[0].map(obj => obj.name);
    //         console.log("ROW :",rows[0])
    //         return arrNames
    //     })
    inquirer
        .prompt([
            {
                type: "list",
                message: "which muscle do you want to workout?",
                name: "Target_Muscles",
                choices: ['Back','Shoulders', 'Legs', 'Chest', 'Arms', 'N/A']
            },
            {
                type: "input",
                message: "How much weight do you want to lift?",
                name: "Lifting_Weight"
            },
            {
                type: "input",
                message: "How many Reps do you want to do?",
                name: "Reps"
            },
            {
                type: "input",
                message: "How many Sets do you want to do?",
                name: "Sets"
            }
        ]).then(answers => {
            //put your answers in the table in department in the group name
            console.log(answers)
            db.query("INSERT INTO exercise(Target_Muscles, Lifting_Weight, Reps, Sets) VALUES(?,?,?,?)", [answers.Target_Muscles, answers.Lifting_Weight, answers.Reps, answers.Sets],(err, results) => {
                        //show the answer in the department // if there an error console it
                        err ? console.error(err) : console.table(results);
            }
            )
            db.query(`SELECT * FROM exercise`, (err, results) => {
                // if error (? or) console error stop but if success put it in a table format
                err ? console.error(err) : console.table(results);
            
        })
        })
        return null
};