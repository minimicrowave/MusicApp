const artistRepository = require('../../repositories/artists');
const songRepository = require('../../repositories/songs');
const Artist = require('../../models/Artist');

async function create(name, country) {
	let newArtist = await artistRepository.create(name, country);
	return new Artist(newArtist.id, newArtist.name, newArtist.country);
}

async function findAll() {
	let artistList = await artistRepository.findAll();
	artistList = artistList.map(({ id, name, country }) => new Artist(id, name, country));
	return artistList;
}

async function update(id, name, country) {
	return await artistRepository.update(id, name, country);
}

async function del(id) {
	return await artistRepository.del(id);
}

async function findAllWithSongs() {
    artistList = await findAll();
    songList = await songService.findAll();

    artistList = artistList.map(artist => {
        let artistId = artist.id;

        let songListByArtist = songList.filter(song => )
    })
}

module.exports = { create, findAll, update, del };
