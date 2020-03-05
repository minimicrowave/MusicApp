const songService = require('../songs')

async function applyDiscountToSongList(percentageDiscount) {
    let songList = await songService.findAllWithArtists();

	return songList.map((song) => {
		song['price'] = song['price'] * (percentageDiscount / 100);
		return song;
	});
}

module.exports = { applyDiscountToSongList };
