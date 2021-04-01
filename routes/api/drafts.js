const express = require('express');
const router = express.Router();
const passport = require('passport');

const Draft = require('../../models/Draft');
const validateDraftInput = require('../../validation/drafts');

router.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  Draft.find({ author: req.user }).lean()
    .populate({ path: 'author', select: 'firstName lastName' })
    .populate({ path: 'category', select: 'name' })
    .then(drafts => res.json(drafts))
    .catch(err => res.status(404).json({ nodraftsfound: 'No drafts found' }));
});

router.get('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  Draft.findOne({ _id: req.params.id, author: req.user }).lean()
    .populate({ path: 'author', select: 'firstName lastName' })
    .populate({ path: 'category', select: 'name' })
    .then(draft => res.json(draft))
    .catch(err => res.status(404).json({ nodraftfound: 'No draft found with that ID' }));
});

router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  const { errors, isValid } = validateDraftInput(req.body);

  if (!isValid) return res.status(400).json(errors);

  const newDraft = new Draft({
    subject: req.body.subject,
    theme: req.body.theme,
    body: req.body.body,
    author: req.user.id,
    category: req.body.category || null
  });

  newDraft.save().then(draft => res.json(draft));
});

router.put('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  const { errors, isValid } = validateDraftInput(req.body);

  if (!isValid) return res.status(400).json(errors);

  Draft.findOne({ _id: req.params.id, author: req.user })
    .then(draft => {
      draft.subject = req.body.subject;
      draft.theme = req.body.theme;
      draft.body = req.body.body;
      draft.category = req.body.category || null;

      draft.save().then(draft => res.json(draft));
    })
    .catch(err => res.status(404).json({ nodraftfound: 'No draft found with that ID' }));
});

router.delete('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  Draft.findOneAndDelete({ _id: req.params.id, author: req.user })
    .then(draft => res.json(draft))
    .catch(err => res.status(404).json({ nodraftfound: 'No draft found with that ID' }));
});

module.exports = router;