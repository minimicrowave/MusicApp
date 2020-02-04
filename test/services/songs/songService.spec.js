const { expect } = require('chai');
const songService = require('../../../src/services/songs');
const Song = require('../../../src/models/Song');
const Artist = require('../../../src/models/Artist');
const { closeConnection } = require('../../../src/db');

describe('songService', () => {
	let newSong;

	afterAll(closeConnection);
	beforeEach(async () => {
		newSong = await songService.create('A Song', 12.43, 'JonRE', 4);
	});

	it('should return song instance', async () => {
		expect(newSong).to.be.an.instanceof(Song);
	});

	it('should return an array of song instances', async () => {
		let songList = await songService.findAll();
		expect(songList).to.be.an('array');
		expect(songList[0]).to.be.an.instanceof(Song);
	});

	it('should return an array of song instances, with artist instance', async () => {
		let songListWithArtists = await songService.findAllWithArtists();
        expect(songListWithArtists).to.be.an('array');

        let songWithArtist = songListWithArtists[0];
        expect(songWithArtist).to.be.an.instanceof(Song);
        expect(songWithArtist.artist).to.be.undefined;
	});
});
