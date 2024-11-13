import { useState } from "react";
import { Link } from "react-router-dom"; // Importer Link pour les redirections
import coiffeursData from "../assets/coiffeurs.json"; // Assurez-vous que le chemin est correct

const ITEMS_PER_PAGE = 10;

const Tableau = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(
    coiffeursData.data.features.length / ITEMS_PER_PAGE
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const selectedCoiffeurs = coiffeursData.data.features.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <div className="container mx-auto px-6 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Liste des Coiffeurs
      </h2>
      <table className="min-w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr>
            <th className="py-3 px-5 bg-teal-600 text-white font-semibold text-left">
              Nom
            </th>
            <th className="py-3 px-5 bg-teal-600 text-white font-semibold text-left">
              Adresse
            </th>
            <th className="py-3 px-5 bg-teal-600 text-white font-semibold text-left">
              Code Postal
            </th>
            <th className="py-3 px-5 bg-teal-600 text-white font-semibold text-left">
              Voir sur la carte
            </th>
          </tr>
        </thead>
        <tbody>
          {selectedCoiffeurs.map((coiffeur, index) => (
            <tr key={index} className="border-t">
              <td className="py-3 px-5">{coiffeur.properties.nom}</td>
              <td className="py-3 px-5">{coiffeur.properties.addresse}</td>
              <td className="py-3 px-5">{coiffeur.properties.codepostal}</td>
              <td className="py-3 px-5">
                {/* Lien vers la page data/map avec l'index de la ligne */}
                <Link
                  to={`/data/map?index=${startIndex + index}`} // Redirige vers la carte avec l'index approprié
                  className="text-teal-600 hover:text-teal-800"
                >
                  📍
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center items-center mt-6">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 mx-1 rounded ${
            currentPage === 1
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-teal-600 text-white hover:bg-teal-700"
          }`}
        >
          Précédent
        </button>
        <span className="mx-2 text-gray-700">
          Page {currentPage} sur {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 mx-1 rounded ${
            currentPage === totalPages
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-teal-600 text-white hover:bg-teal-700"
          }`}
        >
          Suivant
        </button>
      </div>
    </div>
  );
};

export default Tableau;
