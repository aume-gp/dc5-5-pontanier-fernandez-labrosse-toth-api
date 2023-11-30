import Link from "next/link";

const Form = ({
  type,
  campaign,
  handleDelete,
  setCampaign,
  submitting,
  handleSubmit,
}) => {
  return (
    <section className="w-full flex justify-center mt-5">
      <div className="container flex justify-center">
        <div className="shadow-lg flex flex-col p-5">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-2xl flex flex-col gap-7 "
          >
            <label>
              <span>Titre de la campagne</span>
            </label>
            <input
              type="text"
              name="name"
              value={campaign.name}
              onChange={(e) =>
                setCampaign({ ...campaign, name: e.target.value })
              }
            />

            <label>
              <span className="font-satoshi font-semibold text-base text-gray-700">
                Votre Campagne
              </span>
            </label>
            <textarea
              value={campaign.description}
              onChange={(e) =>
                setCampaign({ ...campaign, description: e.target.value })
              }
              required
              className=""
            />

            <label>
              <span className="font-satoshi font-semibold text-base text-gray-700">
                Date de début
              </span>
            </label>
            <input
              type="date"
              value={campaign.start_date}
              onChange={(e) =>
                setCampaign({ ...campaign, start_date: e.target.value })
              }
              required
              className=""
            />
            <label>
              <span className="font-satoshi font-semibold text-base text-gray-700">
                Date de fin
              </span>
            </label>
            <input
              type="date"
              value={campaign.end_date}
              onChange={(e) =>
                setCampaign({ ...campaign, end_date: e.target.value })
              }
              required
              className=""
            />
            <label>
              <span className="font-satoshi font-semibold text-base text-gray-700">
                Budget
              </span>
            </label>
            <input
              type="number"
              value={campaign.budget}
              onChange={(e) =>
                setCampaign({ ...campaign, budget: e.target.value })
              }
              required
              className=""
            />

            <div className="flex-end mx-3 mb-5 gap-4">
              <Link href="/" className="text-gray-500 text-sm">
                Annuler
              </Link>

              <button
                type="submit"
                disabled={submitting}
                className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
              >
                {submitting ? `${type}ing...` : type}
              </button>
              {handleDelete ? (
                <button
                  onClick={handleDelete}
                  type="delete"
                  className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
                >
                  Supprimer la campagne
                </button>
              ) : (
                ""
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;
