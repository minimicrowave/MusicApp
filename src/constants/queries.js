const QUERIES = {
	SONGS: {
		LIST: 'SELECT * FROM songs',
		INSERT: 'INSERT INTO songs (name, price, genre, artist_id) values (?, ?, ?, ?)',
		UPDATE: 'UPDATE songs SET name = ?, price = ?, genre = ?, artist_id = ? WHERE id = ?',
		DELETE: 'DELETE FROM songs WHERE id = ?'
	},
	ARTISTS: {
		LIST: 'SELECT * from artists',
		INSERT: 'INSERT INTO artists (name, country) values (?, ?)',
		UPDATE: 'UPDATE artists SET name = ? , country = ? WHERE id = ?',
		DELETE: 'DELETE FROM artists WHERE id = ?'
	}
};

module.exports = QUERIES;
