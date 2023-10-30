const charactersRoutes = require('../controllers/characters');
const episodesRoutes = require('../controllers/episodes');
const locationsRoutes = require('../controllers/locations');

module.exports = (app) => {
    // Register character routes
    app.use('/characters', charactersRoutes);

    // Register episode routes
    app.use('/episodes', episodesRoutes);

    // Register location routes
    app.use('/locations', locationsRoutes);
};