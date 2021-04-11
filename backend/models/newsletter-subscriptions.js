const mongoose = require('./index.js');

const Schema = mongoose.Schema;

const newsletterSubscriptionsSchema = new Schema({
  email: { type: String, required: true, unique: true,}
}, { timestamps: true });

const NewsletterSubscriptions = mongoose.model('NewsletterSubscriptions', newsletterSubscriptionsSchema);

module.exports = NewsletterSubscriptions;