const { expect } = require('chai');
const songRepository = require('../../src/repositories/songs');

describe('rollback', () => {
	afterAll(songRepository.closeConnection);

	it('should rollback after insertion', async () => {
		const allSongs = await songRepository.findAll();
		const noOfSongs = allSongs.length;

		await songRepository.create('Hello', 20, 'hi');

		const allNewSongs = await songRepository.findAll();
		const noOfNewSongs = allNewSongs.length;

		expect(noOfSongs).to.equal(noOfNewSongs);
	});

	it('should rollback after deletion', async () => {
		const allSongs = await songRepository.findAll();
		const noOfSongs = allSongs.length;

		const songID = allSongs[0].id;

		await songRepository.del(songID);

		const allNewSongs =  await songRepository.findAll();
		const noOfNewSongs = allNewSongs.length;

		expect(noOfSongs).to.equal(noOfNewSongs);
	});
});
