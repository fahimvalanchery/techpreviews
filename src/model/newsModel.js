const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Techpreviews');

const Schema = mongoose.Schema;

var newsSchema = new Schema({
    heading:String,
    short_desc:String,
    long_desc:String
});

var newsData =mongoose.model('news',newsSchema);

module.exports=newsData;