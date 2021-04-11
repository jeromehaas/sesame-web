const ContactformEntries = require('../models/contactform-entries');

const postContactformEntries = async (req, res) => {
  try {
    const { firstname } = req.body;
    const { lastname } = req.body;
    const { email } = req.body;
    const { role } = req.body;
    const { message } = req.body;
    const contactformEntries = await ContactformEntries({ firstname, lastname, email, role, message }).save();
    console.log(`✅ entry was created successfully!`);
    res.status(201);
    res.send(contactformEntries);
  } catch (error) {
    console.log(`🔥   ${error}`);
    res.status(400);
    res.send(error)
  }
};

module.exports = {
  postContactformEntries
};