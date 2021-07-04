'use strict'

class ArtData {
  constructor(data) {
    this.title = data.title;
    this.thumbnail = data.thumbnail.lqip;
    this.artistName = data.artist_title;
    this.criditLine = data.credit_line;
  }
}

module.exports = ArtData