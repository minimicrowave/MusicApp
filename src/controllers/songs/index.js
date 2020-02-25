const songService = require('../../services/songs');

module.exports = {
	async getAllSongs(_, response) {
		response.json({ songs: await songService.findAll() });
	},
	async getSong(request, response) {
		const { id } = request.params;
		try {
			response.json({ song: await songService.findSongById(id) });
		} catch (e) {
			console.error(e.name);
			console.error(e.message);
			response.json({ status: 404 });
		}
	}
};
