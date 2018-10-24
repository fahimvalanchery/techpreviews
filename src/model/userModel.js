const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Techpreviews');

const Schema = mongoose.Schema;

var userSchema = new Schema({
    
    username:String,
    password:String
});

var userData = mongoose.model('Users',userSchema);

module.exports=userData;
