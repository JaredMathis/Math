
const u = require("wlj-utilities");
const isGraph = require("./isGraph");
const getGraphNeighbors = require("./getGraphNeighbors")
const getGraphVertices = require("./getGraphVertices");

module.exports = graphTraverse;

function graphTraverse(graph) {
    let result;
    u.scope(graphTraverse.name, x => {
        let log = false;
        u.merge(x,{graph});
        u.assert(() => isGraph(graph));

        let vertices = getGraphVertices(graph);

        let previous;
        let current = vertices[0];
        result = [current];
        let spice = 0;
        u.loop(u.range(vertices.length * vertices.length), i => {
            let neighbors = getGraphNeighbors(graph, current);
            if (u.isUndefined(previous)) {
                previous = neighbors[0];
            }
            if (neighbors.length >= 2) {
                let previousIndex = neighbors.indexOf(previous);
                if (previousIndex >= 0) {
                    neighbors.splice(previousIndex, 1);
                }
            }

            let choiceIndex = spice % neighbors.length;
            if (log) console.log({spice,choiceIndex,neighbors,current});
            if (neighbors.length > 1) {
                spice += 1;
            }
            previous = current;
            current = neighbors[choiceIndex];

            if (!result.includes(current)) {
                result.push(current);
            }
        });

        result.sort();

        u.assertIsEqualJson(result, vertices);
    });
    return result;
}
