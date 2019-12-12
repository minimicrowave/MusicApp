class Song {
	constructor(name, price, genre, artistID) {
        Object.assign(this, { name, price, genre, artistID });
    }
}

module.exports = Song;