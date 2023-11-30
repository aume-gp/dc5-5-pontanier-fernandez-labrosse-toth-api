"use client";

import { useEffect, useState } from "react";

import Form from "@components/Form";

const CreateCampaign = () => {

  const [campaignData, setCampaignData] = useState({
    name: "",
    description: "",
    start_date: "",
    end_date: "",
    budget:""
  });
  const [submitting, setIsSubmitting] = useState(false);

  const CreateCampaign = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`http://localhost:3001/api/campaigns`, {
        method: "POST",
        body: JSON.stringify({
            name: campaignData.name,
            description: campaignData.description,
            start_date: campaignData.start_date,
            end_date: campaignData.end_date,
            budget: campaignData.budget,
        }),
      });

      if (response.ok) {
        router.push("/");
      } else {
        console.error("Error creating campaign:", response.statusText);
      }
    } catch (error) {
      console.error("Error creating campaign:", error);
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <Form
      type="Edit"
      campaign={campaignData}
      submitting={submitting}
      setCampaign = {setCampaignData}
      handleSubmit={CreateCampaign}
    />
  );
};

export default CreateCampaign;
