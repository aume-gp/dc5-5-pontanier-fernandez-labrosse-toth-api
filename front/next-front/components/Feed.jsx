"use client";

import { useState, useEffect } from "react";
import Card from '@components/Card'
import Link from 'next/Link'

const Feed = () => {
  const [allCampaigns, SetAllCampaigns] = useState([]);

  const FetchCampaigns = async () => {
    try {
      const response = await fetch(`http://localhost:3001/api/campaigns`);
      const data = await response.json();
      console.log(data);
      SetAllCampaigns(data);
    } catch (error) {
      console.error("Error :", error);
    }
  };

  useEffect(() => {
    FetchCampaigns();
  }, []);

  return (
    <>
      <section className="w-full flex justify-center">
        <div className="container">
          <div className="titles flex justify-between">
            <h1>Nos Campagnes</h1>
            <Link href="/">Créer une campagne</Link>
          </div>

          <div className="flex flex-wrap">
            {allCampaigns.map((campaign) => (
        <Card
          key={campaign.id}
          campaign={campaign}
        />
      ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Feed;
