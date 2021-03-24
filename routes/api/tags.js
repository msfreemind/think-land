const express = require('express');
const router = express.Router();
const Tag = require('../../models/Tag');

router.get('/', (req, res) => {
  Tag.find()
    .then(tags => res.json(tags))
    .catch(err => res.status(404).json({ notagsfound: 'No tags found' }));
});

module.exports = router;