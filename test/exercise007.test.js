import { createRange, getScreentimeAlertList, sumDigits } from "../challenges/exercise007";

describe("sumDigits", () => {

    test("return sum of all given number", () => {
        const input = 12345;
        const results = sumDigits(input);
        const expectedOutput = 15;
        expect(results).toBe(expectedOutput);
    });

    test("return sum of all given number containing 0", () => {
        const input = 1230;
        const results = sumDigits(input);
        const expectedOutput = 6;
        expect(results).toBe(expectedOutput);
    });
});


describe("createRange", () => {

    test("return created range if start = 3, end = 8 and step not provided", () => {
        const results = createRange(3, 8);
        const expectedOutput = [3, 4, 5, 6, 7, 8];
        expect(results).toEqual(expectedOutput);
    });

    test("return created range if start = 3, end = 11 and step = 2", () => {
        const results = createRange(3, 11, 2);
        const expectedOutput = [3, 5, 7, 9, 11];
        expect(results).toEqual(expectedOutput);
    });

    test("return created range if start = 4, end = 50 and step = 5", () => {
        const results = createRange(4, 50, 5);
        const expectedOutput = [
            4, 9, 14, 19, 24,
            29, 34, 39, 44, 49
        ];
        expect(results).toEqual(expectedOutput);
    });
});

describe("getScreentimeAlertList", () => {
    const usersData = [
        {
            username: "beth_1234",
            name: "Beth Smith",
            screenTime: [
                { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
                { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
                { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
                { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
            ]
        },
        {
            username: "sam_j_1989",
            name: "Sam Jones",
            screenTime: [
                { date: "2019-05-04", usage: { mapMyRun: 10, whatsApp: 50, facebook: 20, safari: 5 } },
                { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 } },
                { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
                { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 } },
            ]
        },
    ]
    test("return array of usernames of users who have used more than 100 minutes of screentime for a given date", () => {
        const inputDate = '2019-05-04'
        const results = getScreentimeAlertList(usersData, inputDate);
        const expectedOutput = ["beth_1234"];
        expect(results).toEqual(expectedOutput);
    });

    test("return empty array if no users  have used more than 100 minutes of screentime for a given date", () => {
        const inputDate = '2019-05-03'
        const results = getScreentimeAlertList(usersData, inputDate);
        const expectedOutput = [];
        expect(results).toEqual(expectedOutput);
    });


});

