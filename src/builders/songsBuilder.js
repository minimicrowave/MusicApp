const Song = require('../models/Song');
const Artist = require('../models/Artist');

module.exports = {
	buildSong({ id, name, price, genre, artist }) {
		return new Song(id, name, price, genre, artist);
	},
	buildSongs(songList) {
		return songList.map((song) => this.buildSong(song));
	},
	buildAllSongsWithArtists(songList, artistList) {
		return songList.map(song => {
			const { id, name, price, genre, artist_id } = song;
			const artist = artistList.find(artist => artist.id === artist_id);
			return this.buildSong({
				id, name, price, genre, artist,
			});
		});
	}
};
