const fs = require('fs');
const path = require('path');

// Chemin fichier JSON
const dataPath = path.join(__dirname, 'campaigns.json');

// Lire fichier JSON
function readCampaignsFile() {
  // Si pas de fichier, création d'un fichier + tableau vide
  if (!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, JSON.stringify([]));
  }
  const fileData = fs.readFileSync(dataPath);
  return JSON.parse(fileData);
}

// Sauvegarder la data des campagnes dans le fichier JSON
function saveCampaignsToFile(campaigns) {
  fs.writeFileSync(dataPath, JSON.stringify(campaigns, null, 2));
}

let campaigns = readCampaignsFile();

// Si le fichier JSON est vide, prendre le tableau campaigns donné
if (campaigns.length === 0) {
  campaigns = [
    {
      "id": 1,
      "name": "Campagne de lancement",
      "description": "Campagne promotionnelle pour le lancement de notre nouveau produit.",
      "start_date": "2023-01-01",
      "end_date": "2023-01-31",
      "budget": 5000
    },
    {
      "id": 2,
      "name": "Promotion de printemps",
      "description": "Offres spéciales pour la saison du printemps.",
      "start_date": "2023-03-01",
      "end_date": "2023-03-31",
      "budget": 3000
    },
    {
      "id": 3,
      "name": "Campagne estivale",
      "description": "Profitez de l'été avec nos offres exclusives.",
      "start_date": "2023-06-01",
      "end_date": "2023-08-31",
      "budget": 7000
    },
    {
      "id": 4,
      "name": "Back-to-School Sale",
      "description": "Préparez-vous pour la rentrée avec nos promotions exceptionnelles.",
      "start_date": "2023-08-15",
      "end_date": "2023-09-15",
      "budget": 4000
    },
    {
      "id": 5,
      "name": "Promotion d'automne",
      "description": "Découvrez nos offres spéciales pour la saison automnale.",
      "start_date": "2023-10-01",
      "end_date": "2023-11-15",
      "budget": 6000
    },
    {
      "id": 6,
      "name": "Holiday Extravaganza",
      "description": "Célébrez les fêtes avec nos offres festives.",
      "start_date": "2023-12-01",
      "end_date": "2023-12-31",
      "budget": 8000
    },
    {
      "id": 7,
      "name": "Nouvel An Nouvelles Offres",
      "description": "Commencez la nouvelle année avec nos offres exclusives.",
      "start_date": "2024-01-01",
      "end_date": "2024-01-31",
      "budget": 5500
    },
    {
      "id": 8,
      "name": "Love is in the Air",
      "description": "Offres spéciales pour la saison de la Saint-Valentin.",
      "start_date": "2024-02-01",
      "end_date": "2024-02-14",
      "budget": 2500
    },
    {
      "id": 9,
      "name": "Spring Clearance",
      "description": "Économisez gros avec nos articles en liquidation de printemps.",
      "start_date": "2024-04-01",
      "end_date": "2024-04-30",
      "budget": 3500
    },
    {
      "id": 10,
      "name": "Summer Flash Sale",
      "description": "Saisissez les offres éclair de l'été avant qu'elles ne disparaissent.",
      "start_date": "2024-07-01",
      "end_date": "2024-07-15",
      "budget": 4500
    }
  ];
  // Ensuite on sauvegarde
  saveCampaignsToFile(campaigns);
}

// Pour trouver toutes les campagnes (Requête 1)
exports.find = () => {
  return new Promise((resolve, reject) => resolve(JSON.parse(JSON.stringify(campaigns))));
}

// Pour trouver une campagne par son ID (Requête 2)
exports.findById = (id) => {
  return new Promise((resolve, reject) =>
    resolve(JSON.parse(JSON.stringify(campaigns)).find(campaign =>
      campaign.id == id)
    )
  );
}

// Pour ajouter une campagne (Requête 3)
exports.addCampaign = (newCampaign) => {
  return new Promise((resolve, reject) => {
    // On trie le tableau par ID
    const sortedCampaigns = campaigns.slice().sort((a, b) => a.id - b.id);

    // On parcourt pour trouver l'ID manquant sinon on prend l'ID max et on fait +1
    let newId = 1;
    for (const campaign of sortedCampaigns) {
      if (campaign.id !== newId) break;
      newId++;
    }

    newCampaign.id = newId;

    // On ajoute la campagne et on la sauvegarde dans le fichier
    campaigns.push(newCampaign);
    saveCampaignsToFile(campaigns);
    resolve(newCampaign);
  });
};

// Pour supprimer une campagne (Requête 4)
exports.deleteCampaign = (id) => {
  return new Promise((resolve, reject) => {
    // On trouve l'index de la campagne à supprimer
    const index = campaigns.findIndex(c => c.id == id);

    // Si la campagne est trouvée, on la supprime
    if (index !== -1) {
      campaigns.splice(index, 1);
      saveCampaignsToFile(campaigns);
      resolve();
    } else {
      // Si pas de campagne, erreur
      reject(`La campagne ${id} n'a pas été trouvée`);
    }
  });
};