const express = require('express');
const path = require('path');

const app = express();
const PORT = 3001;

app.listen(PORT, () => {
    console.log('server listening on port 3001');
});