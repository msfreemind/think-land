export const submittedReviews = reviews => {
  let results = [];

  reviews.forEach(review => {
    if (review.submitted) results.push(review)
  });

  return results;
};

export const draftReviews = state => {
  const reviews = Object.values(state.entities.reviews);
  let results = [];

  reviews.forEach(review => {
    if (!review.submitted && review.reviewee._id !== state.session.user.id ) {
      results.push(review)
    } 
  });

  return results;
};