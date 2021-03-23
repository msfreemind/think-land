const express = require('express');
const router = express.Router();
const passport = require('passport');

const Essay = require('../../models/Essay');
const validateEssayInput = require('../../validation/essays');

router.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  Essay.find({ author: req.user })
    .then(essays => res.json(essays))
    .catch(err => res.status(404).json({ noessaysfound: 'No essays found' }));
});

router.get('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  Essay.findOne({ _id: req.params.id, author: req.user })
    .then(essay => res.json(essay))
    .catch(err => res.status(404).json({ noessayfound: 'No essay found with that ID' }));
});

router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  const { errors, isValid } = validateEssayInput(req.body);

  if (!isValid) return res.status(400).json(errors);

  const newEssay = new Essay({
    subject: req.body.subject,
    theme: req.body.theme,
    body: req.body.body,
    author: req.user.id
  });

  newEssay.save().then(essay => res.json(essay));
});

router.put('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  const { errors, isValid } = validateEssayInput(req.body);

  if (!isValid) return res.status(400).json(errors);

  Essay.findOne({ _id: req.params.id, author: req.user })
    .then(essay => {
      essay.subject = req.body.subject;
      essay.theme = req.body.theme;
      essay.body = req.body.body;

      essay.save().then(essay => res.json(essay));
    })
    .catch(err => res.status(404).json({ noessayfound: 'No essay found with that ID' }));
});

router.delete('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  Essay.findOneAndDelete({ _id: req.params.id, author: req.user })
    .then(essay => res.json(essay))
    .catch(err => res.status(404).json({ noessayfound: 'No essay found with that ID' }));
});

module.exports = router;