
const u = require("wlj-utilities");

const random = require("../../library/random.js");

u.scope(__filename, x => {
    u.loop(u.range(5, 2), max => {
        u.merge(x,{max});
        let counts = {};
        u.loop(u.range(1000), i => {
            let value = random(1,max);
            if (!counts.hasOwnProperty(value)) {
                counts[value] = 0;
            }
            counts[value]++;
        });
        u.merge(x,{counts});
        let keys = Object.keys(counts);
        u.merge(x,{keys});
        u.assert(x => keys.length === max);
        u.loop(u.range(max - 1, 1), i => {
            u.assert(x => keys.includes(i + ""));
        });
    });
});
