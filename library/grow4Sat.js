
const u = require("wlj-utilities");
const tryAdd4SatClause = require("./tryAdd4SatClause");

module.exports = grow4Sat;

function grow4Sat(sat4) {
    let result;
    u.scope(grow4Sat.name, x => {
        let log = false;
        let i = 0;
        while (i < sat4.length) {
            let c = sat4[i];
            let j = 0;
            while (j < i) {
                let d = sat4[j];
                if (log) console.log({ i, j, c, d });
                if (u.arraySequenceEquals(c[1], d[0])) {
                    let newClause = [c[0], d[1]];
                    tryAdd4SatClause(sat4, newClause)
                } else if (u.arraySequenceEquals(d[1], c[0])) {
                    let newClause = [d[0], c[1]];
                    tryAdd4SatClause(sat4, newClause)
                }
                j++;
            }
            i++;
        }
    });
    return result;
}
