const artistRepository = require('../../repositories/artists');
const songRepository = require('../../repositories/songs');
const artistBuilder = require('../../builders/artistBuilder');

async function create(name, country) {
	let newArtist = await artistRepository.create(name, country);
	return artistBuilder.buildArtist(newArtist);
}

async function findAll() {
	let artistList = await artistRepository.findAll();
	return artistBuilder.buildArtists(artistList);
}

async function update(id, name, country) {
	return await artistRepository.update(id, name, country);
}

async function del(id) {
	return await artistRepository.del(id);
}

async function findAllWithSongs() {
	let artistList = await artistRepository.findAll();
	let songList = await songRepository.findAll();

	let artistListWithSongs = artistList.map((artist) => {
		let artistId = artist.id;
		let songListByArtist = songList.filter((song) => song.artist_id === artistId);

		return artistBuilder.buildArtist({ ...artist, songList: songListByArtist });
	});

	return artistListWithSongs;
}

module.exports = { create, findAll, update, del };
