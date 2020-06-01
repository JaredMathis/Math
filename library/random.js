
const u = require("wlj-utilities");
const crypto = require('crypto');
const format = require('biguint-format');

module.exports = random;

function random(low, high) {
    let result;
    u.scope(random.name, x => {
        let log = false;
        let range = high - low + 1;
        result = Math.floor(Math.random() * range) + low;
        if (log) console.log(result);
        u.merge(x,{result,low,high});
        u.assert(() => low <= result);
        u.assert(() => result <= high);
    });
    return result;
}

function randomC(qty) {
    var x = crypto.randomBytes(qty);
    return format(x, 'dec');
}