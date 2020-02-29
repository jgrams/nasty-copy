const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const mysql = require('mysql')
const app = express()
const port = process.env.Port || 8080

app.use(express.static(path.join(__dirname, './build')));
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
var pool = mysql.createPool({
	host     : process.env.RDS_HOSTNAME,
	user     : process.env.RDS_USERNAME,
	password : process.env.RDS_PASSWORD,
	port     : process.env.RDS_PORT,
	database : process.env.RDS_DB_NAME
})

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
	  		             next(error)
	  	           	   } else {
	  	           	   	 res.send('Thanks for your submission.')
	  	           	   }
	  	           }
	  	);
})

app.listen(port, () => console.log(`Express server at port ${port}!`))