// Create web server
// Create a web server that listens on port 3000 and serves requests to the path /comments. This server should respond with the following JSON object when it receives a GET request:

// { "comments": [ { "username": "ali", "comment": "first!" }, { "username": "moath", "comment": "good luck!" } ] }

const http = require('http');
const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/comments') {
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify({
            comments: [
                { username: 'ali', comment: 'first!' },
                { username: 'moath', comment: 'good luck!' }
            ]
        }));
        res.end();
    } else {
        res.statusCode = 404;
        res.end();
    }
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});