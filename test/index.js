const tester = require("tester")
    , emojer = require("../lib")
    ;

tester.describe("emoji", test => {
    test.it("convert the emoji from input string", () => {
        test.expect(emojer("Hello :world:", "{__EMOJI_NAME__}")).toBe("Hello {world}");
    });
});
