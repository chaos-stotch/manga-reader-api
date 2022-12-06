const mangaListJson = require('./mangaList.json')
const weeklyMangasJson = require('./weeklyTop.json')

const getMangaList = ()=> {
    return mangaListJson
}

const getWeeklyMangas = ()=> {
    return weeklyMangasJson
}

module.exports = {
    getWeeklyMangas,
    getMangaList
}
