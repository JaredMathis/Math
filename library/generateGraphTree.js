
const u = require("wlj-utilities");
const random = require("./random");
const isGraph = require("./isGraph");

module.exports = generateGraphTree;

function generateGraphTree(verticesCount) {
    let result;
    u.scope(generateGraphTree.name, x => {
        let log = false;

        u.assert(() => u.isInteger(verticesCount));
        u.assert(() => verticesCount >= 2);

        result = [];

        const remaining = u.range(verticesCount);
        let processed = [remaining.pop()];
        while (remaining.length >= 1) {
            let rIndex = random(0, remaining.length - 1);
            let r = remaining[rIndex];
            if (log) console.log({'remaining.length':remaining.length,rIndex});

            let pIndex = random(0, processed.length - 1);
            let p = processed[pIndex];
            if (log) console.log({'processed.length':processed.length,pIndex});

            let edge = [p, r];
            edge.sort();
            result.push(edge);

            remaining.splice(rIndex, 1);
            processed.push(r);

            u.merge(x, { result, p, r, pIndex, rIndex, edge, remaining, processed });
            u.assert(() => isGraph(result));
        }
    });

    return result;
}
