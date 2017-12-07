var mongoose = require('mongoose')

var photoSchema = mongoose.Schema({
    caption: String,
    photo_url: String
})

var Photos = mongoose.model('Photos', photoSchema)

module.exports = Photos