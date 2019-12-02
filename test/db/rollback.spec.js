const { expect } = require('chai');
const songRepository = require('../../src/repositories/songs');

describe('rollback', () => {
	afterAll(songRepository.closeConnection);

	it('should rollback after insertion', async () => {
		const allSongs = await songRepository.findAllSongs();
		const noOfSongs = allSongs.length;
		console.log('here', noOfSongs);

		await songRepository.insertSong('Hello', 20, 'hi');

		const allNewSongs = await songRepository.findAllSongs();
		const noOfNewSongs = allNewSongs.length;
		console.log('hi', noOfNewSongs);

		expect(noOfSongs).to.equal(noOfNewSongs);
	});
});
