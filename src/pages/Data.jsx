import { Link } from "react-router-dom";

const Data = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-3xl font-bold mb-8 text-gray-700">
        Choisissez comment afficher vos données
      </h2>
      <div className="flex space-x-6">
        {/* Bouton pour afficher les données en tableau */}
        <Link
          to="/data/table"
          className="flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
        >
          <span className="mr-2">
            {/* Icône de tableau */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path d="M3 3h18v18H3V3zm2 2v3h14V5H5zm0 5v3h14v-3H5zm0 5v3h14v-3H5z" />
            </svg>
          </span>
          <span>Tableau</span>
        </Link>

        {/* Bouton pour afficher les données en carte */}
        <Link
          to="/data/map"
          className="flex items-center bg-teal-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-teal-700 transition duration-300"
        >
          <span className="mr-2">
            {/* Icône de carte */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path d="M9 2l7 2 5-2v16l-7 2-5-2-5 2V4l5-2zm-1 4.4v11.2l5 1.5V7.9l-5-1.5zm7-1.5v11.2l5-1.5V4.4l-5 1.5z" />
            </svg>
          </span>
          <span>Carte</span>
        </Link>
      </div>
    </div>
  );
};

export default Data;
