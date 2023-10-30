const express = require("express");
const app = express();
const app_config = require('./src/config/app');

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/src/views');

// To serve static files
app.use(express.static("public"));

// setupRoutes with the app instance
const setupRoutes = require('./src/routes');
setupRoutes(app);

// Server Initiate
app.listen(app_config.APP_PORT, ()=>{
    console.log("Node server started on port", app_config.APP_PORT);
})

// Error Handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.statusCode || 500).send(err.message || 'Something went wrong!');
});