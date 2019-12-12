const db = require('../../db');
const Artist = require('../../models/Artist');
const { ARTISTS } = require('../../constants/queries');
const { INSERT, LIST, UPDATE, DELETE } = ARTISTS;

async function create(name, country) {
	let artist = await db.query(INSERT, [ name, country ]);
	let { savedName, savedCountry } = artist;

	return new Artist(savedName, savedCountry);
}

async function findAll() {
	let artistList = await db.query(LIST);
	return artistList.map(({ name, country }) => new Artist(name, country));
}

async function patch(id, name, country) {
	return db.query(UPDATE, [ name, country, id ]);
}

async function remove(id) {
	return db.query(DELETE, [ id ]);
}

module.exports = { create, findAll, patch, remove };
