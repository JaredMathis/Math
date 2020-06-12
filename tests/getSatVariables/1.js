
const u = require("wlj-utilities");

const getSatVariables = require("../../library/getSatVariables.js");
const index = require("../../index.js");

u.scope(__filename, x => {
    let s = [[3],[1,2],[1,2,3]]
    let v = getSatVariables(s);
    u.assertIsEqualJson(() => v, () => [1,2,3]);
});
