"use strict";


//var WebSocketServer = require('websocket').server;
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const expressLayouts = require('express-ejs-layouts')
const app = express()
const port = process.env.PORT || 3000

const dao = require('./dao_modules/')
const fnc = require('./fnc_modules/')

app.set('view engine', 'ejs')
app.use(expressLayouts)
app.use(cors({ origin: true }));
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static(__dirname + '/public'))
var server = app.listen(port, () => {
    console.log(`Servidor online http://localhost:${port}`)
});

app.get('/', async (req, res) => {
    const adm = await dao.getroom('6b0ce6ed-3bd2-4b12-9e4a')
    console.log(adm);
    res.render('pages/home', {
        adms: adm
    })
})

app.post('/', async (req, res) => {
    const r = await dao.newroom(req.body.input_licenc, fnc.uuid(), fnc.room(req.body.input_newroom))
    const adm = await dao.getroom(req.body.input_licenc)
    console.log(adm);
    res.render('pages/home', {
        adms: adm
    })
});

app.post('/room', async (req, res) => {
    const adm = await dao.getroom(req.body.input_licenc)
    res.render('pages/room', {
        adms: adm,
        user: req.body.input_user,
        room: req.body.input_room,
        mail: req.body.input_mail,
    })
})

// let wsServer = new WebSocketServer({
//     httpServer: server,
//     autoAcceptConnections: false
// });

// function originIsAllowed(origin) {
//     //console.log(origin)
//     return true;
// }

// wsServer.on('request', function (request) {
//     if (!originIsAllowed(request.origin)) {
//         request.reject();
//         console.log((new Date()) + ' Conexão para origem ' + request.origin + ' rejeitada.');
//         return;
//     }

//     var connection = request.accept('echo-protocol', request.origin);

//     connection.on('message', function (message) {
//         if (message.type === 'utf8') {
//             connection.sendUTF({
//                 dthr: new Date(),
//                 status: 'conexão iniciada',
//                 ID: connection.remoteAddress,
//                 user: req.body.input_user,
//                 email: req.body.input_mail,
//                 room: message.utf8Data
//             });
//         }
//     });
//     connection.on('close', function (reasonCode, description) {
//         connection.sendUTF({
//             dthr: new Date(),
//             status: 'conexão finalizada',
//             ID: connection.remoteAddress,
//             user: req.body.input_user,
//             email: req.body.input_mail
//         });
//     });
// });
