const { expect } = require('chai');
const songsRepository = require('../../src/repositories/songs');

describe('rollback', () => {
	afterAll(songsRepository.closeConnection);

	it('should rollback after insertion', async () => {
		const allSongs = await songsRepository.findAll();
		const noOfSongs = allSongs.length;

		await songsRepository.create('Hello', 20, 'hi');

		const allNewSongs = await songsRepository.findAll();
		const noOfNewSongs = allNewSongs.length;

		expect(noOfSongs).to.equal(noOfNewSongs);
	});

	it('should rollback after deletion', async () => {
		const allSongs = await songsRepository.findAll();
		const noOfSongs = allSongs.length;

		const songID = allSongs[0].id;

		await songsRepository.del(songID);

		const allNewSongs =  await songsRepository.findAll();
		const noOfNewSongs = allNewSongs.length;

		expect(noOfSongs).to.equal(noOfNewSongs);
	});
});
