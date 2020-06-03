
const u = require("wlj-utilities");
const isGraph = require("./isGraph");
const getGraphDegree = require("./getGraphDegree");
const getGraphNeighbors = require("./getGraphNeighbors");
const getGraphVertices = require("./getGraphVertices");

module.exports = toRegular3GraphSingleVertex;

function toRegular3GraphSingleVertex(graph, vertex) {
    let result;
    u.scope(toRegular3GraphSingleVertex.name, x => {
        u.merge(x,{graph});
        u.merge(x,{vertex});
        u.assert(() => isGraph(graph));

        let degree = getGraphDegree(graph, vertex);
        u.assert(() => degree > 3);

        result = [];
        u.merge(x,{result})
        u.loop(graph, edge => {
            if (!edge.includes(vertex)) {
                result.push(edge);
            }
        })

        const vertices = getGraphVertices(graph);
        u.merge(x,{vertices})
        let maxVertex = vertices[0];
        u.loop(vertices, v => {
            if (v > maxVertex) {
                maxVertex = v;
            } 
        });
        u.merge(x,{maxVertex})
        let numberOfVerticesToCreate = degree - 2;
        u.merge(x,{numberOfVerticesToCreate})
        const newVertices = u.range(numberOfVerticesToCreate, maxVertex + 1);
        u.merge(x,{newVertices})

        const neighbors = getGraphNeighbors(graph, vertex);

        u.loop(newVertices, (v, i) => {
            if (i === 0) {
                let e = [neighbors[0], v];
                result.push(e);
            }

            if (i > 0) {
                let g = [newVertices[i - 1], v];
                result.push(g);
            }

            let f = [neighbors[i + 1], v];
            result.push(f);

            if (i === newVertices.length - 1) {
                let e = [neighbors[newVertices.length - 1], v];
                result.push(e);
            }
        });
    });
    return result;
}
