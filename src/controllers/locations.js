const express = require('express');
const router = express.Router();
const rickAndMortyService = require('../services/rickAndMortyService');

/**
 * Get a listing of locations.
 */
router.get('/', async (req, res) => {
    try{
        const filters = {
            page : parseInt(req.query.page) || 1,
            name: req.query.name || '',
            dimension: req.query.dimension || '',
        }

        const response = await rickAndMortyService.getLocationList(filters);
        const locations = response.data.results;
        const totalPages = response.data.info.pages;
        const totalCount = response.data.info.count;

        res.render('locations', { locations, filters, totalPages, totalCount });
    } catch (error) {
        next(error);
    }
});

module.exports = router;