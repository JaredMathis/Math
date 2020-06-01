
const u = require("wlj-utilities");

module.exports = isGraph;

function isGraph(edges) {
    let result;
    u.scope(isGraph.name, x => {
        if (!u.isArray(edges)) {
            result = false;
            return;
        }
        if (edges.length === 0) {
            result = false;
            return;
        }

        result = true;
        u.loop(edges, e => {
            if (!u.isArray(e)) {
                result = false;
                return true;
            }

            if (e.length !== 2) {
                result = false;
                return;
            }

            if (e[0] >= e[1]) {
                result = false;
                return;
            }

            u.loop(e, v => {
                if (!u.isInteger(v)) {
                    result = false;
                    return true;
                }
            });
        });
    });
    return result;
}
