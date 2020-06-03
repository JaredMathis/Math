
const u = require("wlj-utilities");
const isGraph = require("./isGraph");
const getGraphVertices = require("./getGraphVertices");

module.exports = getGraphNeighbors;

function getGraphNeighbors(graph, vertex) {
    let result;
    u.scope(getGraphNeighbors.name, x => {
        let log = false;

        u.assert(() => isGraph(graph));

        let vertices = getGraphVertices(graph);

        result = [];
        u.loop(vertices, neighbor => {
            let target = [neighbor, vertex];
            target.sort((a, b) => a - b);
            u.loop(graph, e => {
                if (u.arraySequenceEquals(target, e)) {
                    result.push(neighbor);
                    return true;
                }
            })
        });

        if (log) console.log(getGraphNeighbors.name, { graph, vertices, vertex, result });
    });
    return result;
}
