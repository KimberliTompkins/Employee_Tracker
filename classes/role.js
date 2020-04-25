class Role {
    constructor(id,title,salary,department) {
      this.id = id;
      this.title = title;
      this.salary = salary;
      this.department = department;
    }

    create(){};
    update(){};
    delete(){};
    getRole(){
        //return query
    }
  }
  module.exports = Role;
  