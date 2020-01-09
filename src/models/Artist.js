const { removeDuplicatesFromArray } = require('../utils');

class Artist {
	constructor(id, name, country, songList = []) {
		Object.assign(this, { id, name, country, songList });
	}

	setSongList(songList) {
		this.songList = songList;
	}

	addToSongList(song) {
		this.songList = removeDuplicatesFromArray([ ...this.songList, song ]);
	}
}

module.exports = Artist;
