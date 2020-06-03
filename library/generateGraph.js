
const u = require("wlj-utilities");
const random = require("./random");
const isGraph = require("./isGraph");

module.exports = generateGraph;

function generateGraph(verticesCount) {
    let result;
    u.scope(generateGraph.name, x => {
        let log = false;

        u.assert(() => u.isInteger(verticesCount));
        u.assert(() => verticesCount >= 2);

        result = [];

        let vertices = u.range(verticesCount);
        u.loop(vertices, v => {
            u.loop(vertices, w => {
                if (v >= w) {
                    return;
                }
                let edge = [v, w];
                let addEdge = random(0, 1) === 0;
                if (addEdge) {
                    result.push(edge);
                }
            })
        })
    });

    return result;
}
