

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName(response) {
        return this.name
    };
    getId(response) {
        return this.id
    };
    getEmail(response) {
        return this.email
    };

    getRole() {
        return 'Employee';
    }

};




module.exports = Employee;