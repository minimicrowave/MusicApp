const db = require('../../db');
const { SONGS } = require('../../constants/queries');
const { LIST, INSERT, UPDATE, DELETE } = SONGS;

function findAllSongs() {
	return db.query(LIST);
}

function insertSong(name, price, genre, artistID) {
	return db.query(INSERT, [ name, price, genre, artistID ]);
}

function updateSong(id, name, price, genre, artistID) {
	return db.query(UPDATE, [ name, price, genre, artistID, id ]);
}

function deleteSong(id) {
	return db.query(DELETE, [ id ]);
}

module.exports = {
	findAllSongs,
	insertSong,
	updateSong,
	deleteSong,
	closeConnection: db.closeConnection
};
