'use strict'

const mongoose = require('mongoose')

//Craete a schema fro our model 
const artPieceSchema = mongoose.Schema({
  title: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true
  },
  slug: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true
  },
  thumbnail: String,
  artistName: String,
  criditLine: String,

})

//model our schema

const artPieceModel = mongoose.model('art_peice', artPieceSchema)

//export the model tobe used 
module.exports = artPieceModel