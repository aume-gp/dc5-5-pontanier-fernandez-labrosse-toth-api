const uuid = require('uuid/v1');
const Campaign = require('../models/campaigns');

// Pour trouver toutes les campagnes (Requête 1)
exports.getAllCampaigns = (req, res, next) => {
  Campaign.find().then(
    (campaigns) => {
      // OK si ça marche
      res.status(200).json(campaigns);
    }
  ).catch(
    () => {
      // Erreur si ça marche pas
      res.status(500).send(new Error('Erreur database'));
    }
  );
};

// Pour trouver une campagne par son ID (Requête 2)
exports.getOneCampaign = (req, res, next) => {
  Campaign.findById(req.params.id).then(
    (campaign) => {
      if (campaign) {
        // OK si ça marche
        res.status(200).json(campaign);
      } else {
        // Erreur si ça la trouve pas
        res.status(404).send('Campagne non trouvée');
      }
    }
  ).catch(
    () => {
      // Erreur si ça marche pas
      res.status(500).send(new Error('Erreur database'));
    }
  );
};

// Pour ajouter une campagne (Requête 3)
exports.createCampaign = (req, res, next) => {
  const newCampaign = {
    // On utilise les données reçues dans le corps de la requête
    ...req.body
  };
  Campaign.addCampaign(newCampaign).then(
    (createdCampaign) => {
      // "Created" si ça marche
      res.status(201).json(createdCampaign);
    }
  ).catch(
    () => {
      // Erreur si ça marche pas
      res.status(500).send(new Error('Erreur création campagne'));
    }
  );
};

// Pour supprimer une campagne (Requête 4)
exports.deleteCampaign = (req, res, next) => {
  Campaign.deleteCampaign(req.params.id).then(
    () => {
      // OK si ça marche
      res.status(200).send(`Campagne ${req.params.id} supprimée`);
    }
  ).catch(
    (error) => {
      // Erreur si ça la trouve pas
      res.status(404).send(error);
    }
  );
};