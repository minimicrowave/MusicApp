class DatabaseError extends Error {
	constructor(message) {
		super(message);
		this.name = 'DatabaseError';
		this.message = message;
	}
}

module.exports = { DatabaseError };
