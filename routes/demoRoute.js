
let expres = require('express');

let router = expres.Router();

let comments = require('../models/comments');
let user = require('../models/user');
let admin = require('../models/admin');
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


router.delete('/', async (req, res) => {

    await comments.deleteMany({}, async (err, data) => {
        if (err) {
            res.json(err)
        }
        else {
            res.json("deleted")
        }
    })

})
module.exports = router;