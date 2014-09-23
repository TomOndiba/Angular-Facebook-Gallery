var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');

/* AWS config*/
var AWS = require('aws-sdk');
// AWS.config.loadFromPath('config.json');

var s3 = new AWS.S3();

var params = {Bucket: 'Surgeon-Sketch-Images'};

// s3.listObjects(params, function(err, data)
// {
//     var bucketContents = data.Contents;
//     for (var i = 0; i < bucketContents.length; i++)
//       {
//         var urlParams = {Bucket: 'Surgeon-Sketch-Images', Key: bucketContents[i].Key, Expires: 2592000};
//         s3.getSignedUrl('getObject',urlParams, function(err, url)
//         {
//           console.log('the url of the image is', url);
//         });
//       };
// });


//ImageMagick
var gm = require('gm');
var imageMagick = gm.subClass({ imageMagick: true });

var bcrypt = require('bcryptjs');
var _ = require('lodash');

var userSchema = new mongoose.Schema({
  category: String,
  images: [{
    originalImage: String,
      newImage: String
  }]
});

var User = mongoose.model('User', userSchema);

mongoose.connect('mongodb://admin:password@ds049878.mongolab.com:49878/surgeonsketch');


var app = express();

app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));

app.use(bodyParser({limit: '50mb'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});


app.get('/api/pictures', function(req, res, next) {
  var query = User.find();
  query.exec(function(err, pictures) {
    if (err) return next(err);
    res.send(pictures);
  });
});

app.post('/api/pictures', function(req, res) {

  var query = User.find();
  query.exec(function(err, pictures) {
    if (err) return next(err);
  var retrievedCategoryObject = _.find(pictures, { 'category': req.body.category });  
  var newPictureObject = {
    "originalImage": req.body.originalImage,
    "newImage": req.body.newImage
  }
  retrievedCategoryObject.images.push(newPictureObject);
  retrievedCategoryObject.save(function(err) {
      if (err) return next(err);
      res.send(200);
    });
  });

  var picture = new User({
    originalImage: req.body.originalImage,
    newImage: req.body.newImage 
  })
  picture.save(function(err) {
    if (err) return next(err);
    res.send(200);
  });
});

app.get('*', function(req, res) {
  res.redirect('/#' + req.originalUrl);
});

app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
});

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.send(500, { message: err.message });
});
