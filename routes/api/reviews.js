const express = require('express');
const router = express.Router();
const passport = require('passport');

const Review = require('../../models/Review');
const Essay = require('../../models/Essay');
const validateReviewInput = require('../../validation/reviews');

router.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  Review.find({ $or: [{ reviewee: req.user }, { reviewer: req.user }] }).lean()
    .populate({ path: 'reviewee', select: 'firstName lastName' })
    .populate({ path: 'reviewer', select: 'firstName lastName' })
    .then(reviews => res.json(reviews))
    .catch(err => res.status(404).json({ noreviewsfound: 'No reviews found' }));
});

router.get('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  Review.findOne({ $or: [{ _id: req.params.id, reviewee: req.user }, { _id: req.params.id, reviewer: req.user }] }).lean()
    .populate({ path: 'reviewee', select: 'firstName lastName' })
    .populate({ path: 'reviewer', select: 'firstName lastName' })
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
    reviewer: req.user.id,
    submitted: req.body.submitted
  });

  newReview.save().then(review => res.json(review));

  if (req.body.submitted) {
    Essay.findOne({ _id: req.body.essayId })
    .then(essay => {
      essay.reviews.push(newReview._id);
      essay.save();
    })
  }  
});

router.put('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  const { errors, isValid } = validateReviewInput(req.body);

  if (!isValid) return res.status(400).json(errors);

  Review.findOne({ _id: req.params.id, reviewer: req.user })
    .then(review => {
      console.log(req.body)
      review.text = req.body.text;
      review.submitted = req.body.submitted;
      review.save().then(review => res.json(review));

      if (req.body.submitted) {
        Essay.findOne({ _id: req.body.essayId })
        .then(essay => {
          essay.reviews.push(review._id);
          essay.save();
        })
      }
    })
    .catch(err => res.status(404).json({ noreviewfound: 'No review found with that ID' }));
});

router.delete('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  Review.findOneAndDelete({ _id: req.params.id, reviewer: req.user })
    .then(review => res.json(review))
    .catch(err => res.status(404).json({ noreviewfound: 'No review found with that ID' }));
});

module.exports = router;