class Role {
    constructor(id,title,salary,department,action) {
      this.id = id;
      this.title = title;
      this.salary = salary;
      this.department = department;
      this.action = action;
    }

    create(){};
    update(){};
    delete(){};
    getRole(){
        //return query
    }
  }
  module.exports = Role;
  