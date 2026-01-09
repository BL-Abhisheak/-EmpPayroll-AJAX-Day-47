const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {

    if (req.url === "/employees") {
        fs.readFile("employees.json", (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end("Error reading file");
                return;
            }

            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(data);
        });
    }

    else {
        fs.readFile("index.html", (err, data) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        });
    }
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
