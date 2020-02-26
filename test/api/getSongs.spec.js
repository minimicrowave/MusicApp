const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../src/server');
const songService = require('../../src/services/songs');

chai.use(chaiHttp); // Chai HTTP plugin

const { expect } = chai;
describe('Songs API', () => {
	afterAll(songService.closeConnection);

	describe('GET /songs', () => {
		describe('Successful Request', () => {
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
			it('should return 422 with error message', async () => {
				const response = await chai.request(server).get('/songs/0');
				expect(response.status).to.be.equal(422);
				expect(response.body.message).to.equal('Song with id: 0 does not exist.');
			});
		});
	});

	// describe('POST /songs', () => {
	// 	describe('Success Request', () => {
	// 		it('should return the new song created', async () => {
	// 			const newSong = { name: 'Song 1', price: 12.34, genre: 'Genre 1', artistID: 2 };

	// 			const response = await chai.request(server).post('/songs').send(newSong);
	// 			console.log(response.body)
	// 			expect(response.status).to.be.equal(200);
	// 			expect(response.body.song).to.be.an.instanceof(Object);
	// 		});
	// 	});
	// });
});
