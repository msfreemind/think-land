const Validator = require('validator');
const validText = require('./valid-text');

function countWords(str) {
  if (Validator.isEmpty(str)) return 0;
  return str.trim().split(/\s+/).length;
}

module.exports = function validateEssayInput(data) {
  let errors = {};

  data.subject = validText(data.subject) ? data.subject : '';
  data.theme = validText(data.theme) ? data.theme : '';
  data.body = validText(data.body) ? data.body : '';
  data.category = validText(data.category) ? data.category : '';

  if (Validator.isEmpty(data.subject)) {
    errors.subject = 'Subject is required';
  }

  if (!Validator.isLength(data.subject, { max: 80 })) {
    errors.subject = 'Subject must be less than 80 characters';
  }

  if (Validator.isEmpty(data.theme)) {
    errors.theme = 'Theme is required';
  }

  if (!Validator.isLength(data.theme, { max: 140 })) {
    errors.theme = 'Theme must be less than 140 characters';
  }
  
  if (Validator.isEmpty(data.body)) {
    errors.body = 'Body text is required';
  }

  if (countWords(data.body) < 5) {
    errors.body = 'Body text must be 5 words or more';
  }

  if (Validator.isEmpty(data.category)) {
    errors.category = 'Category is required';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};