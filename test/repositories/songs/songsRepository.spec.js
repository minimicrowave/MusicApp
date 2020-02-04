const { expect } = require('chai');
const songsRepository = require('../../../src/repositories/songs');
const { closeConnection } = require('../../../src/db');

describe('songsRepository', () => {
	let newSong, songList;
	afterAll(closeConnection);
	beforeEach(async () => {
		newSong = await songsRepository.create('Something', 0.0, 'Something Else');
	});

	it('should return all the songs', async () => {
		songList = await songsRepository.findAll();
		expect(songList).to.be.an('array');
		expect(songList[0].name).to.equal('hello world');
	});

	it('should add song', async () => {
		expect(newSong).to.be.an('object');
	});

	it('should update song', async () => {
		const id = 2,
			name = 'what world',
			price = 13.02,
			genre = 'something',
			artistID = 4;

		const result = await songsRepository.patch(id, name, price, genre, artistID);
		expect(result.affectedRows).to.equal(1);
	});

	it.skip('should delete song', async () => {
		const result = await songsRepository.del(newSong.insertId);
		expect(result.affectedRows).to.equal(1);
	});
});
