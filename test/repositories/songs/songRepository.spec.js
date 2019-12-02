const { expect } = require('chai');
const songRepository = require('../../../src/repositories/songs');
const { closeConnection } = require('../../../src/db');

describe('songRepository', () => {
	let newSong;
	afterAll(closeConnection);
	beforeAll(async () => {
		newSong = await songRepository.insertSong('Something', 0.0, 'Something Else');
	});

	it('should return all the songs', async () => {
		const results = await songRepository.findAllSongs();
		expect(results).to.be.an('array');
		expect(results[0].name).to.equal('hello world');
	});

	it('should add song', async () => {
		expect(newSong).to.be.an('object');
	});

	it('should update song', async () => {
		const { id, name, price, genre, artistID } = {
			id: 2,
			name: 'what world',
			price: 13.02,
			genre: 'something',
			artistID: 4
		};

		const result = await songRepository.updateSong(id, name, price, genre, artistID);
		expect(result).to.be.an('object');
	});

	it('should delete song', async () => {
		const result = await songRepository.deleteSong(newSong.insertId);
		expect(result.affectedRows).to.equal(1);
	});
});
