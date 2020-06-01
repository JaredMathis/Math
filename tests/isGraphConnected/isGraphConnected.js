
const u = require("wlj-utilities");

const isGraphConnected = require("../../library/isGraphConnected.js");

u.scope(__filename, x => {
    u.assertIsEqualJson(
        () => isGraphConnected([[1,2],[3,4]]),
        false,
    );
    u.assertIsEqualJson(
        () => isGraphConnected([[1,2],[2,3],[3,4]]),
        true,
    );
    u.assertIsEqualJson(
        () => isGraphConnected([[1,2],[2,3],[1,3],[3,4]]),
        true,
    );
    u.assertIsEqualJson(
        () => isGraphConnected([[1,2],[2,3],[4,5],[5,6]]),
        false,
    );
});
