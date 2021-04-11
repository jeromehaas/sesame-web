const NewsletterSubscriptions = require('../models/newsletter-subscriptions');

const postNewsletterSubscriptions = async (req, res) => {
  try { 
    const { email } = req.body;
    const newsletterSubscriptions = await NewsletterSubscriptions({ email }).save();
    console.log(` entry was created successfully!`);
    res.status(201);
    res.send(newsletterSubscriptions);
  } catch (error) {
    console.log(`🔥 ${error}`);
    res.status(400);
    res.send(error);
  }
};

module.exports = {
  postNewsletterSubscriptions
};