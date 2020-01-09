const Artist = require('../models/Artist');

function buildArtist({ id, name, country, songList }) {
	return new Artist(id, name, country, songList);
}

function buildArtists(artistList) {
	return artistList.map((artist) => buildArtist(artist));
}

module.exports = { buildArtist, buildArtists };
