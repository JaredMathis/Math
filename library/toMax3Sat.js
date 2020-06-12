
const u = require("wlj-utilities");
const getSatVariables = require("./getSatVariables");
const tryAddSatClause = require("./tryAddSatClause");
const getLargestSatVariable = require("./getLargestSatVariable");

module.exports = toMax3Sat;

function toMax3Sat(clauses) {
    let result;
    u.scope(toMax3Sat.name, x => {
        let log = false
        let max = getLargestSatVariable(clauses);
        if (log) console.log({max});
        result = []
        u.loop(clauses, c => {
            while (c.length > 3) {
                let a = c.pop();
                let b = c.pop();
                // Introduce a new variable.
                max++;
                // By adding max to the beginning rather than the end,
                // We are more likely to reuse variables.
                c.unshift(max);
                /** 
                 * (c <=> (a or b)) 
                 * <=> 
                 * (
                 *      (a or b or !c) 
                 *      and (a or !b or c) 
                 *      and (!a or b or c) 
                 *      and (!a or !b or c)
                 * )
                 * https://cstheory.stackexchange.com/a/47031/58255
                 */ 
                tryAddSatClause(result, [a,b,-max]);
                tryAddSatClause(result, [a,-b,max]);
                tryAddSatClause(result, [-a,b,max]);
                tryAddSatClause(result, [-a,-b,max]);
            }
            result.push(c);
        })
    });
    return result;
}
