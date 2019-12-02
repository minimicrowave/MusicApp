const db = require('mysql2/promise');
const config = require('config');
const { host, user, password, database } = config.get('db');

const pool = db.createPool({ host, user, password, database });

async function query(queryString, params) {
	let connection = await pool.getConnection();

	await connection.query('START TRANSACTION');

	const [ result ] = await connection.query(queryString, params);

	connection.query('ROLLBACK');

	return result;
}

function closeConnection() {
	pool.end();
}

module.exports = { query, closeConnection };
