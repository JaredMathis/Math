
const u = require("wlj-utilities");

const get4SatVariables = require("../../library/get4SatVariables.js");
const index = require("../../index.js");
const to4Sat = require("../../library/to4Sat.js");

u.scope(__filename, x => {
    let sat3 = [
        [1,2,3],
        [1,2,-3],
        [1,-2,3],
        [1,-2,-3],
        [-1,2,3],
        [-1,2,-3],
        [-1,-2,3],
        [-1,-2,-3],
    ];
    let sat4 = to4Sat(sat3);
    u.assertIsEqualJson(() => get4SatVariables(sat4), () => [1,2,3]);
});
