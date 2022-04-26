var mongodb = require('mongodb')
var express = require('express')

let app = express()

//header & parse body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
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

    app.post('/login', function(req, res) {

        console.log(req.body);

        dbo.collection('user').find({userName: {$eq: req.body.userName}, password: {$eq: req.body.password}, webSocket: {$eq: req.body.webSocket}}).toArray(function(err, result) {
            if(err) throw err; else {
                if(result.length != 0) {
                    res.send({
                        status: result.length != 0,
                        userName: req.body.userName,
                        webSocket: req.body.webSocket,
                        password: req.body.password
                    })
                } else {
                    res.send(false)
                }
            }
        })
        // dbo.collection('user').find({}).toArray(function(err, result) {
        //     if(err) throw err; else {
        //         if(result.length != 0) {
        //             console.log(result);
        //         } else {
        //             res.send(false)
        //         }
        //     }
        // })
        
    })
    app.listen(8080)
})

//select all data

