const http = require('http');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');


// http.createServer(function (req, res) {
//     //let filename = __dirname + req.url;
//     if (req.url === '/html') {
//         fs.readFile('index.html', (err, data) => {
//             res.writeHead(200, { 'Content-Type': 'text/html' });
//             res.end(data);
//         });
//     }
//     else if (req.url === '/json') {
//         fs.readFile('file.json', (err, data) => {
//             res.writeHead(200, { 'Content-Type': 'text/json' });
//             res.end(data);
//         });
//     }
//     else if (req.url === '/uuid') {
//         const uuid = {
//             "uuid": uuidv4()
//         };
//         const data = JSON.stringify(uuid, null, 2);
//         res.writeHead(200, { 'Content-Type': 'text/json' });
//         res.end(data);
//     }
//     else if (req.url === '/status/100') {
//         res.statusCode = 100;
//         res.end();
//     }
//     else if (req.url === '/status/200') {
//         res.statusCode = 200;
//         res.write('OK');
//         res.end();
//     }
//     else if (req.url === '/status/300') {
//         res.statusCode = 300;
//         res.write('Multiple Choices');
//         res.end();
//     }
//     else if (req.url === '/status/400') {
//         res.statusCode = 400;
//         res.write('Bad Request');
//         res.end();
//     }
//     else if (req.url === '/status/500') {
//         res.statusCode = 500;
//         res.write('Internal Server Error');
//         res.end();
//     }
//     else if (req.url === `/delay/${typeof Number}`) {
//         setTimeout(() => {
//             res.statusCode = 200;
//             res.write("It's Delay");
//             res.end();
//         }, 3000);
//     }
//     // else {
//     //     res.statusCode = 404
//     //     res.write('Page Not Found');
//     //     res.end();
//     // }
//     console.log(req.url);

// }).listen(9615);

const port = 8000;
const server = http.createServer((req, res) => {
    const url = req.url;
    const list = req.url.split('/')
    console.log(list);
    console.log(url);
    if (list[1] === 'html') {
        fs.readFile('index.html', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    }
    else if (list[1] === 'json') {
        fs.readFile('file.json', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/json' });
            res.end(data);
        });
    }
    else if (list[1] === 'uuid') {
        const uuid = {
            "uuid": uuidv4()
        };
        const data = JSON.stringify(uuid, null, 2);
        res.writeHead(200, { 'Content-Type': 'text/json' });
        res.end(data);
    }
    else if (list[1] === 'status') {
        res.writeHead(list[2], { 'Content-Type': 'text/html' });
        res.write(`<h1>${list[2]}</h1>`);
        res.end();
    }
    else if (list[1] === 'delay') {
        setTimeout(()=> {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(`<h1>Sorry for ${list[2]} second delay</h1>`);
            res.end();
        }, list[2] * 1000)    
    }
});

server.listen(port, () => {
    console.log(`listening to the Port ${port}`);
});
