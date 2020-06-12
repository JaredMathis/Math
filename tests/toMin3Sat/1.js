
const u = require("wlj-utilities");

const toMin3Sat = require("../../library/toMin3Sat.js");
const index = require("../../index.js");

u.scope(__filename, x => {
    let log = false;
    let s = [[1], [2, 3]];
    let actual = toMin3Sat(s);
    if (log) {
        console.log(__filename);
        console.log({ actual });
    }
    u.assert(() => actual, [
        [1, 4, 5],
        [1, 4, -5],
        [1, -4, 5],
        [1, -4, -5],
        [2, 3, 4],
        [2, 3, -4]
    ]);
});
