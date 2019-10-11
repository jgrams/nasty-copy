const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()
const port = process.env.Port || 8080

app.get('/', (req, res) => res.sendFile(path.join(__dirname, './public', 'index.html')))
app.post('/api/create', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Express server at port ${port}!`))


