
const u = require("wlj-utilities");

const toGraphMinDegree3 = require("../../library/toGraphMinDegree3.js");

u.scope(__filename, x => {
    let g;
    g = [[1,2],[2,3],[3,4],[4,5]];
    let actual = toGraphMinDegree3(g);
    u.assertIsEqualJson(actual, [[1,2],[2,3],[3,4],[4,5],[1,3],[1,4],[2,4],[2,5],[3,5],[1,5]]);
});
