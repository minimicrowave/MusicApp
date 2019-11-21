const QUERIES = {
	SONGS: {
		LIST: 'SELECT * FROM songs',
		INSERT: 'INSERT INTO songs (name, price, genre) values (?, ?, ?)',
		UPDATE: 'UPDATE songs SET name = ?, price = ? ,genre = ? WHERE id = ?',
		DELETE: 'DELETE FROM songs WHERE id = ?'
	}
};

module.exports = QUERIES;
