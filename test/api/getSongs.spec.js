const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../src/server');
const songService = require('../../src/services/songs');

chai.use(chaiHttp); // Chai HTTP plugin

const { expect } = chai;
describe('Songs API', () => {
	afterAll(songService.closeConnection);

	describe('GET /songs', () => {
		describe('Sucessful Request', () => {
			it('should return a list of songs', async () => {
				const response = await chai.request(server).get('/songs');
				expect(response.body.songs.every((element) => element instanceof Object)).to.be.true;
				expect(response.status).to.be.equal(200);
			});
		});
	});

	describe('GET /songs/:id', () => {
		describe('Successful Request', () => {
			it('should return a song', async () => {
				const response = await chai.request(server).get('/songs/1');
				expect(response.status).to.be.equal(200);
				expect(response.body.song).to.be.an.instanceof(Object);
				expect(response.body.song.id).to.equal(1);
			});
		});
		describe('Unsuccessful Request', () => {
			it('should return 404 with message', async () => {
				const response = await chai.request(server).get('/songs/0');
				expect(response.status).to.be.equal(400);
				expect(response.body.song).to.be.an.instanceof(Object);
				expect(response.body.song.id).to.equal(1);
			});
		});
	});
});
