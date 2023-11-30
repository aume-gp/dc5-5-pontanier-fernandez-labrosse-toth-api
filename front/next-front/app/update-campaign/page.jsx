"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Form from "@components/Form";

const UpdateCampaign = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const campaignId = searchParams.get("id");

   console.log(campaignId);

  const [campaignData, setCampaignData] = useState({
    name: "",
    description: "",
    start_date: "",
    end_date: "",
    budget:"",
  });
  const [submitting, setIsSubmitting] = useState(false);

  const getCampaignDetails = async () => {
    try {
      const response = await fetch(`http://localhost:3001/api/campaigns/${campaignId}`);
      const data = await response.json();
      console.log(data);
      setCampaignData({
        name: data.name,
        description: data.description,
        start_date: data.start_date,
        end_date: data.end_date,
        budget: data.budget,
      });
    } catch (error) {
      console.error("Error fetching campaign details:", error);
    }
  };

  useEffect(() => {
    if (campaignId) getCampaignDetails();
  }, [campaignId]);

  const UpdateCampaign = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!campaignId) return alert("Missing CampaignId!");

    try {
      const response = await fetch(`http://localhost:3001/api/campaigns/${campaignId}`, {
        method: "PATCH",
        body: JSON.stringify({
            name: data.name,
            description: data.description,
            start_date: data.start_date,
            end_date: data.end_date,
            budget: data.budget,
        }),
      });

      if (response.ok) {
        router.push("/");
      } else {
        console.error("Error updating campaign:", response.statusText);
      }
    } catch (error) {
      console.error("Error updating campaign:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  

  const DeleteCampaign = async (campaign) => {
    const hasConfirmed = confirm(
      "Are you sure you want to delete this campaign?"
    );

    if (hasConfirmed) {
      try {
        await fetch(`http://localhost:3001/api/campaigns/${campaign.id.toString()}`, {
          method: "DELETE",
        });

      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Form
      type="Edit"
      campaign={campaignData}
      submitting={submitting}
      setCampaign = {setCampaignData}
      handleSubmit={UpdateCampaign}
      handleDelete = {DeleteCampaign}
    />
  );
};

export default UpdateCampaign;
