
const u = require("wlj-utilities");

const tryAdd4Clause = require("../../library/tryAdd4Clause.js");
const index = require("../../index.js");

u.scope(__filename, x => {
    let s = [[[1,2],[3,4]]];
    u.assert(() => tryAdd4Clause(s, [[1,2],[3,4]]) === false);
    u.assert(() => s.length === 1);
});
