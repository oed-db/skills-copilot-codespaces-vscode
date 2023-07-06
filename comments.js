// Create Web Server
//
// Create a web server that listens for requests on port 3000, and responds with a file named index.html.
//

const http = require('http');
const fs = require('fs');
const path = require('path');
const hostname = '
const port = 3000;
const server = http.createServer((req, res) => {
    console.log("Request for " + req.url + " by method " + req.method);
    if (req.method == 'GET') {
        var fileUrl;
        if (req.url == '/')
            fileUrl = '/index.html';
        else
            fileUrl = req.url;
        var filePath = path.resolve('./public' + fileUrl);
        const fileExt = path.extname(filePath);
    }
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
