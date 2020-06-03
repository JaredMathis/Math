
const u = require("wlj-utilities");
const isGraph = require("./isGraph");
const getGraphNeighbors = require("./getGraphNeighbors")
const getGraphVertices = require("./getGraphVertices");

module.exports = graphTraverse;

function graphTraverse(graph) {
    let result;
    u.scope(graphTraverse.name, x => {
        let log = true;
        if (log) console.log(graphTraverse.name + " entered");
        u.merge(x,{graph});
        u.assert(() => isGraph(graph));

        let vertices = getGraphVertices(graph);

        let choices = [0,1];

        let previous;
        let current = vertices[0];
        result = [current];
        let spice = 0;
        let toggle = false;
        u.loop(u.range(vertices.length * vertices.length), i => {
            let neighbors = getGraphNeighbors(graph, current);
            if (u.isUndefined(previous)) {
                previous = neighbors[0];
            }
            if (neighbors.length >= 2) {
                let previousIndex = neighbors.indexOf(previous);
                if (previousIndex >= 0) {
                    //neighbors.splice(previousIndex, 1);
                }
            }

            let choiceIndex;
            if (neighbors.length === 1) {
                choiceIndex = 0;
            } else {
                if (neighbors.length === 2) {
                    let previousIndex = neighbors.indexOf(previous);
                    if (previousIndex >= 0) {
                        neighbors.splice(previousIndex, 1);
                    }
                    choiceIndex = 0;
                } else if (neighbors.length === 3) {
                    neighbors.sort((a, b) => a - b);
                    u.assert(false);
                } else {
                    u.assert(false);
                }
            }

            previous = current;
            current = neighbors[choiceIndex];

            if (!result.includes(current)) {
                result.push(current);
            }
        });

        result.sort((a, b) => a - b);

        u.assertIsEqualJson(result, vertices);
    });
    return result;
}
