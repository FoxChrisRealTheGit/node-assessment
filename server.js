const express = require('express');
const bodyparser = require('body-parser');
const massive = require('massive');
const ctrl = require('./userCtrl');
const app = express();
app.use(bodyparser.json());

app.get('/api/users', ctrl.AllUsers);

app.get('/api/users/:id', ctrl.second)

app.get('/api/admins', ctrl.admins)

app.get('/api/nonadmins', ctrl.nonadmins)

app.get('/api/user_type/:type', ctrl.usertype)

app.put('/api/users/:id', ctrl.updateUser)

app.post('/api/users', ctrl.AddUser)

app.delete('/api/users/:id', ctrl.removeUser)

const port = 3000
app.listen(port, function () { console.log(`listening on port ${port}`) });