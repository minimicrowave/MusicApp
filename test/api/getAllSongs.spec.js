const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../src/server');
const songService = require('../../src/services/songs');

chai.use(chaiHttp); // Chai HTTP plugin

const { expect } = chai;

describe('GET /songs', () => {
	afterAll(songService.closeConnection);
	describe('Sucessful Request', () => {
		it('should return a list of songs', async () => {
			const response = await chai.request(server).get('/songs');
			expect(response.body.songs.every((element) => element instanceof Object)).to.be.true;
		});
	});
});
