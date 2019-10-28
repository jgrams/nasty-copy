const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()
const port = process.env.Port || 8080

app.use(express.static(path.join(__dirname, 'build')));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'build', 'index.html')))
app.post('/api/create', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Express server at port ${port}!`))

var mysql = require('@mysql/xdevapi');
var config = require('./database/config/dev.json')


mysql.getSession(config)
     .then(session => {
     	console.log(session.inspect());
     })


