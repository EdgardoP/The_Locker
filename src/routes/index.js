const express = require('express');
const router = express.Router();
var LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('/TheLocker');


router.get("/", (req, res) => {
    res.render('index');
});

module.exports = router;