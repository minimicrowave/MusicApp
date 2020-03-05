const { expect } = require('chai');
const artistService = require('../../../src/services/artists');
const Artist = require('../../../src/models/Artist');
const { closeConnection } = require('../../../src/db/mysql');

describe('artistService', () => {
	let newArtist;

	afterAll(closeConnection);
	
	beforeEach(async () => {
		newArtist = await artistService.create('Bruh', 'Brotherland');
	});

	it('should return artist instance', async () => {
		expect(newArtist).to.be.an.instanceof(Artist);
    });
    
    it('should return an array of artist instances', async() => {
        let artistList = await artistService.findAll();
        expect(artistList).to.be.an('array');
        expect(artistList[0]).to.be.an.instanceof(Artist);
	})
});
