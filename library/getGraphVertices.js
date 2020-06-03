
const u = require("wlj-utilities");
const isGraph = require("./isGraph");

module.exports = getGraphVertices;

function getGraphVertices(graph) {
    let result;
    u.scope(getGraphVertices.name, x => {
        let log = false;
        u.assert(() => isGraph(graph));

        let vertices = [];
        u.loop(graph, e => {
            u.loop([e[0], e[1]], v => {
                if (!vertices.includes(v)) {
                    vertices.push(v);
                }
            });
        });
        result = vertices;
        result.sort((a,b) => a-b);

        if (log) console.log(getGraphVertices.name, { result });
    });
    return result;
}
