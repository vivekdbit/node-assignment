const charactersRoutes = require('../controllers/characters');
const episodesRoutes = require('../controllers/episodes');
const locationsRoutes = require('../controllers/locations');
const reviewsRoutes = require('../controllers/reviews');

module.exports = (app) => {
    // Register character routes
    app.use('/characters', charactersRoutes);

    // Register episode routes
    app.use('/episodes', episodesRoutes);

    // Register location routes
    app.use('/locations', locationsRoutes);

    // Register reviews routes
    app.use('/reviews', reviewsRoutes);
};