const mongoose = require("mongoose");

const quoteSchema = new mongoose.Schema({
  authorId: {
    type: String,
  },
  author: {
    type: String,
  },
  text: {
    type: String,
  },
});

const Quote = mongoose.model("quote", quoteSchema);

module.exports = Quote;
