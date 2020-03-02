class Artist {
	constructor(id, name, country, songList = []) {
		this.id = id;
		this.name = name;
		this.country = country;
		this.songList = songList;
	}
}

module.exports = Artist;
