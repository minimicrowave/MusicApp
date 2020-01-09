const songRepository = require('../../repositories/songs');
const songBuilder = require('../../builders/songBuilder');
const artistService = require('../artists');

async function create(name, price, genre, artistID) {
	let newSong = await songRepository.create(name, price, genre, artistID);
	return songBuilder.buildSong(newSong);
}

async function findAll() {
	let songList = await songRepository.findAll();
	return songBuilder.buildSongs(songList);
}

async function update(id, name, price, genre, artistID) {
	return await songRepository.patch(id, name, price, genre, artistID);
}

async function del(id) {
	return await songRepository.del(id);
}

async function findAllWithArtists() {
	let songList = await songRepository.findAll();
	let artistList = await artistService.findAll();

	let songListWithArtists = songList.map(({ id, name, price, genre, artist_id: artistID }) => {
		let artist = artistList.find(({ id }) => id === artistID) || null;
		return songBuilder.buildSong(id, name, price, genre, artist);
	});

	return songListWithArtists;
}

module.exports = { create, findAll, update, del, findAllWithArtists };
