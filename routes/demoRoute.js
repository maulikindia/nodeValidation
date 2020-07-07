
let expres = require('express');

let router = expres.Router();

let comments = require('../models/comments');
let user = require('../models/user');
let admin = require('../models/admin');
//add comments
router.post('/', async (req, res) => {
    let bodyData = req.body;
    await comments.create(bodyData, async (err, data) => {
        if (err) {
            res.json(err)
        }
        else if (data !== null) {
            res.json(data)
        }
    });
});

//add admin

router.post('/admin', async (req, res) => {

    let bodyData = req.body;
    await admin.create(bodyData, async (err, data) => {
        if (err) {
            res.json(err)
        }
        else if (data !== null) {
            res.json(data)
        }
    });
});

//add user
router.post('/user', async (req, res) => {
    let bodyData = req.body;
    await user.create(bodyData, async (err, data) => {
        if (err) {
            res.json(err)
        }
        else if (data !== null) {
            res.json(data)
        }
    });
});

//get comments by populate
router.get('/', async (req, res) => {

    await comments.find({}, async (err, data) => {
        if (err) {
            res.json(err)
        }
        else if (data !== null) {
            res.json(data)
        }
    }).populate('userId');
})

//delete comments
router.delete('/', async (req, res) => {

    await comments.deleteMany({}, async (err, data) => {
        if (err) {
            res.json(err)
        }
        else {
            res.json("deleted")
        }
    })

});


//express body validation
// const { validateRequest, check } = require('express-validator');

router.post('/check', async (req, res) => {
    req.checkBody('a', 'it should not be empty').isLength({ min: 5 }).withMessage('length of the string required minimum 5 characters')
    let erros = req.validationErrors();
    if (erros) {
        return res.json({ err: erros[0].msg, status: false });
    }
    else {
        return res.json({ a: req.body.a, status: true });
    }
});


module.exports = router;