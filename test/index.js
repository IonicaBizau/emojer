const tester = require("tester")
    , emojer = require("../lib")
    ;

tester.describe("emoji", test => {
    test.it("convert the emoji from input string", () => {
        test.expect(emojer("Hello :world:", "{__EMOJI_NAME__}")).toBe("Hello {world}");
    });
    test.should("not convert :everything:", () => {
        test.expect(emojer("Hello :world: and not :this:", "{__EMOJI_NAME__}", { world: true })).toBe("Hello {world} and not :this:");
    });
});
