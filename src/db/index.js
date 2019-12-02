const db = require('mysql2/promise');
const config = require('config');
const { host, user, password, database } = config.get('db');

const pool = db.createPool({ host, user, password, database });

async function query(queryString, params) {
	let connection = await pool.getConnection();

	// Start transaction
	await connection.query('START TRANSACTION');

	// Execute query
	const [ result ] = await connection.query(queryString, params);

	// Rollback transaction
	connection.query('ROLLBACK');

	return result;
}

function closeConnection() {
	pool.end();
}

module.exports = { query, closeConnection };
