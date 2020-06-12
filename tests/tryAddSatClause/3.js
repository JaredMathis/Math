
const u = require("wlj-utilities");

const tryAddSatClause = require("../../library/tryAddSatClause.js");
const index = require("../../index.js");

u.scope(__filename, x => {

    let s = [[1,2,3]];
    // 2 and 3 have been swapped. Order shouldn't matter.
    let actual = tryAddSatClause(s, [1,3,2]);
    u.assert(() => actual === false);
    u.assert(() => s.length === 1);
});
