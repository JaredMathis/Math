
const u = require("wlj-utilities");

module.exports = tryAddSatClause;

function tryAddSatClause(clauses, c) {
    let result;
    u.scope(tryAddSatClause.name, x => {
        c.sort((a,b)=>a-b);
        let exists=false;
        u.loop(clauses, d => {
            d.sort((a,b)=>a-b);
            if (u.arraySequenceEquals(c,d)) {
                exists = true;
                return true;
            }
        })
        if (!exists) {
            clauses.push(c);
        }
        result = !exists;
    });
    return result;
}
