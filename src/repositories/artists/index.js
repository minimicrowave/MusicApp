const db = require('../../db');
const { ARTISTS } = require('../../constants/queries');
const { INSERT, LIST, UPDATE, DELETE } = ARTISTS;

async function create(name, country) {
	return db.query(INSERT, [ name, country ]);
}

async function findAll() {
	return db.query(LIST);
}

async function patch(id, name, country) {
	return db.query(UPDATE, [ name, country, id ]);
}

async function remove(id) {
	return db.query(DELETE, [ id ]);
}

module.exports = { create, findAll, patch, remove };
