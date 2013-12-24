describe("A suite", function() {
    it("contains spec with an expectation", function() {
        expect(true).toBe(true);
    });
    it("Add working", function(){
        expect(add(3,5)).toBe(8);
    })
});
