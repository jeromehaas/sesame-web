const mongoose = require('./index.js');

const Schema = mongoose.Schema;

const contactFormSchema = new Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, required: true },
  message: { type: String, required: true }
});

const ContactForm = mongoose.model('ContactForm', contactFormSchema);

module.exports = ContactForm;