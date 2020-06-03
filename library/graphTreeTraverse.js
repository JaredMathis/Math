
const u = require("wlj-utilities");
const getGraphVertices = require("./getGraphVertices");
const getGraphNeighbors = require("./getGraphNeighbors");

module.exports = graphTreeTraverse;

function graphTreeTraverse(graph, start) {
    let result;
    u.scope(graphTreeTraverse.name, x => {
        let log = false;
        let vertices = getGraphVertices(graph);
        u.assert(() => vertices.includes(start));

        let previous;
        let next;

        let current = start;
        result = [current];

        let count = (vertices.length - 1)*2;
        u.loop(u.range(count), () => {
            if (log) console.log(graphTreeTraverse.name, {current,previous});
            let neighbors = getGraphNeighbors(graph, current);
            neighbors.sort();
            if (neighbors.length === 0) {
                throw 'TODO'
            }

            let larger = neighbors.filter(n => n > previous);
            if (larger.length === 0) {
                next = neighbors[0];
            } else {
                larger.sort();
                next = larger[0];
            }
            
            previous = current;
            current = next;

            if (!result.includes(current)) {
                result.push(current);
            }
        });

        result.sort();
    });
    return result;
}
