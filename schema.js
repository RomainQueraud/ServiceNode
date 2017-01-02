var mongoose = require('mongoose');

// Define our user schema
var userSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    company: {
        type: String,
        required: true
    }
}, { versionKey: false });

userSchema.set('toJSON', { //Pour avoir le bon format utilisé par le Angular
    transform: function (doc, ret, options) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
    }
});

var user = mongoose.model('User', userSchema);

module.exports.user = user;

mongoose.connect("mongodb://127.0.0.1/myDatabase");

var db = mongoose.connection;

db.once('open', function(){
    console.log("la db est là");
})
