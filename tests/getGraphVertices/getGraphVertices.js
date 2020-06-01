
const u = require("wlj-utilities");

const getGraphVertices = require("../../library/getGraphVertices.js");

u.scope(__filename, x => {
    // TODO: Fix broken test
    u.assertIsEqualJson(
        () => getGraphVertices([[1, 2], [2, 3]]),
        [1,2,3]
    );
});
