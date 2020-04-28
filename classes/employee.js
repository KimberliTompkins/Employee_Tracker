class Employee {
    constructor(fname,lname,role,manager,action) {
      this.fname = fname;
      this.lname = lname;
      this.role = role;
      this.manager = manager;
      this.action = action;
    }

    create(){};
    update(){};
    delete(){};
    getEmployee(){
        //return query
    }
  }
  module.exports = Employee;
  