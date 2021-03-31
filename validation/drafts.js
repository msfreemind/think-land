const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateEssayInput(data) {
  let errors = {};

  data.subject = validText(data.subject) ? data.subject : '';
  data.theme = validText(data.theme) ? data.theme : '';

  if (!Validator.isLength(data.subject, { max: 30 })) {
    errors.subject = 'Subject must be less than 30 characters';
  }

  if (!Validator.isLength(data.theme, { max: 140 })) {
    errors.theme = 'Theme must be less than 140 characters';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};