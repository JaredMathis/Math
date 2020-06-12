
const u = require("wlj-utilities");

const to4Sat = require("../../library/to4Sat.js");
const index = require("../../index.js");

u.scope(__filename, x => {
    let log = false;
    let s = to4Sat([[-1,-2,-3]]);
    if (log) console.log(s);
    u.assertIsEqualJson(() => s, [
        [ [ 2, 1 ], [ 2, -3 ] ],
        [ [ 3, 1 ], [ 2, -3 ] ],
        [ [ 3, 1 ], [ 3, -2 ] ],
        [ [ 2, 1 ], [ 3, -2 ] ],
        [ [ 1, 2 ], [ 1, -3 ] ],
        [ [ 3, 2 ], [ 1, -3 ] ],
        [ [ 3, 2 ], [ 3, -1 ] ],
        [ [ 1, 2 ], [ 3, -1 ] ],
        [ [ 1, 3 ], [ 1, -2 ] ],
        [ [ 2, 3 ], [ 1, -2 ] ],
        [ [ 2, 3 ], [ 2, -1 ] ],
        [ [ 1, 3 ], [ 2, -1 ] ]
      ])
});
