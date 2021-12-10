const Quote = require("../models/Quote.js");

module.exports.quote_post = async (req, res) => {
  try {
    const quote = await Quote.create(req.body);
    res.status(200).json(quote);
  } catch (err) {
    console.log({ err });
    res.status(400).json({ err });
  }
};

module.exports.quotes_get = async (req, res) => {
  console.log("getting quotes");
  try {
    const quotes = await Quote.find();
    return res.status(200).json(quotes);
  } catch (err) {
    console.log({ err });
    res.status(400).json({ err });
  }
};
