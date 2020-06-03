
const u = require("wlj-utilities");
const isGraph = require("./isGraph");
const graphEdgeExists = require("./graphEdgeExists");

module.exports = tryAddGraphEdge;

/**
 * Adds an edge if it's valid and doesn't already exist.
 */
function tryAddGraphEdge(graph, a, b) {
    let result;
    u.scope(tryAddGraphEdge.name, x => {
        u.assert(() => isGraph(graph));

        result = true;

        let edge = [a,b];
        edge.sort((a, b) => a - b);
        if (graphEdgeExists(graph, edge)) {
            result = false;
            return;
        }

        if (result) {
            graph.push(edge);
        }
        u.assert(() => isGraph(graph));
    });
    return result;
}
