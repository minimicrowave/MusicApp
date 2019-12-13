const db = require('../../db');
const { SONGS } = require('../../constants/queries');
const { LIST, INSERT, UPDATE, DELETE } = SONGS;

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
	findAll,
	create,
	patch,
	del,
	closeConnection: db.closeConnection
};
