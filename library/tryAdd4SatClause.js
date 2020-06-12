
const u = require("wlj-utilities");

module.exports = tryAdd4Clause;

function tryAdd4Clause(clauses, c) {
    let result;
    u.scope(tryAdd4Clause.name, x => {
        let log = false;
        if (log) console.log(tryAdd4Clause.name + ' entered',JSON.stringify({clauses, c}))
        let exists = false;
        u.loop(clauses, d => {
            if (c[0][0] === d[0][0]
                && c[0][1] === d[0][1]
                && c[1][1] === d[1][1]
                && c[1][0] === d[1][0]) {
                exists = true;
                return true;
            }
        })
        if (exists) {
            result = false;
        } else {
            clauses.push(c);
            result = true;
        }
        if (log) console.log(JSON.stringify({exists, result, clauses}))
    });
    return result;
}
