const Artist = require('../models/Artist');

function buildArtist(artist) {
	const { id, name, country, songList } = artist;
	return new Artist(id, name, country, songList);
}

function buildArtists(artistList) {
	return artistList.map((artist) => buildArtist(artist));
}

module.exports = { buildArtist, buildArtists };
