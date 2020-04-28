class Department {
    constructor(name, connection) {
        //this.id = id;
        this.name = name;
        this.connection = connection;

    }

    create(departmentName) {
        return this.connection.query(
            "INSERT INTO department SET ?",
            { name: departmentName },
            function (err, res) {
                if (err) return err;
              
            }
        );

    };


    update() { };

    delete(idNum) {

        
        return this.connection.query(
            "DELETE FROM department WHERE id=?",[idNum],
            function (err, res) {
                if (err) return err;
                 
            }
        );
     };
    view() { 
        return this.connection.query(
            "SELECT * from department",
            function (err, res) {
                if (err) return err;
              console.log(res);
            }
        );
    };
}
module.exports = Department;
