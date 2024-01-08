const Poetry = require('../models/poetryModel');

exports.getAllPoetries = async (req, res) => {
  try {
    const poetries = await Poetry.find();
    res.status(200).json({
      status: 'success',
      results: poetries.length,
      poetries,
    });
  } catch (err) {}
};

exports.createPoetry = async (req, res) => {
  try {
    const poetry = await Poetry.create(req.body);
    console.log(poetry);
    res.status(201).json({
      status: 'success',
      poetry,
    });
  } catch (err) {
    res.status(404).json({ status: 'fail' });
  }
};
