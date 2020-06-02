
const u = require("wlj-utilities");

const graphEdgeExists = require("../../library/graphEdgeExists.js");

u.scope(__filename, x => {
    u.assert(() => graphEdgeExists([[1,2]],[1,2]) === true);
    u.assert(() => graphEdgeExists([[1,2]],[1,3]) === false);
});
