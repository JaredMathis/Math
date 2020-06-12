
const u = require("wlj-utilities");

const tryAddSatClause = require("../../library/tryAddSatClause.js");
const index = require("../../index.js");

u.scope(__filename, x => {

    let s = [[1,2,3]];
    let actual = tryAddSatClause(s, [1,2,3]);
    u.assert(() => actual === false);
    u.assert(() => s.length === 1);
});
