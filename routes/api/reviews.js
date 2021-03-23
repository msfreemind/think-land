const express = require('express');
const router = express.Router();
const passport = require('passport');

const Review = require('../../models/Review');
const validateReviewInput = require('../../validation/reviews');

router.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  Review.find({ $or: [{ reviewee: req.user }, { reviewer: req.user }] })
    .then(reviews => res.json(reviews))
    .catch(err => res.status(404).json({ noreviewsfound: 'No reviews found' }));
});

router.get('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  Review.findOne({ $or: [{ _id: req.params.id, reviewee: req.user }, { _id: req.params.id, reviewer: req.user }] })
    .then(review => res.json(review))
    .catch(err => res.status(404).json({ noreviewfound: 'No review found with that ID' }));
});

router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  const { errors, isValid } = validateReviewInput(req.body);

  if (!isValid) return res.status(400).json(errors);

  const newReview = new Review({
    text: req.body.text,
    essay: req.body.essayId,
    reviewee: req.body.revieweeId,
    reviewer: req.user.id
  });

  newReview.save().then(review => res.json(review));
});

router.put('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  const { errors, isValid } = validateReviewInput(req.body);

  if (!isValid) return res.status(400).json(errors);

  Review.findOne({ _id: req.params.id, reviewer: req.user })
    .then(review => {
      review.text = req.body.text;
      review.save().then(review => res.json(review));
    })
    .catch(err => res.status(404).json({ noreviewfound: 'No review found with that ID' }));
});

router.delete('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  Review.findOneAndDelete({ _id: req.params.id, reviewer: req.user })
    .then(review => res.json(review))
    .catch(err => res.status(404).json({ noreviewfound: 'No review found with that ID' }));
});

module.exports = router;