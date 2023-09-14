const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if(url === '/'){
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write('<html>');
        res.write('<head><title>Hello from Node</title>');
        res.write('</head>');
        res.write('<body><h1>Hello from Node</h1></body>');
        res.write('</html>');
        res.end();
    }
    if(url === '/user'){
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write('<html>');
        res.write('<head><title>Hello from Node</title>');
        res.write('</head>');
        res.write('<body><h1>new user</h1><form action="/createuser" method="POST"><input type="text" name="nuser"><button type="submit">submit</button></form></body>');
        res.write('</html>');
        res.end();
    }
    if(url === '/createuser'){
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            const newuser = parseBody.split('=')[1];
            fs.writeFileSync('newuser.txt', newuser);
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end()
    }

});
 server.listen(8000);