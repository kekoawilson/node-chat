const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controllers/messages_controller')

const app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + './../public/build'))



app.get('/api/messages', controller.read)
app.post('/api/messages', controller.create)
app.put('/api/messages/:id', controller.update)
app.delete('/api/messages/:id', controller.delete)


const port = 3000;
app.listen(port, () => console.log(`Listening on port: ${port}`))