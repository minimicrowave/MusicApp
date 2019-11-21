const { expect } = require('chai');
const songRepository = require('../../../src/repositories/songs');
const { closeConnection } = require('../../../src/db');

describe('songRepository', () => {
	afterAll(closeConnection);

	it('should return all the songs', async () => {
		const results = await songRepository.findAllSongs();
		expect(results).to.be.an('array');
		expect(results[0].name).to.equal('hello world');
	});

	it('should add song', async () => {
		const newSong = {
			name: 'bye world',
			price: 13.01,
			genre: 'non-cultural'
		};
		const result = await songRepository.insertSong(newSong);
		expect(result).to.be.an('object');
	});

	it('should update song', async () => {
		const updatedSong = {
			id: 2,
			name: 'what world',
			price: 13.02,
			genre: 'something'
		};

		const result = await songRepository.updateSong(updatedSong);
		expect(result).to.be.an('object');
	});

	it('should delete song', async () => {
		const songID = 19;

		const result = await songRepository.deleteSong(songID);
		expect(result.affectedRows).to.equal(1);
	});
});
