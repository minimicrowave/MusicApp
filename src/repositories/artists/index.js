const db = require('../../db');
const QUERIES = require('../../constants/queries');

async function insertArtist({ name, country }) {
	const result = db.query(QUERIES.ARTISTS.INSERT, [ name, country ]);
	return result;
}

async function findAllArtists() {
	const result = db.query(QUERIES.ARTISTS.LIST);
	return result;
}

async function updateArtist({ id, name, country }) {
	const result = db.query(QUERIES.ARTISTS.UPDATE, [ name, country, id ]);
	return result;
}

async function deleteArtist(id) {
	const result = db.query(QUERIES.ARTISTS.DELETE, [ id ]);
	return result;
}

module.exports = { insertArtist, findAllArtists, updateArtist, deleteArtist };
