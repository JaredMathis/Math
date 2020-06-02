
const u = require("wlj-utilities");
const isGraph = require("./isGraph");
const getGraphVertices = require("./getGraphVertices");
const getGraphNeighbors = require("./getGraphNeighbors");
const tryAddGraphEdge = require("./tryAddGraphEdge");

module.exports = toGraphMinDegree3;

function toGraphMinDegree3(graph) {
    let result;
    u.scope(toGraphMinDegree3.name, x => {
        u.merge(x,{graph})
        u.assert(() => isGraph(graph));

        let vertices = getGraphVertices(graph);

        u.loop(vertices, a => {
            let an = getGraphNeighbors(graph, a);
            u.loop(an, b => {
                let bn = getGraphNeighbors(graph, b);
                u.loop(bn, c => {
                    if (c === a) {
                        return;
                    }
                    tryAddGraphEdge(graph, a, c);
                    let cn = getGraphNeighbors(graph, c);
                    u.loop(cn, d => {
                        if (d === a) {
                            return;
                        }
                        tryAddGraphEdge(graph, a, d);                        
                    });
                });
            });
        });

        result = graph;
    });
    return result;
}
