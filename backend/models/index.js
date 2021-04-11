const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb+srv://${process.env.ATLAS_USERNAME}:${process.env.ATLAS_PASSWORD}@sesame.45sn7.mongodb.net/Sesame?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})
.then(() => {
  console.log('⚡️ Database connected!');
}) 
.catch((error) => {
  console.log('🔥 Database not connected!', error);
});

module.exports = mongoose;