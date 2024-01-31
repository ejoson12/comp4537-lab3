const http = require('http');
const url = require('url');
const utils = require('../getDate/modules/utils.js');
const en = require('./lang/en/en.js');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const query = parsedUrl.query;

    if (path.endsWith("/getDate") && req.method === "GET") {
        const name = query.name;
        const currentDate = utils.getCurrentDate();

        const message = en.greetingMessage;
        const responseMessage = `\x1b[34m${greetingMessage} ${name}. Server current date and time is ${currentDate}\x1b[0m`;

        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(responseMessage);
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Route not found");
    }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));