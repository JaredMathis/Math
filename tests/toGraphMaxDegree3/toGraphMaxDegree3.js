
const u = require("wlj-utilities");

const toGraphMaxDegree3 = require("../../library/toGraphMaxDegree3.js");
const index = require("../../index.js");

u.scope(__filename, x => {
    let inputs = [
        [[1, 2], [1, 3], [1, 4], [1, 5], [1, 6], [2, 3], [2, 4], [2, 5]],
        [[1, 4], [2, 4], [2, 3], [0, 2], [0, 3], [0, 4], [0, 1], [1, 2], [1, 3], [3, 4]],
    ];
    u.loop(inputs, input => {
        let graph = toGraphMaxDegree3(input);
        let vertices = index.getGraphVertices(graph);
        u.loop(vertices, v => {
            let degree = index.getGraphDegree(graph, v);
            u.assert(() => degree <= 3)
        });
    })
});
