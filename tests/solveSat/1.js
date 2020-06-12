
const u = require("wlj-utilities");

const solveSat = require("../../library/solveSat.js");
const index = require("../../index.js");

u.scope(__filename, x => {
    let sat = [
        [1,2,3],
        [1,2,-3],
        [1,-2,3],
        [1,-2,-3],
        [-1,2,3],
        [-1,2,-3],
        [-1,-2,3],
        //[-1,-2,-3],
    ];

    // We have 7 of the 8 clauses that make up a contradiction of 
    // 3 variables, so it's satisfied
    let satisfied = solveSat(sat);
    u.assert(() => satisfied);
});
