const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
var mysql = require('@mysql/xdevapi');
var config = require('../database/config/dev.json')
var databaseCreation = require('../database/migrations/createdatabase.json')

const app = express()
const port = process.env.Port || 8080

mysql.getSession(config)
     .then(session => {
     	session.sql(databaseCreation.create)
     	       .execute()
     	session.sql(databaseCreation.submissions)
     	       .execute()
     	console.log(session.inspect());
     })

app.use(express.static(path.join(__dirname, 'build')));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'build', 'index.html')))
app.post('/api/create', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Express server at port ${port}!`))