
const u = require("wlj-utilities");

const generateGraphTree = require("../../library/generateGraphTree.js");
const isGraphTree = require("../../library/isGraphTree.js");
const getGraphVertices = require("../../library/getGraphVertices.js");

u.scope(__filename, x => {
    u.loop(u.range(10), (i) => {
        let log = false;

        let vertexCount = 5;
        let graph = generateGraphTree(vertexCount);
        u.assert(() => isGraphTree(graph));
        let vertices = getGraphVertices(graph);
        u.assert(() => vertexCount === vertices.length);

        if (i === 0) {
            if (log) console.log({graph});
        }
    });
});
