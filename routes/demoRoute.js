
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
    req.checkBody('b').isLength({ min: 1 }).withMessage('please enter b')
    let erros = req.validationErrors();
    if (erros) {
        return res.send(erros);
    }
    else {
        return res.json({ a: req.body.a, status: true });
    }
});


let demo = require('../models/demo');
//insert data into demo model if data is validates successfully.
router.post('/demo', async (req, res) => {


    req.checkBody('name').isLength({ min: 5 }).withMessage('name should have minimum 5 charcaters').isLength({ max: 25 }).withMessage('Name should not be more than 25 characters')
    req.checkBody('rollNo').isNumeric().withMessage('please enter roll number in Numeric only').isLength({ min: 1 }).withMessage('please enter rollNo')
    req.checkBody('email').isEmail().isLength({ max: 50 }).withMessage('email can not be more than 50 characters').isLength({ min: 11 }).withMessage('please enter email with more than 11 characters')
    req.checkBody('role').notEmpty().withMessage('it should not be null')

    let errors = req.validationErrors();
    if (errors) {
        return res.send(errors);
    }
    else {
        let bodyData = req.body;
        await demo.create(bodyData, async (err, respo) => {

            if (err) {
                return res.json({ status: false, msg: err, data: [] });
            }
            else if (respo !== null) {
                return res.json({ status: true, msg: '', data: respo });
            }
        });

    }

});

module.exports = router;