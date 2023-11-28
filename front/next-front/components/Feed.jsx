"use client";

import { useState, useEffect } from "react";

const Feed = ({ data }) => {
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
          <div className="titles">
            <h1>Nos produits</h1>
            <h2>Une gamme d'articles exclusifs</h2>
          </div>

          <div className="flex flex-wrap">
            {/* {data.map((campaigns) => (
        <Card
          key={campaigns._id}
          campaign={campaigns}
        />
      ))} */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Feed;
