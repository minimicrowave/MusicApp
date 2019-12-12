const db = require('mysql2/promise');
const config = require('config');
const { host, user, password, database } = config.get('db');

const pool = db.createPool({ host, user, password, database });

async function query(queryString, params) {
	console.log('env');
	let connection = await pool.getConnection();

	// Start transaction
	await connection.query('START TRANSACTION');

	// Execute query
	const [ result ] = await connection.query(queryString, params);

	// Rollback or commit transaction according to environment
	if (process.env.NODE_ENV === 'test') {
		connection.query('ROLLBACK');
	} else {
		connection.query('COMMIT');
	}

	return result;
}

function closeConnection() {
	pool.end();
}

module.exports = { query, closeConnection };
