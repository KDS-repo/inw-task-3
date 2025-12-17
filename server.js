const http = require("http")

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    console.log(`Получен запрос: ${req}`);
    res.end("ResEnd");
})

server.listen(3000, '127.0.0.1');