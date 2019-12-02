const { expect } = require('chai');
const songRepository = require('../../src/repositories/songs');

describe('rollback', () => {
	afterAll(songRepository.closeConnection);

	it('should rollback after insertion', async () => {
		const allSongs = await songRepository.findAllSongs();
		const noOfSongs = allSongs.length;

		await songRepository.insertSong('Hello', 20, 'hi');

		const allNewSongs = await songRepository.findAllSongs();
		const noOfNewSongs = allNewSongs.length;

		expect(noOfSongs).to.equal(noOfNewSongs);
	});
});
