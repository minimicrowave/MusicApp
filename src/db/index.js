const db = require('mysql2');

const pool = db.createPool({
	host: 'localhost',
	user: 'serenelim',
	password: 'moomoo',
	database: 'music'
});

const promisePool = pool.promise();

async function query(queryString, params) {
	const [ result ] = await promisePool.query(queryString, params);
	return result;
}

function closeConnection() {
	pool.end();
}

module.exports = { query, closeConnection };
