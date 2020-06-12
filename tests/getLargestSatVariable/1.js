
const u = require("wlj-utilities");

const getLargestSatVariable = require("../../library/getLargestSatVariable.js");
const index = require("../../index.js");

u.scope(__filename, x => {
    let clauses = [[1,2,3]];
    u.assert(() => getLargestSatVariable(clauses) === 3);
});
