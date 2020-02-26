const { expect } = require('chai');
const songsService = require('../../../src/services/songs');
const Song = require('../../../src/models/Song');
const Artist = require('../../../src/models/Artist');
const { closeConnection } = require('../../../src/db');
const { DatabaseError } = require('../../../src/errors');

describe('songsService', () => {
	let newSong;

	afterAll(closeConnection);
	beforeEach(async () => {
		newSong = await songsService.create('X Song', 12.43, 'JonRE', 4);
	});

	it('should return song instance', async () => {
		expect(newSong).to.be.an.instanceof(Song);
	});

	it('should return song instance', async () => {
		const id = 1;
		let song = await songsService.findSongById(id);
		expect(song).to.be.an.instanceOf(Song);
	});

	it('should throw error if song does not exist', async () => {
		try {
			const id = 0;
			await songsService.findSongById(id);
		} catch (e) {
			expect(e).to.be.an.instanceOf(DatabaseError);
			expect(e.message).to.equal('Song with id: 0 does not exist.');
		}
	});

	it('should return an array of song instances', async () => {
		let songList = await songsService.findAll();
		expect(songList).to.be.an('array');
		expect(songList[0]).to.be.an.instanceof(Song);
	});

	it('should return an array of song instances, with artist instance', async () => {
		let songListWithArtists = await songsService.findAllWithArtists();
		expect(songListWithArtists).to.be.an('array');

		let songWithNoArtist = songListWithArtists[0];
		expect(songWithNoArtist).to.be.an.instanceof(Song);
		expect(songWithNoArtist.artist).to.be.undefined;

		let songWithArtist = songListWithArtists[1];
		expect(songWithArtist).to.be.an.instanceof(Song);
		expect(songWithArtist.artist).to.be.an.instanceof(Artist);
	});
});
