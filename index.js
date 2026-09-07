const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {

    const log = `${Date.now()}: ${req.url} New Req Received\n`;

    fs.appendFile("log.txt", log, (err) => {

        if (err) {
            console.log(err);
            return;
        }

        switch (req.url) {
            case "/":
                res.end("HomePage");
                break;

            case "/about":
                res.end("I am Khushi Pathariya");
                break;

            default:
                res.end("404 Not Found");
        }
    });
});

myServer.listen(8000, () => console.log("Server Started!"));