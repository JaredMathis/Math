
const u = require("wlj-utilities");

module.exports = parseSat;

function parseSat(s) {
    let result;
    u.scope(parseSat.name, x => {
        result = []
        let lines = s.split(u.EOL);
        u.loop(lines, l => {
            if (l.startsWith("c")) {
                return
            }
            if (l.startsWith("p")) {
                return
            }
            let numbers = l.split(" ").map(v => parseInt(v, 10));
            clause = numbers.filter(n => u.isInteger(n) && n !== 0);
            if (clause.length > 0) {
                result.push(clause);
            }
        })
        
    });
    return result;
}
