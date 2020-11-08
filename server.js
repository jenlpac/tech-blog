const express = require('express');
// const session = require('express-session');
// const exphbs = require("express-handlebars");
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;
// const sequelize = require("./config/connection");
app.get('/', (req, res) => {
    res.send('Site Under Construction');
});

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
    // sequelize.sync({ force: false });
});