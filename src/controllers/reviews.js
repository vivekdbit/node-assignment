const express = require('express');
const router = express.Router();
const laravelService = require('../services/laravelService');

/**
 * Get a listing of locations.
 */
router.get('/', async (req, res, next) => {
    try{
        const response = await laravelService.getReviewsList();
        const reviews = response.data;
        
        res.render('reviews', { reviews });
    } catch (error) {
        next(error);
    }
});

module.exports = router;