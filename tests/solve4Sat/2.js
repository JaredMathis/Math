
const u = require("wlj-utilities");

const solve4Sat = require("../../library/solve4Sat.js");
const index = require("../../index.js");
const to4Sat = require("../../library/to4Sat.js");
const grow4Sat = require("../../library/grow4Sat.js");

u.scope(__filename, x => {
    let sat3 = [
        [1,2,3],
        [1,2,-3],
        [1,-2,3],
        [1,-2,-3],
        [-1,2,3],
        [-1,2,-3],
        [-1,-2,3],
        //[-1,-2,-3],
    ];

    let sat4 = to4Sat(sat3);
    u.merge(x, () => sat4.length)

    grow4Sat(sat4);
    u.merge(x, () => sat4.length)

    // We have 7 of the 8 clauses that make up a contradiction of 
    // 3 variables, so it's satisfied
    let satisfied = solve4Sat(sat4);
    u.assert(() => satisfied);
});
