const { expect } = require('chai');
const db = require('../../src/db/mysql');

describe('db', () => {
	describe('.query()', () => {
		afterAll(db.closeConnection);

		it('should return result when "1=1"', async () => {
            const results = await db.query('SELECT 1=1');
			expect(results).to.exist;
		});
	});
});
