
const u = require("wlj-utilities");

const solveSat = require("../../library/solveSat.js");
const index = require("../../index.js");

u.scope(__filename, x => {
    let contradiction = [
        [1,2],
        [1,-2],
        [-1,2],
        [-1,-2],
    ];

    let satisfied = solveSat(contradiction);
    u.assert(() => !satisfied);
});
