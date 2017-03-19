var express = require('express');
var multer  = require('multer');
var app = express();
var cors = require('cors');
var path = require('path');

app.use(cors({
    origin: 'http://127.0.0.1:8081'
}));

function makeid()
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 10; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

var storage = multer.diskStorage({ 
    destination: function (req, file, cb) {
        cb(null, __dirname + '/uploads')
    },
    filename: function(req, file, cb) {
        var ext = path.extname(file.originalname);        
        cb(null, makeid() + ext);
    },
});

var upload = multer({ storage: storage });

app.post('/file', upload.array('files'), function (req, res, next) {
   console.log(req.files);
   res.send("done");
})

app.listen(3000);