
const u = require("wlj-utilities");

const grow4Sat = require("../../library/grow4Sat.js");
const index = require("../../index.js");

u.scope(__filename, x => {
    let s = [[[1, 2], [3, 4]], [[3, 4], [5, 6]]];
    grow4Sat(s);
    u.assert(() => s.length === 3);
});
