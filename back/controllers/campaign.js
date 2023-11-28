const uuid = require('uuid/v1');
const Campaign = require('../models/campaigns');

exports.getAllCampaigns = (req, res, next) => {
  Campaign.find().then(
    (campaigns) => {
      res.status(200).json(campaigns);
    }
  ).catch(
    () => {
      res.status(500).send(new Error('Database error!'));
    }
  );
};

exports.getOneCampaign = (req, res, next) => {
  Campaign.findById(req.params.id).then(
    (campaign) => {
      if (campaign) {
        res.status(200).json(campaign);
      } else {
        res.status(404).send('Campaign not found');
      }
    }
  ).catch(
    () => {
      res.status(500).send(new Error('Database error!'));
    }
  );
};

exports.createCampaign = (req, res, next) => {
  const newCampaign = {
    id: Date.now(),
    ...req.body
  };
  Campaign.addCampaign(newCampaign).then(
    (createdCampaign) => {
      res.status(201).json(createdCampaign);
    }
  ).catch(
    () => {
      res.status(500).send(new Error('Error creating campaign'));
    }
  );
};

exports.deleteCampaign = (req, res, next) => {
  Campaign.deleteCampaign(req.params.id).then(
    () => {
      res.status(200).send('Campaign deleted');
    }
  ).catch(
    (error) => {
      res.status(500).send(new Error(error));
    }
  );
};
