const db = require('../../db');
const { ARTISTS } = require('../../constants/queries');
const { INSERT, LIST, UPDATE, DELETE } = ARTISTS;

async function insertArtist(name, country) {
	return db.query(INSERT, [ name, country ]);
}

async function findAllArtists() {
	return db.query(LIST);
}

async function updateArtist(id, name, country) {
	return db.query(UPDATE, [ name, country, id ]);
}

async function deleteArtist(id) {
	return db.query(DELETE, [ id ]);
}

module.exports = { insertArtist, findAllArtists, updateArtist, deleteArtist };
