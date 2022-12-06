const express = require('express');

const mangasController = require('./controllers/mangasController')

const router = express.Router();

router.get('/mangas/weekly', mangasController.getWeeklyMangas);
router.get('/mangas/:id', mangasController.getMangaList);

module.exports = router;
