
const u = require("wlj-utilities");

const graphTraverse = require("../../library/graphTraverse.js");
const generateGraphTree = require("../../library/generateGraphTree.js");
const getGraphVertices = require("../../library/getGraphVertices.js");

u.scope(__filename, x => {    
    graphTraverse([[2,3],[0,3],[1,3]]);
    graphTraverse([[1,3],[0,1],[0,2]]);
    graphTraverse([[0,3],[0,2],[0,1]]);
    graphTraverse([[0,4],[2,4],[2,3],[1,2]]);
    graphTraverse([[1,5],[2,5],[0,5],[0,4],[0,3]]);
    u.assert(false);

    let trials = 1000;
    let max = 6;
    let start = 3;
    u.loop(u.range(max - start + 1, start), vertexCount => {
        u.loop(u.range(trials), () => {
            let graph = generateGraphTree(vertexCount);
            graphTraverse(graph);
        })
    });
});
