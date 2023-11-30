const express = require('express');
const router = express.Router();

const campaignCtrl = require('../controllers/campaign');

// Les différentes routes et méthodes pour chaque requête
router.get('/', campaignCtrl.getAllCampaigns);
router.get('/:id', campaignCtrl.getOneCampaign);
router.post('/', campaignCtrl.createCampaign);
router.delete('/:id', campaignCtrl.deleteCampaign);

module.exports = router;