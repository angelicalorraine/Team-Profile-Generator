const Intern = require("../lib/Intern");

describe("Intern class", () => {

    describe("intern school method", () => {
        it("gets the Interns school name", () => {
            const intern = new Intern("Angelica", 143, "gel.lorraine@gmail.com", "UCI");
            intern.getSchool();
            expect(intern.getSchool()).toBe("UCI");
        });
    });

    describe("getRole", () => {
        it("returns Intern role", () => {
            expect(new Intern().getRole()).toBe("Intern");
        })
    });

});