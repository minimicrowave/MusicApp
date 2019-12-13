const db = require('../../db');
const { ARTISTS } = require('../../constants/queries');
const { INSERT, LIST, UPDATE, DELETE } = ARTISTS;

function create(name, country) {
	return db.query(INSERT, [ name, country ]);
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

module.exports = { create, findAll, patch, del };
