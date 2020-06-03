
const u = require("wlj-utilities");
const getGraphNeighbors = require("./getGraphNeighbors");

module.exports = getGraphDegree;

function getGraphDegree(graph, vertex) {
    let result;
    u.scope(getGraphDegree.name, x => {
        result = getGraphNeighbors(graph, vertex).length
    });
    return result;
}
