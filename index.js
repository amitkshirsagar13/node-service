var WebSocketServer = require('ws').Server
    , wss = new WebSocketServer({ port: 9090 });

const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
});

// Broadcast updates to all WebSocketServer clients
app.get('/notify/:message', function (req, res) {
    var message = req.params.message;
    console.log('Event: message %s updated', message);
    wss.clients.forEach(function each(client) {
        client.send(`{'message':'${message}'}`);
    });
    res.sendStatus(200);
});