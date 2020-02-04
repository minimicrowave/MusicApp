const artistsRepository = require('../../repositories/artists');
const songsRepository = require('../../repositories/songs');
const artistsbuilder = require('../../builders/artistsBuilder');

async function create(name, country) {
	let newArtist = await artistsRepository.create(name, country);
	return artistsbuilder.buildArtist(newArtist);
}

async function findAll() {
	let artistList = await artistsRepository.findAll();
	return artistsbuilder.buildArtists(artistList);
}

async function update(id, name, country) {
	return await artistsRepository.update(id, name, country);
}

async function del(id) {
	return await artistsRepository.del(id);
}

async function findAllWithSongs() {
	const [ artistList, songList ] = await Promise.all(
		artistsRepository.findAll(),
		songsRepository.findAll()
	);

	let artistListWithSongs = artistList.map((artist) => {
		let songListByArtist = songList.filter((song) => song.artist_id === artist.id);
		return artistsbuilder.buildArtist({ ...artist, songList: songListByArtist });
	});

	return artistListWithSongs;
}

module.exports = { create, findAll, update, del, findAllWithSongs };
