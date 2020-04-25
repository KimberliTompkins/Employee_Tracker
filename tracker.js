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

connection.connect((err)=>{
    if (err) throw err;
    console.log(`Connected to Mysql as id ${connection.threadId}`);
    

});