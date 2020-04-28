const mysql = require("mysql");
const inquirer = require("inquirer");
const consoleTable = require("console.table");
const Employee = require("./classes/Employee");
const Department = require("./classes/Department");
const Role = require("./classes/Role");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "kstomp",
    port: 3306,
    database: "employee_trackerDB"
})
//All CRUD functions will take place in the classes based on the action
 function employeeCRUD(action) {
    // switch (action) {
        // case "Create":
            // inquirer.prompt([
                // {
                // }
            // ])
        // case "Update":
        // case "Delete":
        // default:
    // }



};
function departmentCRUD(action) {
    switch (action) {
        case "Create":
            inquirer.prompt([
                {
                    message: "Department Name?",
                    name: "departmentName"
                }
            ]).then(({ departmentName }) => {
                const dept= new Department(departmentName,connection);
                dept.create(departmentName);
               console.log(`${departmentName} inserted!\n`); 
               getAction();
              

            }  
);
        case "Update":
            const updateDept = new Department("",connection);
            connection.query("select * from department",function(err,results){
                if (err) throw err;
                inquirer.prompt([{
                   name:"choices",
                   type: "rawlist",
                   choices: function(){
                       var choiceArray = [];
                       var allResults = [];
                       for (var i = 0; i <results.length; i++){
                         choiceArray.push(`Name: ${results[i].name} ID:${results[i].id} `);
                       }
                       return choiceArray;
                   },
                   message: "Which department would you like to update?"
                }])
                .then(function (answers){
                    //get the id of the item to delete
                    getID = answers.choices.match(/[^ID:]*$/).toString();
                    inquirer.prompt([{
                        message: "The only field available for update is the department name. What should the name be?",
                        type: "input",
                        name: "newName"

                    }]).then(function (answers){
                    updateDept.update(getID,newName);
                    console.log(`${answers.choices} updated!\n`)
                    getAction();
                    });
                });
            })

        case "Delete":
            const deleteDept = new Department("",connection);
           connection.query("select * from department",function(err,results){
               if (err) throw err;
               inquirer.prompt([{
                  name:"choices",
                  type: "rawlist",
                  choices: function(){
                      var choiceArray = [];
                      var allResults = [];
                      for (var i = 0; i <results.length; i++){
                        choiceArray.push(`Name: ${results[i].name} ID:${results[i].id} `);
                      }
                      return choiceArray;
                  },
                  message: "Which department would you like to delete?"
               }])
               .then(function (answers){
                   //get the id of the item to delete
                   getID = answers.choices.match(/[^ID:]*$/).toString();
                   deleteDept.delete(getID);
                   console.log(`${answers.choices} deleted!\n`)
                   getAction();
               });
           })
        default:
            const viewDept = new Department("",connection);
            const view =viewDept.view()
            getAction();
    }
   
};


 function roleCRUD(action) {
    switch (action) {
        case "Create": //title,salary,department
            inquirer.prompt([
                {
                    name: "department",
                    message: "Department?"

                },
                {
                    name: "title",
                    message: "title?"

                },
                {
                    name: "salary",
                    message: "Salary?"

                }

            ]).then(({ title, department,salary }) => {
                const role = new Role("","","","",connection);
                role.create(title,salary,department,connection); 
                console.log(`Role: ${title} created!\n`); 
                getAction();
            });
        case "Update":

        case "Delete":

        default:

    }

};
// first set of questions
// do different things based on the answers
 function getAction() {
    inquirer.prompt([
        {
            type: "rawlist",
            message: "which group would you like to work with?",
            name: "group",
            choices: ["Employees", "Departments", "Roles", "EXIT"]
        },
        {
            type: "rawlist",
            message: "what would you like do?",
            name: "action",
            choices: ["Create", "Update", "Delete", "View"]
        }

    ]).then(({ group, action }) => {
        // get the group then find out what action to perform on that group.
        switch (group) {
            case "Employees":
                employeeCRUD(action);
            case "Departments":
               departmentCRUD(action);
            case "Roles":
               roleCRUD(action);
            default:
                connection.end();
        }

    });



};

connection.connect((err) => {
    if (err) throw err;
    console.log(`Connected to Mysql as id ${connection.threadId}`);
    getAction();


});