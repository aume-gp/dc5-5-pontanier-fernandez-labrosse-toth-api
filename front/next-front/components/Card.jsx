"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Card = ({ campaign }) => {
  console.log(campaign.id);

  const router = useRouter();

  const handleEdit = () => {
    router.push(`/update-campaign?id=${campaign.id}`);
  };

  const handleDelete = async () => {
    const hasConfirmed = confirm(
      "Are you sure you want to delete this campaign?"
    );

    if (hasConfirmed) {
      try {
        await fetch(`/api/campaign/${campaign.id.toString()}`, {
          method: "DELETE",
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="flex-1 me-4 my-4 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {campaign.name}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {" "}
          {campaign.description}
        </p>

        <p>
          Du {campaign.start_date} au {campaign.end_date}
        </p>
        <span>Budget : {campaign.budget}</span>
        <div className="mt-5 flex-center gap-4 border-t border-gray-100 pt-3">
          <p
            className="font-inter text-sm green_gradient cursor-pointer"
            onClick={handleEdit}
          >
            Modifier
          </p>
          <p
            className="font-inter text-sm orange_gradient cursor-pointer"
            onClick={handleDelete}
          >
            Supprimer
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
