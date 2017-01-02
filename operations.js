var User = require('./schema').user;

var exports = module.exports;

exports.addUser = function(user, callback) {
    var mUser = new User(user);
    mUser.save(callback);
};

exports.getUsers = function(callback) {
    User.find(callback);
};

exports.getUser = function(id, callback) {
    User.findOne({ _id: id }, callback);
};

exports.updateUser = function(id, user, callback) {
    //var mUser = new User(user);
    User.findOneAndUpdate(
        {_id: id},
        user,
        callback);
};

exports.removePost = function(id, callback) {
    User.findOneAndRemove(
        { _id: id },
        callback);
};

exports.removeAllPosts = function(callback) {
    User.remove(
        {},
        callback);
};
/*
 var romain = new User(
     {
        name : "Romain",
        company : "MinesNantes"
     }
 );

 exports.addUser(romain, function(err){
    if(err) {
        console.log("error in : exports.addUser");
        console.log(err);
    }
 });
 */


exports.getUsers(function(err, data){
    console.log(data);
})