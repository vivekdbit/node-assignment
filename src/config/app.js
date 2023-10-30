/*
|--------------------------------------------------------------------------
| Applications Configs
|--------------------------------------------------------------------------
*/

require('dotenv').config();

module.exports = {
    APP_NAME: process.env.APP_NAME,
    APP_ENV: process.env.APP_ENV,
    APP_PORT: process.env.APP_PORT || 3000,
};