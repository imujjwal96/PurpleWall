var express = require('express');
var router = express.Router();

Editor = require('../../models/editor');
var jwt    = require('jwt-simple');
var config = require('../../config/db.js');
/**
 * GET all editors (with pagination)
 */
router.get('/', function (req, res, next) {
    res.status(200);
    var limit = typeof req.query.limit == "undefined" ? 10 : parseInt(req.query.limit);
    var page = typeof req.query.page == "undefined" ? 1 : parseInt(req.query.page);
    res.json({
        message: "GET all editors",
        limit: limit,
        page: page
    });
});

/**
 *  GET single editor
 */
router.get('/:id', function (req, res, next) {
    res.status(200);
    var id = req.params.id;
    res.json({
        message: "GET editor with id: " + id
    });
});

/**
 * Register new Editors
 */
router.post('/register', function (req, res, next) {
    
    if (!req.body.username || !req.body.password) {
        res.json({
            success: false,
            message: 'Please fill all the credentials'
        });
    } else {
        var newEditor  = new Editor({
            username: req.body.username,
            password: req.body.password,
            email:req.body.email,
            name:req.body.name    
    });

        newEditor.save(function (err) {
            if (err) {
                return res.json({
                    success: false,
                    message: 'Username taken.'
                });
            }
            res.json({
                success: true,
                message: 'User created Successfully'
            });
        });
    }
});

/**
 * Authenticate User
 */
router.post('/authenticate', function (req, res, next) {
    Editor.findOne({
        username: req.body.username
    }, function (err, editor) {
        if (err) {
            throw err;
        }
        if (!editor) {
            res.send({
                success: false,
                message: 'Authentication failed.'
            });
        } else {
            Editor.comparePassword(req.body.password, editor.password, function (err, isMatch) {
                if (isMatch && !err) {
                    var token = jwt.encode(editor, config.secret);
                    res.json({
                        success: true,
                        token: 'JWT ' + token,
                        message:'Authentication Success.'
                    });
                } else {
                    res.send({
                        success: false,
                        message: 'Passwords did not match.'
                    })
                }
            });
        }
    });
});

module.exports = router;
