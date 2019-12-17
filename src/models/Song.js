class Song {
	constructor(id, name, price, genre, artist) {
		Object.assign(this, { id, name, price, genre, artist });
	}
}

module.exports = Song;
