const en = require("../lang/en/en.js")

function getDate(name) {
    const currentDate = new Date();
    return 'x1b[34m${currentDate}x1b[0m';
}

module.exports = {
    getDate,
};