
const u = require("wlj-utilities");
const getSatVariables = require("./getSatVariables");

module.exports = getLargestSatVariable;

function getLargestSatVariable(clauses) {
    let result;
    u.scope(getLargestSatVariable.name, x => {
        let variables = getSatVariables(clauses);
        let largest = variables[0];
        u.loop(variables, v => {
            if (v > largest) {
                largest = v;
            }
        })
        result = largest;
    });
    return result;
}
