
const u = require("wlj-utilities");
const toGraphMinDegree3 = require("./toGraphMinDegree3");
const toGraphMaxDegree3 = require("./toGraphMaxDegree3");
const getGraphDegree = require("./getGraphDegree");
const getGraphVertices = require("./getGraphDegree");

module.exports = toRegular3Graph;

function toRegular3Graph(graph) {
    let result;
    u.scope(toRegular3Graph.name, x => {
        result = graph;
        result = toGraphMinDegree3(result);
        result = toGraphMaxDegree3(result);

        let vertices = getGraphVertices(result);
        u.loop(vertices, v => {
            let degree = getGraphDegree(result, v);
            u.assert(degree === 3);
        });

    });
    return result;
}
