
const u = require("wlj-utilities");

const graphTraverse = require("../../library/graphTraverse.js");
const generateGraphTree = require("../../library/generateGraphTree.js");
const getGraphVertices = require("../../library/getGraphVertices.js");

u.scope(__filename, x => {    
    graphTraverse([[2,3],[0,3],[1,3]]);
    graphTraverse([[1,3],[0,1],[0,2]]);
    graphTraverse([[0,3],[0,2],[0,1]]);

    let trials = 100;
    let max = 5;
    let start = 3;
    u.loop(u.range(max - start, start), vertexCount => {
        u.loop(u.range(trials), () => {
            let graph = generateGraphTree(vertexCount);
            graphTraverse(graph);
        })
    });
});
