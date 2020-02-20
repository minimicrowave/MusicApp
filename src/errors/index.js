class DatabaseError extends Error {
	constructor(entity) {
		super(entity);
		this.name = 'DatabaseError';
		this.message = `${entity} does not exist.`;
	}
}

module.exports = { DatabaseError };
