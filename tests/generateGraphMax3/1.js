
const u = require("wlj-utilities");

const generateGraphMax3 = require("../../library/generateGraphMax3.js");
const index = require("../../index.js");

u.scope(__filename, x => {
    generateGraphMax3(5);
    generateGraphMax3(10);
});
