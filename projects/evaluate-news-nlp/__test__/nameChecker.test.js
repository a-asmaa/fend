// Import the js file to test
import { checkForName } from "../src/client/js/nameChecker"

// The describe() & test() function takes two arguments - a string description, and a test suite as a callback function.  
describe("Testing the nameChecker functionality", () => {
    test("Testing the checkForName() function", () => {

        expect(checkForName).toBeDefined();
})

test("Testing the checkForName() function", () => {

    const input = "";
    
    expect(checkForName(input)).toBeFalsy(); // matcher
    /**
     * another syntax 
     * const output = false;
     * expect(checkForName(input)).toEqual(output);
     */

})
})