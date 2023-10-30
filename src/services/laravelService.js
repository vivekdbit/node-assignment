const axios = require('axios');
const endpoints = require('../config/endpoints');

async function getReviewsList() {
    try {
        const response = await axios.get(`${endpoints.LARAVEL_ASSIGNMENT_ENDPOINT}reviews`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getReviewsList,
};