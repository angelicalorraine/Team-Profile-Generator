const Employee = require("../lib/Employee");

describe("Employee class", () => {

    describe("Initialization", () => {
        it("Should create object with name,id,email", () => {

            const employee = new Employee("Angelica", 143, "gel.lorraine@gmail.com");
            expect(employee.name).toEqual("Angelica");
            expect(employee.id).toEqual(143);
            expect(employee.email).toEqual("gel.lorraine@gmail.com");

        })
    })

    describe("getName method", () => {
        it("gets the employee's name", () => {
            const name = "Angelica"
            const employee = new Employee(name);
            employee.getName()
            expect(employee.getName()).toBe("Angelica");
        });
    });

    describe("ID method", () => {
        it("Should return employees ID number", () => {
            const id = 143;
            const employee = new Employee("Angelica", id);
            employee.getId()
            expect(employee.getId()).toBe(143);

        })
    })

    describe("email method", () => {
        it("Should return employees email", () => {
            const email = "gel.lorraine@gmail.com"
            const employee = new Employee("Angelica", 143, email);
            employee.getEmail();


            expect(employee.getEmail()).toBe("gel.lorraine@gmail.com");

        });
    });

    describe("getRole", () => {
        it("returns Employee role", () => {
            expect(new Employee().getRole()).toBe("Employee");
        })
    });
});