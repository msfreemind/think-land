const Validator = require('validator');
const validText = require('./valid-text');

function countWords(str) {
  if (Validator.isEmpty(str)) return 0;
  return str.trim().split(/\s+/).length;
}

module.exports = function validateReviewInput(data) {
  let errors = {};

  data.text = validText(data.text) ? data.text : '';
  
  if (Validator.isEmpty(data.text)) {
    errors.text = 'Body text is required';
  }

  if (countWords(data.text) < 5) {
    errors.text = 'Body text must be 5 words or more';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};