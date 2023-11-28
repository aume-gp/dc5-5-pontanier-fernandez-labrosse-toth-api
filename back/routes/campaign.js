const express = require('express');
const router = express.Router();

const campaignCtrl = require('../controllers/campaign');

router.get('/', campaignCtrl.getAllCampaigns);
router.get('/:id', campaignCtrl.getCampaignById);
router.post('/', campaignCtrl.createCampaign);
router.delete('/:id', campaignCtrl.deleteCampaign);

module.exports = router;