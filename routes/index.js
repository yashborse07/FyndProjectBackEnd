const express = require('express');
const router = express.Router();

const formDataScema = require('../models/formData');
const donationDataScema = require('../models/donationData');
const feedbackDataScema = require('../models/feedbackData');
router.post('/form-data', async (req, res) => {
  try {
    const formData = new formDataScema(req.body);
    await formData.save();
    res.status(200).send(formData);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get('/all-form-data', async (req, res) => {
  try {
    const allformData = await formDataScema.find();
    res.json(allformData);
    
  } catch (err) {
    
    res.json({ err})
  }
});


router.post('/donation-Data', async (req, res) => {
  try {
    const donationData = new donationDataScema(req.body);
    await donationData.save();
    res.status(200).send(donationData);
  } catch (err) {
    res.status(400).send(err);
  }
});
router.post('/feedback-Data', async (req, res) => {
  try {
    const feedbackData = new feedbackDataScema(req.body);
    await feedbackData.save();
    res.status(200).send(feedbackData);
  } catch (err) {
    res.status(400).send(err);
  }
})
module.exports = router