
const u = require("wlj-utilities");

const getGraphNeighbors = require("../../library/getGraphNeighbors.js");

u.scope(__filename, x => {
    u.assertIsEqualJson(
        () => getGraphNeighbors([[1, 3], [0, 1], [0, 2]], 1),
        () => [0, 3]
    );
    u.assertIsEqualJson(
        () => getGraphNeighbors([[1, 2], [2, 3], [4, 5]], 1),
        () => [2]
    );
    u.assertIsEqualJson(
        () => getGraphNeighbors([[1, 2], [2, 3], [4, 5]], 2),
        () => [1, 3]
    );
    u.assertIsEqualJson(
        () => getGraphNeighbors([[1, 2], [2, 3], [4, 5]], 3),
        () => [2]
    );
    u.assertIsEqualJson(
        () => getGraphNeighbors([[1, 2], [2, 3], [4, 5]], 4),
        () => [5]
    );
    u.assertIsEqualJson(
        () => getGraphNeighbors([[1, 2], [2, 3], [4, 5]], 5),
        () => [4]
    );
    u.assertIsEqualJson(
        () => getGraphNeighbors([
            [1, 2], [0, 2],
            [2, 3]
        ], 2),
        () => [0, 1, 3]
    );
    u.assertIsEqualJson(
        () => getGraphNeighbors([
            [9, 10], [5, 10],
            [10, 11]
        ], 10),
        () => [5, 9, 11]
    );
    u.assertIsEqualJson(
        () => getGraphNeighbors([
            [5, 6], [7, 8],
            [4, 8], [4, 9],
            [9, 10], [5, 10],
            [10, 11], [6, 11],
            [5, 11], [4, 12],
            [6, 12], [12, 13],
            [7, 13], [13, 14],
            [8, 14], [7, 14]
        ], 10),
        () => [5, 9, 11]
    );
});
