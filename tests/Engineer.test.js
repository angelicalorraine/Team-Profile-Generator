const Engineer = require("../lib/Engineer");

describe("Engineer class", () => {

    describe("getGitHub method", () => {
        it("gets the Engineer's GitHub username", () => {
            const engineer = new Engineer("Angelica", 143, "gel.lorraine@gmail.com", "angelicalorraine");
            engineer.getGithub();
            expect(engineer.getGithub()).toBe("angelicalorraine");
        });
    });

    describe("getRole", () => {
        it("returns Employee role", () => {
            expect(new Engineer().getRole()).toBe("Engineer");
        })
    });

});