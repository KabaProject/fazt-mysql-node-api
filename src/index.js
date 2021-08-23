// IMPORTS
const express = require('express');
const app = express();

const { employeesRouter } = require('./Routes');

// SETTINGS
app.set('port', process.env.PORT || 8000);

// MIDDLEWARES
app.use(express.json());

// ROUTING
app.use('/', employeesRouter);

// RUNNING SERVER
app.listen(app.get('port'), () => {
    console.log(`Server running on port ${app.get('port')}`);
})