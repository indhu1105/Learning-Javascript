//ANSWER
// The test demonstrates one of the temptations a developer meets when writing tests.

// What we have here is actually 3 tests, but layed out as a single function with 3 asserts.

// Sometimes it’s easier to write this way, but if an error occurs, it’s much less obvious what went wrong.

// If an error happens in the middle of a complex execution flow, then we’ll have to figure out the data at that point. We’ll actually have to debug the test.

// It would be much better to break the test into multiple it blocks with clearly written inputs and outputs.
describe("pow",function() {
    let x = 5;
    // One test checks one thing
 
    it(`Raises ${x} in the power 3`, function() {
        assert.equal(pow(x, 1), 5);
    });
    it(`Raises ${x} in the power 3`, function() {
        assert.equal(pow(x, 2), 25);
    });
     // Mocha will run only this block
    it.only(`Raises ${x} in the power 3`, function() {
        assert.equal(pow(x, 3), 125);
    });

});
