const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const artistsRepository = require('../../../src/repositories/artists');
const { DatabaseError } = require('../../../src/errors');
const { closeConnection } = require('../../../src/db');

chai.use(chaiAsPromised);
const { expect } = chai;

describe('artistsRepository', () => {
	let newArtist;
	afterAll(closeConnection);
	beforeEach(async () => {
		newArtist = await artistsRepository.create('Bruh', 'Brotherland');
	});

	it('should add artist', async () => {
		expect(newArtist).to.be.an('object');
	});

	it('should return one artist', async () => {
		const id = 1;
		const song = await artistsRepository.find(id);
		expect(song.name).to.be.equal('Sis');
		expect(song.country).to.be.equal('Sisland');
	});

	it('should throw DatabaseError if there is artist does not exist', async () => {
		const id = 0;
		await expect(artistsRepository.find(id)).to.eventually.be.rejectedWith(DatabaseError);
	});

	it('should return all artists', async () => {
		const results = await artistsRepository.findAll();
		expect(results).to.be.an('array');
		expect(results[0].name).to.equal('Sis');
	});

	it('should update artist', async () => {
		const id = 1,
			name = 'Sis',
			country = 'Sisland';

		const result = await artistsRepository.patch(id, name, country);
		expect(result.affectedRows).to.equal(1);
	});

	it.skip('should delete artist', async () => {
		const result = await artistsRepository.del(newArtist.insertId);
		expect(result.affectedRows).to.equal(1);
	});
});
