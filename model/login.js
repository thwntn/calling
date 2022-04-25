var mongodb = require('mongodb')
var express = require('express')
var cors = require('cors')
var bp = require('body-parser')

let app = express()

//header & parse body
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

//khai bao
var mongoClient = mongodb.MongoClient
var uri = 'mongodb://127.0.0.1/admin'

mongoClient.connect(uri, function(err, db) {
    if(err) {
        console.log(err);
    } else {
        
    }

    let dbo = db.db("gCall");

    

    app.get('/login', function(req, res) {
    })
    app.post('/login', function(req, res) {
        console.log(req.body);
        
    })
    db.close()


    app.listen(3300)
})

//slelect all data

// dbo.collection('user').find({username: {$eq: "105"}, password: {$eq: "tet1105"}}).toArray(function(err, result) {
//     if(err) throw err; else {   
//         res.send(result.length == 0)
//     }
// })