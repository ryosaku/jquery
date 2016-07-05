var express = require('express')
var app     = express()
var mongo   = require('mongodb').MongoClient
app.listen(3000)
app.get('/list', list)

function list(req, res) {
	mongo.connect('mongodb://127.0.0.1/coffee_shop',
		(error, db) => 
		db.collection('coffee').find().toArray(
			(error, data) => res.send(data)
		)
	)
}