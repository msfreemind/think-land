export const submittedReviews = reviews => {
  let results = [];

  reviews.forEach(review => {
    if (review.submitted) results.push(review)
  });

  return results;
};

export const draftReviews = reviews => {
  let results = [];

  reviews.forEach(review => {
    if (!review.submitted) results.push(review)
  });

  return results;
};