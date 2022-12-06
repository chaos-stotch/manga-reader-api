const mangasModels = require('../models/mangasModels')

const getWeeklyMangas = (req, res) => {
    const weeklyMangas = mangasModels.getWeeklyMangas()
    return res.status(200).json(weeklyMangas);
}

const getMangaList = (req, res) => {
    const mangaList = mangasModels.getMangaList()
    return res.status(200).json(mangaList);
}

module.exports = {
    getWeeklyMangas,
    getMangaList
}
