const express = require('express');
const router = express.Router();


// @route    POST api/auth
// @desc     Register auth
// @access   Public
router.get('/', (req, res) => res.send('Auth Send'));

module.exports = router;