
const u = require("wlj-utilities");

const toGraphMaxDegree3SingleVertex = require("../../library/toGraphMaxDegree3SingleVertex.js");

u.scope(__filename, x => {
    u.assertIsEqualJson(() => toGraphMaxDegree3SingleVertex([[1,2],[1,3],[1,4],[1,5]], 1), [[2,6],[3,6],[6,7],[4,7],[3,7]]);
    u.assertIsEqualJson(() => toGraphMaxDegree3SingleVertex([[1,2],[1,3],[1,4],[1,5],[1,6]], 1), [[2,7],[3,7],[7,8],[4,8],[8,9],[5,9],[4,9]]);
});
