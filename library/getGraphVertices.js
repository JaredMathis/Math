
const u = require("wlj-utilities");
const isGraph = require("./isGraph");

module.exports = getGraphVertices;

function getGraphVertices(graph) {
    let result;
    u.scope(getGraphVertices.name, x => {
        u.assert(() => isGraph(graph));

        let vertices = [];
        u.loop(graph, e => {
            u.loop([e[0], e[1]], v => {
                if (!vertices.includes(v)) {
                    vertices.push(v);
                }
            });
        });
        vertices.sort();
        result = vertices;
    });
    return result;
}
