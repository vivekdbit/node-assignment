const express = require('express');
const router = express.Router();
const rickAndMortyService = require('../services/rickAndMortyService');
const characterService = require('../services/characterService');

/**
 * Get a listing of charactors.
 */
router.get('/', async (req, res) => {
    
    const filters = {
        page : parseInt(req.query.page) || 1,
        status: req.query.status || '',
        name: req.query.name || '',
        species: req.query.species || '',
    }

    try {
        const response = await rickAndMortyService.getCharacterList(filters);
        const characters = response.data.results;
        const totalPages = response.data.info.pages;
        const totalCount = response.data.info.count;
    
        res.render('characters', { characters, filters, totalPages, totalCount });
    } catch (error) {
        next(error);
    }
});

/**
 * Download character PDF.
 */
router.get('/generate-profile-doc/:id', async (req, res, next) => {
    
    try {
        const characterId = parseInt(req.params.id);
        const character = await rickAndMortyService.getCharacter(characterId);
        
        if (!character) {
            return res.status(404).json({ error: 'Character not found' });
        }

        // Generate the PDF
        const pdfFileName = characterService.generatePDF(character.data);

        // Set the response headers for the download
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', `attachment; filename=${character.data.name}.pdf`);

        // Send the PDF file to the client for download
        res.sendFile(pdfFileName);
    } catch (error) {
        next(error); // Pass any error that occurs in this route handler to the error-handling middleware
    }
});

module.exports = router;