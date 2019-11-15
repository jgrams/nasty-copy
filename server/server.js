const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const mysql = require('@mysql/xdevapi');
const config = require('../database/config/dev.json')
const createDatabase = require('../database/migrations/createdatabase.json')
const app = express()
const port = process.env.Port || 8080

app.use(express.static(path.join(__dirname, '../build')));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../build', 'index.html')))


mysql.getSession(config)
     .then(session => {
     	session.sql(createDatabase.create)
     	       .execute()
     	session.sql(createDatabase.submissions)
     	       .execute();
     console.log(`Database created.`)
     })


app.post('/api/create', (req, res) => { 
		console.log(req.body);
		mysql
		  .getSession(config)
		  .then(function (session) {
		    // Accessing an existing table
		    myTable = session.getSchema('nastycopy').getTable('submissions');

		    // Insert SQL Table data
		    return myTable
		      .insert(['email', 'grievance', 'paywilling'])
		      .values([req.params, req.params, req.params])
		      .execute()
		  });
         res.send('Post Successful!');
    });

app.listen(port, () => console.log(`Express server at port ${port}!`))