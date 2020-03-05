const db = require('../../db');
const { DatabaseError } = require('../../errors');
const { SONGS } = require('../../constants/queries');
const { FIND, LIST, INSERT, UPDATE, DELETE } = SONGS;

async function find(id) {
	const [ song ] = await db.query(FIND, [ id ]);
	if (song) return song;
	throw new DatabaseError(`Song with id: ${id} does not exist.`);
}

function findAll() {
	return db.query(LIST);
}

function create(name, price, genre, artistID) {
	return db.query(INSERT, [ name, price, genre, artistID ]);
}

function patch(id, name, price, genre, artistID) {
	return db.query(UPDATE, [ name, price, genre, artistID, id ]);
}

function del(id) {
	return db.query(DELETE, [ id ]);
}

module.exports = {
	find,
	findAll,
	create,
	patch,
	del,
	closeConnection: db.closeConnection,
	init() {
		return db.query(SONGS.CREATE_TABLE);
	},
};
