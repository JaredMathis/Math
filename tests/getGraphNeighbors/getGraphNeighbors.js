
const u = require("wlj-utilities");

const getGraphNeighbors = require("../../library/getGraphNeighbors.js");

u.scope(__filename, x => {
    u.assertIsEqualJson(
        () => getGraphNeighbors([[1,3],[0,1],[0,2]], 1),
        () => [0,3]
    );
    u.assertIsEqualJson(
        () => getGraphNeighbors([[1,2],[2,3],[4,5]], 1),
        () => [2]
    );
    u.assertIsEqualJson(
        () => getGraphNeighbors([[1,2],[2,3],[4,5]], 2),
        () => [1,3]
    );
    u.assertIsEqualJson(
        () => getGraphNeighbors([[1,2],[2,3],[4,5]], 3),
        () => [2]
    );
    u.assertIsEqualJson(
        () => getGraphNeighbors([[1,2],[2,3],[4,5]], 4),
        () => [5]
    );
    u.assertIsEqualJson(
        () => getGraphNeighbors([[1,2],[2,3],[4,5]], 5),
        () => [4]
    );
});
