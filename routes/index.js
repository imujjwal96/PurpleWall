var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.status(200);
    res.json({
        name: "Greenwall"
    });
});

module.exports = router;
