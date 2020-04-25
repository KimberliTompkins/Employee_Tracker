class Employee {
    constructor(fname,lname,role,manager) {
      this.fname = fname;
      this.lname = lname;
      this.role = role;
      this.manager = manager;
    }

    create(){};
    update(){};
    delete(){};
    getEmployee(){
        //return query
    }
  }
  module.exports = Employee;
  