
const u = require("wlj-utilities");

const isGraphTree = require("../../library/isGraphTree.js");

u.scope(__filename, x => {
    // TODO: Fix broken test
    u.assertIsEqualJson(
        () => isGraphTree([[1,2],[2,3]]),
        true,
    );
    u.assertIsEqualJson(
        () => isGraphTree([[1,2],[2,3],[1,3]]),
        false,
    );
});
