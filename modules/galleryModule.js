const mongoose = require("./connection.js")

const GallerySchema = new mongoose.Schema({
    
    imageUrl: String,
    userId :  String,

  });

const Gallery = mongoose.model('Gallery', GallerySchema);


module.exports = Gallery;