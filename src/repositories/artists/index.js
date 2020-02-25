const db = require('../../db');
const { DatabaseError } = require('../../errors');
const { ARTISTS } = require('../../constants/queries');
const { FIND, INSERT, LIST, UPDATE, DELETE } = ARTISTS;

function create(name, country) {
	return db.query(INSERT, [ name, country ]);
}

async function find(id) {
	const [ artist ] = await db.query(FIND, [ id ]);
	if (artist) return artist;
	throw new DatabaseError(`Artist with id: ${id} does not exist.`);
}

function findAll() {
	return db.query(LIST);
}

function patch(id, name, country) {
	return db.query(UPDATE, [ name, country, id ]);
}

function del(id) {
	return db.query(DELETE, [ id ]);
}

module.exports = { create, find, findAll, patch, del };
