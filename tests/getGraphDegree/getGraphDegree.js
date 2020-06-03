
const u = require("wlj-utilities");

const getGraphDegree = require("../../library/getGraphDegree.js");

u.scope(__filename, x => {
    u.assertIsEqualJson(() => getGraphDegree([[1,2],[2,3]],1), 1);
    u.assertIsEqualJson(() => getGraphDegree([[1,2],[2,3]],2), 2);
    u.assertIsEqualJson(() => getGraphDegree([[1,2],[2,3]],3), 1);
    u.assertIsEqualJson(() => getGraphDegree([[1,2],[2,3],[2,4]],2), 3);
    u.assertIsEqualJson(() => getGraphDegree([[1,2],[2,3],[2,4],[1,4]],1), 2);
});
