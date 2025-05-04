const express = require('express');
const router = express.Router();
const Ad = require('../models/Ad');

router.get('/', async (req, res) => {
  const ads = await Ad.find();
  res.json(ads);
});

router.post('/', async (req, res) => {
  const newAd = new Ad(req.body);
  await newAd.save();
  res.status(201).json(newAd);
});

module.exports = router;