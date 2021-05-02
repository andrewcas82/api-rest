const { query } = require('express');
var mongoose = require('mongoose');
var dev_db_url = "mongodb://localhost:27017/db_users";
var mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
mongoose.Promise = global.Promise;

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var User = require('./user');

exports.user_create = function(req, res, next) {
    var user = new User({
            name: req.body.name,
            lastName: req.body.lastName,
            email_costumer: req.body.email_costumer,
            messageCostumer: req.body.messageCostumer
        })
        //console.log(next);

    user.save(function(err) {
        if (err) {
            return next(err)
        }
        res.send({ 'message': 'OK :)' })
    })
}

exports.user_details = function(req, res) {
    User.findById(req.query.id, function(err, user, next) {
        if (err) return next(err)
        res.send(user)
    })
}

exports.user_update = function(req, res) {
    User.findByIdAndUpdate(req.query.id, { $set: req.body }, function(err, user, next) {
        if (err) return next(err)
        res.send({ 'message': 'UPDATED' })
    })
}


exports.user_delete = function(req, res, next) {
    User.findByIdAndRemove(req.query.id, function(err, user, next) {
        if (err) return next(err)
        res.send({ 'message': 'DELETE' })
    })
}