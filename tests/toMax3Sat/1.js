
const u = require("wlj-utilities");

const toMax3Sat = require("../../library/toMax3Sat.js");
const index = require("../../index.js");

u.scope(__filename, x => {
    let actual = toMax3Sat([[1, 2, 3, 4]]);
    u.assertIsEqualJson(() => actual, [
        [-5, 3, 4],
        [-3, 4, 5],
        [-4, 3, 5],
        [-4, -3, 5],
        [5, 1, 2]
    ]);
});
