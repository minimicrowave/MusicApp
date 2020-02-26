const express = require('express');
const router = express.Router();
const songsController = require('../../controllers/songs');

// router.use('/', (req, res, next) => {
//     if (req.isLoggedIn()) {
//         next();
//     } else {
//         res.json({ message: 'user not authorized' })
//     }
// })

router.get('/songs', songsController.getAllSongs);
router.get('/songs/:id', songsController.getSong);
router.post('/songs', songsController.createSong);

module.exports = router;
