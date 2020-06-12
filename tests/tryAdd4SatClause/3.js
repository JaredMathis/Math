
const u = require("wlj-utilities");

const tryAdd4SatClause = require("../../library/tryAdd4SatClause.js");
const index = require("../../index.js");

u.scope(__filename, x => {
    let s = [[[1,2],[3,4]]];
    let actual = tryAdd4SatClause(s, [[1,5],[3,4]]);
    u.assert(() => actual === true);
    u.assert(() => s.length === 2);
});
