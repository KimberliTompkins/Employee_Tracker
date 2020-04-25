const mysql = require("mysql");
const inquirer = require("inquirer");

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