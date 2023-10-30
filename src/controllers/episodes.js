const express = require('express');
const router = express.Router();
const rickAndMortyService = require('../services/rickAndMortyService');

/**
 * Get a listing of episodes.
 */
router.get('/', async (req, res) => {
    try{
        const filters = {
            page : parseInt(req.query.page) || 1,
            episode: req.query.episode || '',
            name: req.query.name || '',
            air_date: req.query.air_date || '',
        }
    
        const response = await rickAndMortyService.getepisodeList(filters);
        const episodes = response.data.results;
        const totalPages = response.data.info.pages;
        const totalCount = response.data.info.count;
    
        res.render('episodes', { episodes, filters, totalPages, totalCount });
    } catch (error) {
        next(error);
    }
});

module.exports = router;