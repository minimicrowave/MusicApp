const { expect } = require('chai');
const songRepository = require('../../../src/repositories/songs');
const { closeConnection } = require('../../../src/db');

describe('songRepository', () => {
	let newSong, songList;
	afterAll(closeConnection);
	beforeEach(async () => {
		newSong = await songRepository.insertSong('Something', 0.0, 'Something Else');
	});

	it('should return all the songs', async () => {
		songList = await songRepository.findAllSongs();
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

		const result = await songRepository.updateSong(id, name, price, genre, artistID);
		expect(result.affectedRows).to.be(1);
	});

	it('should delete song', async () => {
		const result = await songRepository.deleteSong(newSong.insertId);
		expect(result.affectedRows).to.equal(1);
	});
});
