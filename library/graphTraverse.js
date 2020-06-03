
const u = require("wlj-utilities");
const isGraph = require("./isGraph");
const getGraphNeighbors = require("./getGraphNeighbors")
const getGraphVertices = require("./getGraphVertices");
const graphTreeTraverse = require("./graphTreeTraverse");

module.exports = graphTraverse;

function graphTraverse(graph) {
    let result;
    u.scope(graphTraverse.name, x => {
        let log = false;
        if (log) console.log(graphTraverse.name + " entered");
        u.merge(x, { graph });
        u.assert(() => isGraph(graph));

        let vertices = getGraphVertices(graph);

        let current = vertices[0];
        result = [current];

        u.loop(u.range(vertices.length * vertices.length), i => {
            let tree = graphTreeTraverse(graph, current);
            u.loop(tree, t => {
                if (result.includes(t)) {
                    return;
                }
                result.push(t);
            });
            // Exit early if possible
            if (u.arraySequenceEquals(result, vertices)) {
                return true;
            }
        });

        result.sort((a, b) => a - b);

        u.assertIsEqualJson(result, vertices);
    });
    return result;
}
