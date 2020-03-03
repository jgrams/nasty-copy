const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const mysql = require('mysql')
const app = express()
const port = process.env.PORT || 8081
const create_database = require('./database/migrations/createdatabase.json')

app.use(express.static(path.join(__dirname, './build')))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// set environment vars if not in aws
if ('RDS_DB_NAME' in process.env === false) {
	var db_config = require("./database/config/dev.json")
	process.env.RDS_HOSTNAME = db_config.host
	process.env.RDS_USERNAME = db_config.user
	process.env.RDS_PASSWORD = db_config.password
	process.env.RDS_PORT = db_config.port
	process.env.RDS_DB_NAME = db_config.database
	process.env.NODE_ENV = "development"
}

// connect to db
var pool = mysql.createPool({
	host     : process.env.RDS_HOSTNAME,
	user     : process.env.RDS_USERNAME,
	password : process.env.RDS_PASSWORD,
	port     : process.env.RDS_PORT,
	database : process.env.RDS_DB_NAME
})

//ensure tables all exist
pool.query(create_database.submissions, function (error, results, fields) {
	if (error) throw error
});

// specify request responses
app.get('/', (req, res) => res.sendFile(path.join(__dirname, './build', 'index.html')))
app.post('/api/create', (req, res, next) => { 
		var values = {email: req.body.email, 
		              wrong: req.body.wrong,
		              willpay: req.body.willpay};
		// mysql library escapes when passed in as parameter                
	  	pool.query('INSERT INTO submissions SET ?', 
	  		       values, 
	  		       function (error, results, fields) {
	  		           if (error) {
	  		           	 // pass errors to express
	  		             next(error)
	  	           	   } else {
	  	           	   	 res.send('Thanks for your submission.')
	  	           	   }
	  	           }
	  	)
})
app.listen(port, () => console.log(`Express server at port ${port}!`))