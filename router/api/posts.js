const express = require('express');
const router = express.Router();


// @route    POST api/posts
// @desc     Register post
// @access   Public
router.get('/', (req, res) => res.send('Post Send'));

module.exports = router;