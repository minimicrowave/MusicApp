class Artist {
	constructor(id, name, country, songList) {
		Object.assign(this, { id, name, country, songList });
	}

	setSongList(songList) {
		this.songList = songList;
	}
}

module.exports = Artist;
