const songsRepository = require('../../repositories/songs');
const songsBuilder = require('../../builders/songsBuilder');
const artistService = require('../artists');

async function create(name, price, genre, artistID) {
	let newSong = await songsRepository.create(name, price, genre, artistID);
	return songsBuilder.buildSong(newSong);
}

async function findAll() {
	let songList = await songsRepository.findAll();
	return songsBuilder.buildSongs(songList);
}

function update(id, name, price, genre, artistID) {
	return songsRepository.patch(id, name, price, genre, artistID);
}

function del(id) {
	return songsRepository.del(id);
}

async function findSongById(id) {
	try {
		let song = await songsRepository.find(id);
		return songsBuilder.buildSong(song);
	} catch (e) {
		throw e;
	}
}

async function findAllWithArtists() {
	let songList = await songsRepository.findAll();
	let artistList = await artistService.findAll();

	let songListWithArtists = songsBuilder.buildAllSongsWithArtists(songList, artistList);

	return songListWithArtists;
}

module.exports = {
	create,
	findAll,
	update,
	del,
	findSongById,
	findAllWithArtists,
	closeConnection: songsRepository.closeConnection
};
