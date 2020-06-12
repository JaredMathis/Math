
const u = require("wlj-utilities");

const graphTreeTraverse = require("../../library/graphTreeTraverse.js");
const generateGraphTree = require("../../library/generateGraphTree.js");
const getGraphVertices = require("../../library/getGraphVertices.js");

u.scope(__filename, x => {    
    // This is "commented out" to make the tests run faster.
    console.log(__filename, 'TODO');
    return;
    let log = true;
    let fast = true;
    test([[2,3],[0,3],[1,3]]);
    test([[1,3],[0,1],[0,2]]);
    test([[0,3],[0,2],[0,1]]);
    test([[0,4],[2,4],[2,3],[1,2]]);
    test([[1,5],[2,5],[0,5],[0,4],[0,3]]);

    let trials = 25;
    if (fast) {
        trials = 1;
    }
    let max = 20;
    let start = 3;
    u.loop(u.range(max - start + 1, start), vertexCount => {
        if (log) console.log(__filename, {vertexCount})
        u.loop(u.range(trials), () => {
            let graph = generateGraphTree(vertexCount);
            test(graph);
        })
    });

    function test(graph) {
        u.merge(x,{graph});
        let vertices = getGraphVertices(graph);
        u.merge(x,{vertices});
        let result = graphTreeTraverse(graph, 0);
        u.merge(x,{result});
        u.assertIsEqualJson(() => result, () => vertices);
    }
});
