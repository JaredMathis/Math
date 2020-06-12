
const u = require("wlj-utilities");

const parseSat = require("../../library/parseSat.js");
const index = require("../../index.js");

u.scope(__filename, x => {
    let actual = parseSat(`
    1 2 3 0
    4 5 6 0
    `);
let expected = [[1,2,3],[4,5,6]]
    u.assertIsEqualJson(actual, expected);
});
