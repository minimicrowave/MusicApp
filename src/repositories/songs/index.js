const db = require('../../db');
const Song = require('../../models/Song');
const { SONGS } = require('../../constants/queries');
const { LIST, INSERT, UPDATE, DELETE } = SONGS;

async function findAll() {
	let songList = await db.query(LIST);
	return songList.map(({ name, price, genre, artistID }) => new Song(name, price, genre, artistID));
}

async function create(name, price, genre, artistID) {
	let song = await db.query(INSERT, [ name, price, genre, artistID ]);

	let { savedName, savedPrice, savedGenre, savedArtistID } = song;
	return new Song(savedName, savedPrice, savedGenre, savedArtistID);
}

function patch(id, name, price, genre, artistID) {
	return db.query(UPDATE, [ name, price, genre, artistID, id ]);
}

function remove(id) {
	return db.query(DELETE, [ id ]);
}

module.exports = {
	findAll,
	create,
	patch,
	remove,
	closeConnection: db.closeConnection
};
