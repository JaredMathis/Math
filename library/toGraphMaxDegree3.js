
const u = require("wlj-utilities");
const getGraphVertices = require('./getGraphVertices');
const getGraphDegree = require('./getGraphDegree');
const toRegular3GraphSingleVertex = require('./toGraphMaxDegree3SingleVertex');
const isGraph = require('./isGraph');

module.exports = toRegular3Graph;

function toRegular3Graph(graph) {
    let result;
    u.scope(toRegular3Graph.name, x => {
        result = graph;
        let vertex;
        while (true) {
            vertex = null;
            let vertices = getGraphVertices(result);
            u.loop(vertices, v => {
                let degree = getGraphDegree(graph, v);
                if (degree > 3) {
                    vertex = v;
                }
            });
            if (vertex === null) {
                break;
            }
            result = toRegular3GraphSingleVertex(result, vertex);
        }

        u.assert(() => isGraph(result));
        let resultVertices = getGraphVertices(result);
        u.loop(resultVertices, vertex => {
            let degree = getGraphDegree(graph, vertex)
            u.assert(e => degree <= 3);
        });
    });
    return result;
}
