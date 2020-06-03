
const u = require("wlj-utilities");
const isGraph = require("./isGraph");

module.exports = graphEdgeExists;

function graphEdgeExists(graph, edge) {
    let result;
    u.scope(graphEdgeExists.name, x => {
        u.assert(() => isGraph(graph));
        u.assertIsArray(edge);
        u.assert(() => edge.length === 2);
        edge.sort((a, b) => a - b);

        result = false;
        u.loop(graph, e => {
            if (u.arraySequenceEquals(e, edge)) {
                result = true;
                return true;
            }
        })
    });
    return result;
}
