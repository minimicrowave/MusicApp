const Song = require('../models/Song');

module.exports = {
	buildSong(song) {
		const { id, name, price, genre, artist } = song;
		return new Song(id, name, price, genre, artist);
	},
	buildSongs(songList) {
		return songList.map((song) => this.buildSong(song));
	},
	buildAllSongsWithArtists(songList, artistList) {
		return songList.map((song) => {
			const artist = artistList.find((artist) => artist.id === song.artist_id);
			return this.buildSong({
				...song,
				artist
			});
		});
	}
};
