
const u = require("wlj-utilities");

const generateGraphTree = require("./generateGraphTree");
const random = require("./random");
const graphEdgeExists = require("./graphEdgeExists");
const getGraphDegree = require("./getGraphDegree");

module.exports = generateGraphMax3;

let log = false;

function generateGraphMax3(vertexCount) {
    let result;
    u.scope(generateGraphMax3.name, x => {
        let g = [[0,1]];
        u.merge(x, {g});

        let remaining = u.range(vertexCount);

        let tries = 100*vertexCount;
        while (remaining.length >= 2 && tries > 0) {    
            if (log) console.log({remaining}); 
            if (log) console.log({g});
            let remainingIndex;
            let remainingIndex2; 
            let edge;       
            do {
                remainingIndex = random(0, remaining.length - 1);
                do {
                    remainingIndex2 = random(0, remaining.length - 1);
                } while (remainingIndex2 === remainingIndex);
                edge = [remaining[remainingIndex], remaining[remainingIndex2]];
                u.merge(x, {edge});
                tries--;
            } while (graphEdgeExists(g, edge) && tries > 0)
            if (tries > 0) {
                g.push(edge);
            }

            u.loop(u.range(vertexCount), v => {
                let degree = getGraphDegree(g, v);
                u.merge(x, {degree,v});
                u.assert(() => degree <= 3);
            });

            let removes = [];
            u.loop(remaining, r => {
                if (log) console.log({r});
                if (getGraphDegree(g, r) >= 3) {
                    removes.push(r);
                }
            })
            u.loop(removes, r => {
                let i = remaining.indexOf(r);
                remaining.splice(i, 1);
            })
        }

        result = g; 
    });
    return result;
}
