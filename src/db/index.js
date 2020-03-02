const db = require('mysql2/promise');
const sqlite = require('sqlite3');
const config = require('config');
const { isTestEnv } = require('../utils');
const { host, user, password, database } = config.get('db');

// MYSQL - Production DB

const pool = db.createPool({ host, user, password, database });

async function query(queryString, params) {
	let connection = await pool.getConnection();

	// Start transaction
	await connection.query('START TRANSACTION');

	// Execute query
	const [ result ] = await connection.query(queryString, params);

	// Rollback or commit transaction according to environment
	if (isTestEnv) {
		connection.query('ROLLBACK');
	} else {
		connection.query('COMMIT');
	}

	return result;
}

function closeConnection() {
	pool.end();
}

// SQLITE - Dev DB

const testDb = new sqlite.Database(':memory:');

async function testQuery(queryString, params = []) {
	let result = await testDb.run(queryString, params);
	console.log(result, queryString, params);
}

function closeTestDbConnection() {
	testDb.close((err) => {
		if (err) {
			return console.error(err.message);
		}
		console.log('Close the database connection.');
	});
}

// Select database according to environment

module.exports = {
	query: isTestEnv ? testQuery : query,
	closeConnection: isTestEnv ? closeTestDbConnection : closeConnection
};
