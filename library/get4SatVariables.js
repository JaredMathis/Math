
const u = require("wlj-utilities");

module.exports = get4SatVariables;

function get4SatVariables(clauses) {
    let result;
    u.scope(get4SatVariables.name, x => {
        result = []
        u.loop(clauses, c => {
            u.loop([c[0][0], c[0][1], c[1][0], c[1][1]], l => {
                let a = Math.abs(l);
                if (result.includes(a)) {
                    return;
                }
                result.push(a);
            });
        })
        result.sort((a, b) => a - b);
    });
    return result;
}
