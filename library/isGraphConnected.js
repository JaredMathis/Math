
const u = require("wlj-utilities");
const isGraph = require("./isGraph");
const getGraphVertices = require("./getGraphVertices");
const getGraphNeighbors = require('./getGraphNeighbors')

module.exports = isGraphConnected;

function isGraphConnected(graph) {
    let result;
    u.scope(isGraphConnected.name, x => {
        u.assert(() => isGraph(graph));

        let vertices = getGraphVertices(graph);
        let found = [vertices[0]];
        
        let i = 0;
        while (i < found.length) {
            let neighbors = getGraphNeighbors(graph, found[i]);
            u.loop(neighbors, n => {
                if (found.includes(n)) {
                    return;
                }
                found.push(n);
            });
            i++;
        }

        found.sort();
        result = u.arraySequenceEquals(found, vertices);
    });
    return result;
}
