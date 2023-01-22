import {
    sumMultiples,
    isValidDNA
} from "../challenges/exercise006";

describe("sumMultiples", () => {

    test("return the sum of any numbers which are a multiple of 3 or 5", () => {
        const input = [3, 5, 10, 15, 20, 27];
        const results = sumMultiples(input);
        const expectedOutput = 80;
        expect(results).toBe(expectedOutput);
    });

    test("return the sum of only numbers which are a multiple of 3 or 5", () => {
        const input = [7, 15, 20, 23, 25, 31, 35];
        const results = sumMultiples(input);
        const expectedOutput = 95;
        expect(results).toBe(expectedOutput);
    });

    test("return 0 when numbers are neither a multiple of 3 nor 5", () => {
        const input = [2, 8, 17, 22];
        const results = sumMultiples(input);
        const expectedOutput = 0;
        expect(results).toBe(expectedOutput);
    });
});

describe("isValidDNA", () => {

    test("return true if string contains valid DNA characters A, C, G, or T", () => {
        const input = "CGATACG";
        const results = isValidDNA(input);
        const expectedOutput = true;
        expect(results).toBe(expectedOutput);
    });

    test("return true if string contains valid DNA characters A, C, G, or T", () => {
        const input = "ACTB";
        const results = isValidDNA(input);
        const expectedOutput = false;
        expect(results).toBe(expectedOutput);
    });

});

