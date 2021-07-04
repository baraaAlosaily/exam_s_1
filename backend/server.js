'use strict'

const express = require('express');
const cors = require('cors');
const axios = require('axios');
const mongoose = require('mongoose')
require('dotenv').config();
const app = express();
app.use(cors());
app.use(express.json())
const PORT = process.env.PORT || 8081;

const Crud = require("./Controllers/Art.CRUD.Cntroller")
mongoose.connect('mongodb://localhost:27017/art', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const getmyart = require('./Controllers/Art.Controller')

app.get('/', (req, res) => {
  console.log('server is work');
  res.send('server is working')
})
app.get("/art", getmyart)

//CRUD endpoints(craete)
app.post('/art/favorite', Crud.createFavoriteArtPeice)

//favouring(read/put)
app.get('/art/favorite', Crud.getFavoriteArtPeice)

//delete(delete)
app.delete('/art/favorite/:slug', Crud.deleteFavoriteArtPeice)

//update(update)
app.put('/art/favorite/:slug', Crud.putFavoriteArtPeice)

app.listen(PORT, () => {
  console.log(`Sever Started on ${PORT}`);
})