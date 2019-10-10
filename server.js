const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()
const port = 8080

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Express server at port ${port}!`))


