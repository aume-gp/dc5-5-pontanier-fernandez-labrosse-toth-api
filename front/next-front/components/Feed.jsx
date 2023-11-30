"use client";

import { useState, useEffect } from "react";
import Card from "@components/Card";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Feed = () => {
  const [allCampaigns, SetAllCampaigns] = useState([]);

  const router = useRouter();

  const handleCreate = () => {
    router.push(`/create-campaign`);
  };

  const FetchCampaigns = async () => {
    try {
      const response = await fetch(`http://localhost:3001/api/campaigns`);
      const data = await response.json();
      // console.log(data);
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
            <button type="button" onClick={handleCreate} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Créer une campagne</button>
          </div>

          <div className="flex flex-wrap">
            {allCampaigns.map((campaign) => (
              <Card
                key={campaign.id}
                campaign={campaign}
                // handleClick={handleCLick}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Feed;