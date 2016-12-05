var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// Define our user schema
var userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    /*
    posts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
    */
});

var user = mongoose.model('User', userSchema);

module.exports.user = user;

mongoose.connect("mongodb://127.0.0.1/myDatabase");

var db = mongoose.connection;

db.once('open', function(){
    console.log("la db est là");
})
