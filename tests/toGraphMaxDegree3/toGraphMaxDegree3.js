
const u = require("wlj-utilities");

const toGraphMaxDegree3 = require("../../library/toGraphMaxDegree3.js");

u.scope(__filename, x => {
    // TODO: Fix broken test
    u.assertIsEqualJson(
        () => toGraphMaxDegree3([[1, 2], [1, 3], [1, 4], [1, 5], [1, 6], [2, 3], [2, 4], [2, 5]]),
        [[3,7],[7,8],[4,8],[3,8],[3,9],[4,9],[9,10],[5,10],[10,11],[6,11],[5,11]]);
});
