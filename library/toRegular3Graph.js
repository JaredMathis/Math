
const u = require("wlj-utilities");
const toGraphMinDegree3 = require("./toGraphMinDegree3");
const toGraphMaxDegree3 = require("./toGraphMaxDegree3");
const getGraphDegree = require("./getGraphDegree");
const getGraphVertices = require("./getGraphVertices");

module.exports = toRegular3Graph;

function toRegular3Graph(graph) {
    let result;
    u.scope(toRegular3Graph.name, x => {
        u.merge(x,{graph});
        let minned = toGraphMinDegree3(graph);
        u.merge(x,{minned});
        result = toGraphMaxDegree3(minned);
        u.merge(x,{result});

        let vertices = getGraphVertices(result);
        u.merge(x,{vertices});
        u.merge(x,() => vertices.map(v => getGraphDegree(result, v)));
        u.loop(vertices, v => {
            u.merge(x,{v});
            let degree = getGraphDegree(result, v);
            u.merge(x,{degree});
            u.assert(() => degree === 3);
        });
    });
    return result;
}
