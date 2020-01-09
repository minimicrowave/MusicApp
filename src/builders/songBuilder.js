const Song = require('../models/Song');

function buildSong({ id, name, price, genre, artist }) {
	return new Song(id, name, price, genre, artist);
}

function buildSongs(songList) {
	return songList.map((song) => buildSong(song));
}

module.exports = { buildSong, buildSongs };
