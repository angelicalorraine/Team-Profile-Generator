const Manager = require("../lib/Manager");

describe("Manager class", () => {

    describe("Manager school method", () => {
        it("gets the Managers office number", () => {
            const manager = new Manager("Angelica", 143, "gel.lorraine@gmail.com", 900);
            manager.getOfficeNumber();
            expect(manager.getOfficeNumber()).toBe(900);
        });
    });

    describe("getRole", () => {
        it("returns Manager role", () => {
            expect(new Manager().getRole()).toBe("Manager");
        })
    });

});

