
const u = require("wlj-utilities");
const getLargestSatVariable = require("./getLargestSatVariable");

module.exports = toMin3Sat;

function toMin3Sat(clauses) {
    let result;
    u.scope(toMin3Sat.name, x => {
        result = [];
        let max = getLargestSatVariable(clauses);
        let max1 = max + 1;
        let max2 = max + 2;
        u.loop(clauses, c => {
            if (c.length === 1) {
                result.push([c[0], max1, max2]);
                result.push([c[0], max1, -max2]);
                result.push([c[0], -max1, max2]);
                result.push([c[0], -max1, -max2]);
            } else if (c.length === 2) {
                result.push([c[0], c[1], max1]);
                result.push([c[0], c[1], -max1]);
            } else {
                result.push(c);
            }
        });
    });
    return result;
}
