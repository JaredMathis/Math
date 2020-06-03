
const u = require("wlj-utilities");
const getGraphVertices = require('./getGraphVertices');
const getGraphDegree = require('./getGraphDegree');
const toRegular3GraphSingleVertex = require('./toGraphMaxDegree3SingleVertex');
const isGraph = require('./isGraph');

module.exports = toGraphMaxDegree3;

function toGraphMaxDegree3(graph) {
    let result;
    u.scope(toGraphMaxDegree3.name, x => {
        u.merge(x,{graph});
        result = graph;
        let choice;
        while (true) {
            choice = null;
            let vertices = getGraphVertices(result);
            u.loop(vertices, v => {
                u.merge(x,{v});
                let degree = getGraphDegree(result, v);
                u.merge(x,{degree});
                if (degree > 3) {
                    choice = v;
                    return true;
                }
            });
            if (choice === null) {
                break;
            }
            result = toRegular3GraphSingleVertex(result, choice);
        }

        u.assert(() => isGraph(result));
        let resultVertices = getGraphVertices(result);
        u.loop(resultVertices, vertex => {
            let degree = getGraphDegree(result, vertex)
            u.merge(x,{degree,vertex});
            u.assert(() => degree <= 3);
        });
    });
    return result;
}
