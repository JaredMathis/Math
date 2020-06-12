
const u = require("wlj-utilities");

module.exports = getSatVariables;

function getSatVariables(clauses) {
    let result;
    u.scope(getSatVariables.name, x => {
        result = []
        u.loop(clauses, c => {
            u.loop(c, l => {
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
