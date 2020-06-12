
const u = require("wlj-utilities");
const toMin3Sat = require("./toMin3Sat");
const toMax3Sat = require("./toMax3Sat");
const to4Sat = require("./to4Sat");
const grow4Sat = require("./grow4Sat");
const solve4Sat = require("./solve4Sat");

module.exports = solveSat;

function solveSat(sat) {
    let result;
    u.scope(solveSat.name, x => {
        let sat3Min = toMin3Sat(sat);
        let sat3 = toMax3Sat(sat3Min);
        let sat4 = to4Sat(sat3);
        grow4Sat(sat4);
        result = solve4Sat(sat4);
    });
    return result;
}
