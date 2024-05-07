const http = require("http");
const fs = require("fs");

const PORT = 3000;
const HOST = "127.0.0.5";

const server = http.createServer((req, res) => {
    console.log("Обработка запроса...");

    if (req.method === "GET" && req.url === "/") {
        fs.promises.readFile("input.txt", "utf8")
            .then(data => {
                res.writeHead(200, { "Content-Type": "text/plain; charset=UTF-8" });
                res.end(data);
            })
            .catch(err => {
                console.error(err);
                res.writeHead(500, { "Content-Type": "text/plain; charset=UTF-8" });
                res.end("Внутренняя ошибка сервера");
            });
    } else if (req.method === "POST" && req.url === "/") {
        let body = "";

        req.on("data", (chunk) => {
            body += chunk;
        });

        req.on("end", () => {
            fs.appendFile("input.txt", body, "utf8", (err) => {
                if (err) {
                    console.error(err);
                    res.writeHead(500, { "Content-Type": "text/plain; charset=UTF-8" });
                    res.end("Внутренняя ошибка сервера");
                    return;
                }
                res.writeHead(200, { "Content-Type": "text/plain; charset=UTF-8" });
                res.end("Данные успешно добавлены в файл.");
            });
        });
    } else {
        res.writeHead(404, { "Content-Type": "text/plain; charset=UTF-8" });
        res.end("Не найдено");
    }
});

server.listen(PORT, HOST, () => {
    console.log(`Сервер работает по адресу http://${HOST}:${PORT}`);
});