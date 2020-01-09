const songRepository = require('../../repositories/songs');
const Song = require('../../models/Song');
const artistService = require('../artists');

async function create(name, price, genre, artistID) {
	let newSong = await songRepository.create(name, price, genre, artistID);
	return new Song(newSong.id, newSong.name, newSong.price, newSong.genre);
}

async function findAll() {
	let songList = await songRepository.findAll();
	songList = songList.map(({ name, price, genre }) => new Song(id, name, price, genre));
	return songList;
}

async function update(id, name, price, genre, artistID) {
	return await songRepository.patch(id, name, price, genre, artistID);
}

async function del(id) {
	return await songRepository.del(id);
}

async function findAllWithArtists() {
	let songList = await songRepository.findAll();

	console.log('song list', songList);
	let artistList = await artistService.findAll();

	let songListWithArtists = songList.map(({ id, name, price, genre, artist_id: artistID }) => {
		let artist =
			artistList.find(({ id }) => {
				return id === artistID;
			}) || null;
		return new Song(id, name, price, genre, artist);
	});

	return songListWithArtists;
}

module.exports = { create, findAll, update, del, findAllWithArtists };
