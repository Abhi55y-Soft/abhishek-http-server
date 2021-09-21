// const http = require('http');
// const fs = require('fs');
// const { v4: uuidv4 } = require('uuid');
// const port = 8000;
// const server = http.createServer((req, res) => {
//     const url = req.url;
//     const list = req.url.split('/')
//     console.log(list);
//     console.log(url);
//     if (list[1] === 'html') {
//         fs.readFile('index.html', (err, data) => {
//             res.writeHead(200, { 'Content-Type': 'text/html' });
//             res.end(data);
//         });
//     }
//     else if (list[1] === 'json') {
//         fs.readFile('file.json', (err, data) => {
//             res.writeHead(200, { 'Content-Type': 'text/json' });
//             res.end(data);
//         });
//     }
//     else if (list[1] === 'uuid') {
//         const uuid = {
//             "uuid": uuidv4()
//         };
//         const data = JSON.stringify(uuid, null, 2);
//         res.writeHead(200, { 'Content-Type': 'text/json' });
//         res.end(data);
//     }
//     else if (list[1] === 'status') {
//         res.writeHead(list[2], { 'Content-Type': 'text/html' });
//         res.write(`<h1>${list[2]}</h1>`);
//         res.end();
//     }
//     else if (list[1] === 'delay') {
//         setTimeout(()=> {
//             res.writeHead(200, { 'Content-Type': 'text/html' });
//             res.write(`<h1>Sorry for ${list[2]} second delay</h1>`);
//             res.end();
//         }, list[2] * 1000)    
//     }
//     else{
//         res.writeHead(404, { 'Content-Type': 'text/html' });
//         res.write(`<h1>404 Page Not Found</h1>`);
//         res.end();
//     }
// });

// server.listen(port, () => {
//     console.log(`listening to the Port ${port}`);
// });
const express = require('express');
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const port = 8000;
const app = express();

app.get('/html', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/json', (req, res) => {
    res.sendFile(path.join(__dirname, 'file.json'));
});
app.get('/uuid', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
    const uuid = {
        uuid: uuidv4()
    }
    res.send(uuid);
});
app.get('/status/:code', (req, res) => {
    res.status(req.params.code);
    res.send(`<h1>${req.params.code}</h1>`)
});
app.get('/delay/:time', (req, res) => {
    setTimeout(() => {
        res.send(`<h1>Sorry for ${req.params.time} second delay</h1>`)
    }, req.params.time * 1000);
});
app.listen(port, ()=> console.log(`Server started on port ${port}`));