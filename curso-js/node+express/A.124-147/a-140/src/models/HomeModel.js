const mongoose = require('mongoose');

const homeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
});

const homeModel = mongoose.model('Home', homeSchema);

module.exports = homeModel;
