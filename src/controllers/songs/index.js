const songsService = require('../../services/songs');

module.exports = {
	async getAllSongs(_, response) {
		response.json({ songs: await songsService.findAll() });
	},
	async getSong(request, response) {
		const { id } = request.params;
		try {
			response.json({ song: await songsService.findSongById(id) });
		} catch (e) {
			response.status(422).json({ message: e.message });
		}
	},
	// async createSong(request, response) {
	// 	const { name, price, genre, artistID } = request.body;
	// 	let x = await songsService.create(name, price, genre, artistID);
	// 	console.log(name, price, genre, artistID);
	// 	try {
	// 		response.json({ song: await songsService.create(name, price, genre, artistID) });
	// 	} catch (e) {}
	// }
};
