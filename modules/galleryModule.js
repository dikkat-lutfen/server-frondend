const mongoose = require("./connection.js")

const GallerySchema = new mongoose.Schema({
    
    imageUrl: String,
    UserId :String,

  });

const Gallery = mongoose.model('Gallery', GallerySchema);


module.exports = Gallery;