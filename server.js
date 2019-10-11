const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()
const port = process.env.Port || 8080

app.get('/api/post', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Express server at port ${port}!`))


