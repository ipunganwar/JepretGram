var mongoose = require('mongoose')

var photoSchema = mongoose.Schema({
    caption: String,
    url: String,
    photo: String
})

var Photos = mongoose.model('Photos', photoSchema)

module.exports = Photos