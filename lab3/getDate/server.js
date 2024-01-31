// server.js
const http = require("http");
const url = require("url");
const utils = require("./modules/utils");
const en = require("./lang/en/en");

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathName = parsedUrl.pathname;
    const query = parsedUrl.query;

    if (pathName.endsWith("/getDate") && req.method === "GET") {
        const name = query.name || "Guest";
        const currentDate = utils.getDate();

        const greetingMessage = en.greetingMessage.replace('%1', name);
        const responseMessage = `
            <p style="color: blue;">
                ${greetingMessage}. ${currentDate}
            </p>
        `;

        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(responseMessage);
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 Not Found");
    }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});