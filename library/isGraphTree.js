
const u = require("wlj-utilities");
const isGraph = require("./isGraph");
const getGraphVertices = require("./getGraphVertices");
const isGraphConnected = require("./isGraphConnected");

module.exports = isGraphTree;

function isGraphTree(graph) {
    let result;
    u.scope(isGraphTree.name, x => {
        u.merge(x, {graph})
        u.assert(() => isGraph(graph));

        let vertices = getGraphVertices(graph);
        let connected = isGraphConnected(graph);
        result = connected && graph.length === vertices.length - 1;
    });
    return result;
}
