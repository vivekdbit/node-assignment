const rickmortyapi = require('rickmortyapi')

async function getCharacterList(filters) {
    try {
        return await rickmortyapi.getCharacters(filters);
    } catch (error) {
        throw error;
    }
}

async function getCharacter(id) {
    try {
        return await rickmortyapi.getCharacter([id]);
    } catch (error) {
        throw error;
    }
}

async function getLocationList(filters) {
    try {
        return await rickmortyapi.getLocations(filters);
    } catch (error) {
        throw error;
    }
}

async function getepisodeList(filters) {
    try {
        return await rickmortyapi.getEpisodes(filters);
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getCharacterList,
    getLocationList,
    getepisodeList,
    getCharacter
};