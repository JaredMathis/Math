
const u = require("wlj-utilities");

const solveSat = require("../../library/solveSat.js");
const index = require("../../index.js");
const parseSat = require("../../library/parseSat.js");

u.scope(__filename, x => {
    console.log(__filename + " entered");
    let sat = parseSat(`
p cnf 14 40
c Factors encoded in variables 1-2 and 3-4
c Target number: 4
2 0
4 0
-5 0
6 0
-11 8 9 0
-11 -8 -9 0
11 8 -9 0
11 -8 9 0
-8 -9 12 0
8 9 -12 0
8 -12 0
9 -12 0
-13 10 12 0
-13 -10 -12 0
13 10 -12 0
13 -10 12 0
-10 -12 14 0
10 12 -14 0
10 -14 0
12 -14 0
7 -1 -3 0
-7 1 0
-7 3 0
8 -2 -3 0
-8 2 0
-8 3 0
9 -1 -4 0
-9 1 0
-9 4 0
10 -2 -4 0
-10 2 0
-10 4 0
7 -5 0
-7 5 0
11 -5 0
-11 5 0
13 -6 0
-13 6 0
14 -5 0
-14 5 0
    `)

    // 4 = 2 * 2 so satisfied
    let satisfied = solveSat(sat);
    u.assert(() => satisfied);
});
