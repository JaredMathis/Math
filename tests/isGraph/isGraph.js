
const u = require("wlj-utilities");

const isGraph = require("../../library/isGraph.js");

u.scope(__filename, x => {
    // Must be an array.
    u.assertIsEqual(() => isGraph(undefined), false);
    // Must contain an edge.
    u.assertIsEqual(() => isGraph([]), false);
    // An integer is not an edge.
    u.assertIsEqual(() => isGraph([1]), false);
    // Edges must contain two vertices
    u.assertIsEqual(() => isGraph([[1]]), false);
    u.assertIsEqual(() => isGraph([[1,2,3]]), false);
    // The second must be bigger than the first.
    u.assertIsEqual(() => isGraph([[1,0]]), false);
    // Valid
    u.assertIsEqual(() => isGraph([[1,2]]), true);
    // Must contain integers
    u.assertIsEqual(() => isGraph([[1,'2']]), false);
    // Cannot contain self-edges
    u.assertIsEqual(() => isGraph([[1,1]]), false);
    // Multiple edges allowed
    u.assertIsEqual(() => isGraph([[1,2],[2,3]]), true);
    // The same edge cannot be repeated twice
    u.assertIsEqual(() => isGraph([[1,2],[1,2]]), true);

});
