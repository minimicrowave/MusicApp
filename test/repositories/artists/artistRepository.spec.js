const { expect } = require('chai');
const artistRepository = require('../../../src/repositories/artists');
const { closeConnection } = require('../../../src/db');

describe('artistRepository', () => {
	let newArtist;
	afterAll(closeConnection);
	beforeAll(async () => {
		newArtist = await artistRepository.insertArtist('Bruh', 'Brotherland');
	});

	it('should add artist', async () => {
		expect(newArtist).to.be.an('object');
	});

	it('should return all artists', async () => {
		const results = await artistRepository.findAllArtists();
		expect(results).to.be.an('array');
		expect(results[0].name).to.equal('Sis');
	});

	it('should update artist', async () => {
		const { id, name, country } = {
			id: 1,
			name: 'Sis',
			country: 'Sisland'
		};
		const result = await artistRepository.updateArtist(id, name, country);
		expect(result).to.be.an('object');
	});

	it('should delete artist', async () => {
		const result = await artistRepository.deleteArtist(newArtist.insertId);
		expect(result.affectedRows).to.equal(1);
	});
});
