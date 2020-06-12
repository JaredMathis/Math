
const u = require("wlj-utilities");

const is3Sat = require("../../library/is3Sat.js");
const index = require("../../index.js");

u.scope(__filename, x => {
    u.assert(() => is3Sat([[1,2,3]]) === true)
    u.assert(() => is3Sat([[1,2,3],[1,2,3,4]]) === false)
});
