const songService = require('../../services/songs');

module.exports = {
	async getAllSongs(request, response) {
		response.json({ songs: await songService.findAll() });
	}
};
