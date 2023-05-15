const express = require('express');
const path = require('path');
const routes = require('./routes');
const app = express();
const PORT = 3001;

app.use(routes);

app.listen(PORT, () => {
    console.log('server listening on port 3001');
});