import {
    sumMultiples,
    isValidDNA,
    isItPrime,
    getComplementaryDNA,
    createMatrix,
    areWeCovered
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

    test("return the sum of numbers which are a multiple of 3", () => {
        const input = [3, 9, 17, 21];
        const results = sumMultiples(input);
        const expectedOutput = 33;
        expect(results).toBe(expectedOutput);
    });

    test("return the sum of numbers which are a multiple of 5", () => {
        const input = [5, 10, 17, 20];
        const results = sumMultiples(input);
        const expectedOutput = 35;
        expect(results).toBe(expectedOutput);
    });
});

describe("isValidDNA", () => {

    test("return true if string contains valid DNA characters A, C, G, or T", () => {
        const input = "CGATACG";
        const results = isValidDNA(input);
        expect(results).toBe(true);
    });

    test("return false if string contains invalid DNA characters", () => {
        const input = "ACTB";
        const results = isValidDNA(input);
        expect(results).toBe(false);
    });

});

describe("getComplementaryDNA", () => {

    test("return valid complementary base pairs if string contains valid DNA characters A, C, G, or T", () => {
        const input = "ACTG";
        const results = getComplementaryDNA(input);
        const expectedOutput = "TGAC";
        expect(results).toBe(expectedOutput);
    });
});

describe("isItPrime", () => {
    test("return true if given input is prime number", () => {
        const results = isItPrime(7);
        expect(results).toBe(true);
    });
    test("return false if given input is not a prime number", () => {
        const results = isItPrime(12);
        expect(results).toBe(false);
    });

    test("return false if given input is 0", () => {
        const results = isItPrime(0);
        expect(results).toBe(false);
    });

    test("return false if given input is 1", () => {
        const results = isItPrime(1);
        expect(results).toBe(false);
    })
})

describe("createMatrix", () => {
    test("return empty array input array number is 0", () => {
        const results = createMatrix(0, 'foo');
        const expectedOutput = [];
        expect(results).toEqual(expectedOutput)
    })
    test("return correct matrix format for single array", () => {
        const results = createMatrix(1, 'foo');
        const expectedOutput = [['foo']];
        expect(results).toEqual(expectedOutput)
    })
    test("return correct matrix format for multiple array", () => {
        const results = createMatrix(5, 'test');
        const expectedOutput = [
            ['test', 'test', 'test', 'test', 'test'],
            ['test', 'test', 'test', 'test', 'test'],
            ['test', 'test', 'test', 'test', 'test'],
            ['test', 'test', 'test', 'test', 'test'],
            ['test', 'test', 'test', 'test', 'test']
        ]
        expect(results).toEqual(expectedOutput)
    })
})
describe("areWeCovered", () => {
    const staffData = [
        { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
        { name: "Tom", rota: ["Monday", "Tuesday", "Friday"] },
        { name: "David", rota: ["Sunday", "Saturday", "Friday"] },
        { name: "Rick", rota: ["Thursday", "Wednesday", "Friday"] },
        { name: "John", rota: ["Saturday", "Tuesday", "Friday"] },
        { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
    ]
    test("return false if at least 3 staff members are not available for given day", () => {
        const results = areWeCovered(staffData, 'Monday');
        expect(results).toBe(false)
    })
    test("return true if at least 3 staff members are available for given day", () => {
        const results = areWeCovered(staffData, 'Tuesday');
        expect(results).toBe(true)
    })
})
