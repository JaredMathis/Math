
const u = require("wlj-utilities");
const tryAdd4Clause = require("./tryAdd4Clause");

module.exports = to4Sat;

function to4Sat(clauses) {
    let result;
    u.scope(to4Sat.name, x => {
        result = [];
        u.loop(clauses, c => {
            d(result, 1, 2, 3, c);
            d(result, 1, 3, 2, c);
            d(result, 2, 1, 3, c);
            d(result, 2, 3, 1, c);
            d(result, 3, 1, 2, c);
            d(result, 3, 2, 1, c);
        })
    });
    return result;
}

function d(result, l1, l2, l3, c) {
    tryAdd4Clause(result, a(c[l1 - 1], c[l2 - 1], c[l3 - 1]));
    tryAdd4Clause(result, b(c[l1 - 1], c[l2 - 1], c[l3 - 1]));
}

/**
 * (!b => !a) => (!b => c)
 * @param {*} l1 
 * @param {*} l2 
 * @param {*} l3 
 */
function a(l1, l2, l3) {
    return [[-l2, -l1], [-l2, l3]];
}

/**
 * (!c => !a) => (!b => c)
 * @param {*} l1 
 * @param {*} l2 
 * @param {*} l3 
 */
function b(l1, l2, l3) {
    return [[-l3, -l1], [-l2, l3]];
}