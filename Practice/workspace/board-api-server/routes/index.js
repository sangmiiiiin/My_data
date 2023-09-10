var express = require('express');
var router = express.Router({mergeParams: true});

const userRouter = require('./users');
const boardRouter = require('./board');

router.use('/users', userRouter);
router.use('/boards', boardRouter);

module.exports = router;