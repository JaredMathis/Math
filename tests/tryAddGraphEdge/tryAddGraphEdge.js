
const u = require("wlj-utilities");

const tryAddGraphEdge = require("../../library/tryAddGraphEdge.js");

u.scope(__filename, x => {
    u.assertIsEqualJson(() => tryAddGraphEdge([[1,2]], 1, 2), false);
    u.assertIsEqualJson(() => tryAddGraphEdge([[1,2]], 2, 1), false);
    let g;
    g = [[1,2]];
    u.assertIsEqualJson(() => tryAddGraphEdge(g, 1, 3), true);
    u.assertIsEqualJson(() => g, [[1,2],[1,3]]);
});
