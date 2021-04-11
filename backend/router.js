const express = require('express');
const Router = express.Router;
const router = new Router();
const contactformEntriesController = require('./controller/contactform-entries');
const newsletterSubscriptionsController = require('./controller/newsletter-subscriptions');

router.post('/contactformEntries', contactformEntriesController.postContactformEntries);

router.post('/newsletterSubscriptions', newsletterSubscriptionsController.postNewsletterSubscriptions);

module.exports = router;