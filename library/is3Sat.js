
const u = require("wlj-utilities");

module.exports = is3Sat;

function is3Sat(clauses) {
    let result;
    u.scope(is3Sat.name, x => {
        u.assertIsArray(() => clauses);
        result= true;
        u.loop(clauses, c => {
            u.assertIsArray(() => c);
            if (c.length > 3) {
                result = false;
                return true;
            }
        })
    });
    return result;
}
