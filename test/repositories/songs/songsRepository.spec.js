const { expect } = require('chai');
const { closeConnection } = require('../../../src/db');
const { DatabaseError } = require('../../../src/errors');
const songsRepository = require('../../../src/repositories/songs');

describe('songsRepository', () => {
	let newSong, songList;
	afterAll(closeConnection);

	beforeAll(songsRepository.init);

	beforeEach(async () => {
		newSong = await songsRepository.create('hello world', 13.00, 'Something Else');
	});

	it('should return all the songs', async () => {
		songList = await songsRepository.findAll();
		expect(songList).to.be.an('array');
		expect(songList[0].name).to.equal('hello world');
	});

	it('should return one song', async () => {
		const id = 1;
		const song = await songsRepository.find(id);
		expect(song.name).to.equal('hello world');
		expect(song.price).to.equal(13.00);
	});

	it('should throw DatabaseError if song does not exist', async () => {
		try {
			const id = 0;
			await songsRepository.find(id);
		} catch (e) {
			expect(e).to.be.an.instanceOf(DatabaseError);
			expect(e.message).to.equal('Song with id: 0 does not exist.');
		}
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
		expect(result).to.equal(1);
	});

	it.skip('should delete song', async () => {
		const result = await songsRepository.del(newSong.insertId);
		expect(result.affectedRows).to.equal(1);
	});
});
