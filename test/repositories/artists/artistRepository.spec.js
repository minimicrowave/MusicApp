const { expect } = require('chai');
const artistRepository = require('../../../src/repositories/artists');
const { closeConnection } = require('../../../src/db');

describe('songRepository', () => {
	afterAll(closeConnection);

	it('should add artist', async () => {
		const newArtist = {
			name: 'Bruh',
			country: 'Brotherland'
		};

		const result = await artistRepository.insertArtist(newArtist);
		expect(result).to.be.an('object');
	});

	it('should return all artists', async () => {
		const results = await artistRepository.findAllArtists();
		expect(results).to.be.an('array');
		expect(results[0].name).to.equal('Sis');
	});

	it('should update artist', async () => {
		const updatedArtist = {
			id: 1,
			name: 'Sis',
			country: 'Sisland'
		};
		const result = await artistRepository.updateArtist(updatedArtist);
		expect(result).to.be.an('object');
	});

	it('should delete artist', async () => {
		const artistID = 7;

		const result = await artistRepository.deleteArtist(artistID);
		expect(result.affectedRows).to.equal(1);
	});
});
