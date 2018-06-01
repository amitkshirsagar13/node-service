var WebSocketServer = require('ws').Server
    , wss = new WebSocketServer({ port: 9091 });

const bodyParser = require('body-parser');

const express = require('express');
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.get('/', (req, res) => res.send('Hello World!'))

app.use(express.static('static'))

app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
});

// Broadcast updates to all WebSocketServer clients
app.post('/notify/:email', function (req, res) {
    var email = req.params.email;
    console.log(email);
    var body = req.body;
    console.log('Event: email %s received', email);
    console.log('Event: body %s updated', body);
    console.log('Event: message %s updated', req.body.message);
    wss.clients.forEach(function each(client) {
        var response = {
            'email': email, 'body': body, 'message': body.message
        };
        client.send(JSON.stringify(response));
    });
    res.sendStatus(200);
});