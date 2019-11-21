const db = require('../../db');
const QUERIES = require('../../constants/queries');

async function findAllSongs() {
	const result = await db.query(QUERIES.SONGS.LIST);
	return result;
}

async function insertSong({ name, price, genre }) {
	const result = await db.query(QUERIES.SONGS.INSERT, [ name, price, genre ]);

	return result;
}

async function updateSong({ id, name, price, genre }) {
	const result = await db.query(QUERIES.SONGS.UPDATE, [ name, price, genre, id ]);

	return result;
}

async function deleteSong(id) {
	const result = await db.query(QUERIES.SONGS.DELETE, [ id ]);

	return result;
}

module.exports = { findAllSongs, insertSong, updateSong, deleteSong };
