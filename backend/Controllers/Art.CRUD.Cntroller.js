'use strict'

const artPiece = require('../Models/artic.model')

//post controller for creating a new item in our DB 

const createFavoriteArtPeice = async (req, res) => {
  const {
    title,
    thumbnail,
    artistName,
    criditLine
  } = req.body;
  const slug = title.toLowerCase().split(' ').join('-');
  artPiece.find({ title: title }, (error, data) => {
    if (data.length > 0) {
      res.send('hahahahahaha data exist')
    } else {
      const newArtPiece = new artPiece({
        title: title,
        thumbnail: thumbnail,
        artistName: artistName,
        criditLine: criditLine,
        slug: slug
      });
      console.log({ 'mytitle': title });
      newArtPiece.save()
      res.send(newArtPiece)
    }
  });
}
const getFavoriteArtPeice = async (req, res) => {
  artPiece.find({}, (error, data) =>
    res.send(data))
}
const deleteFavoriteArtPeice = async (req, res) => {
  const slug = req.params.slug;
  artPiece.remove({ slug: slug }, (error, data) => {
    if (error) {
      res.send(error)
    } else {

      res.send(data)

    }
  })
}
const putFavoriteArtPeice = async (req, res) => {
  const { criditLine } = req.body;
  const slug = req.params.slug;
  artPiece.find({ slug: slug }, (error, data) => {
    if (error) {
      res.send(error)
    } else {
      data[0].criditLine = criditLine;
      data[0].save();
      res.send(data)

    }
  })
}

module.exports = {
  createFavoriteArtPeice,
  getFavoriteArtPeice,
  deleteFavoriteArtPeice,
  putFavoriteArtPeice
}