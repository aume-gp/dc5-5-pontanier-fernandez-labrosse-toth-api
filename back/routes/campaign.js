const express = require('express');
const router = express.Router();

const campaignCtrl = require('../controllers/campaign');

router.get('/', campaignCtrl.getAllCampaigns);
router.get('/:id', campaignCtrl.getOneCampaign);
router.post('/', campaignCtrl.createCampaign);

module.exports = router;