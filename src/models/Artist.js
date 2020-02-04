class Artist {
	constructor(id, name, country, songList = []) {
		Object.assign(this, { id, name, country, songList });
	}
}

module.exports = Artist;
