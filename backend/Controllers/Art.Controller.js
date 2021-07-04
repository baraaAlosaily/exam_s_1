'use strict'

const axios = require('axios');
const { response } = require('express');
const ArtData = require('../Models/Art.Model')

const getmyart = async (req, res) => {
  const url = `https://api.artic.edu/api/v1/artworks`;
  axios.get(`https://api.artic.edu/api/v1/artworks`).then(response => {
    const ArtDetails = response.data.data.map(art => {
      return new ArtData(art)
    })
    res.send(ArtDetails)
  }).catch(error => {
    console.log(`====================`);
    console.log(`An Error Ocucured!`);
    console.log(`====================`);
    console.log(error);
  })
}

module.exports = getmyart;