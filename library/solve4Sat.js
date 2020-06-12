
const u = require("wlj-utilities");
const is3Sat = require("./is3Sat");
const to4Sat = require("./to4Sat");
const get4SatVariables = require("./get4SatVariables");

module.exports = solve4Sat;

function solve4Sat(sat4) {
    let result;
    u.scope(solve4Sat.name, x => {
        let variables = get4SatVariables(sat4);
        let candidates = sat4.filter(c => variableCount(c) === 2);

        let contradicts = false;
        let pairs = choose2(variables);
        u.loop(pairs, p => {
            let found = [];
            u.loop(candidates, c=>{
                if (found.length === 4) {
                    return true;
                }
                let r = evaluate(c, p);
                if (r < 0) {
                    return;
                }
                if (found.includes(r)) {
                    return;
                }
                found.push(r);
            })
            if (found.length === 4) {
                contradicts = true;
                return true;
            }
        });

        result = !contradicts;
    });
    return result;
}

function choose2(v) {
    let result = [];
    for (let i = 0; i < v.length; i++) {
        for (let j = i + 1; j < v.length; j++) {
            result.push([i, j]);
        }
    }
    return result;
}

function evaluate(c, variables) {
    let v = get4SatVariables([c]);
    if (!u.arraySequenceEquals(variables, v)) {
        return -1;
    }
    u.assert(() => v.length === 2);
    let solutions = [
        [v[0], v[1]],
        [v[0], -v[1]],
        [-v[0], v[1]],
        [-v[0], -v[1]],
    ];
    let s0 = substitute(c, solutions[0]);
    let s1 = substitute(c, solutions[1]);
    let s2 = substitute(c, solutions[2]);
    let s3 = substitute(c, solutions[3]);

    if (!s0 && s1 && s2 && s3) {
        return 0;
    }
    if (s0 && !s1 && s2 && s3) {
        return 1;
    }
    if (s0 && s1 && !s2 && s3) {
        return 2;
    }
    if (s0 && s1 && s2 && !s3) {
        return 3;
    }
    return -1;
}

function substitute(c, solution) {
    return !implies(c[0][0], c[0][1], solution)
        || implies(c[1][0], c[1][1], solution);
}

function implies(x, y, solution) {
    return solution.includes(-x) || solution.includes(y);
}

function variableCount(c) {
    return get4SatVariables([c]).length;
}