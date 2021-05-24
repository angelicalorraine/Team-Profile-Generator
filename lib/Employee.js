

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        this.name = response.employeeName;
    };
    getId() {
        this.id = response.employeeID;
    };
    getEmail() {
        this.email = response.employeeEmail;
    };

    getRole() {
        return 'Employee';
    }

};




module.exports = Employee;