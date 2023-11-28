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