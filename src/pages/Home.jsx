import { useState, useEffect } from "react";
import coiffeursData from "../assets/coiffeurs.json"; // Assurez-vous que le chemin est correct

const Home = () => {
  const [randomCoiffeurs, setRandomCoiffeurs] = useState([]);

  useEffect(() => {
    const getRandomCoiffeurs = () => {
      const shuffled = [...coiffeursData.data.features].sort(
        () => 0.5 - Math.random()
      );
      return shuffled.slice(0, 4);
    };

    setRandomCoiffeurs(getRandomCoiffeurs());
  }, []);

  return (
    <div>
      <section className="relative bg-gradient-to-r from-teal-500 to-blue-600 text-white py-48">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Des coiffeurs aux noms farfelus !
          </h1>
          <p className="text-xl mb-8">
            Voici lencyclopédie en ligne des coiffeurs aux noms tous plus
            cocasses les uns que les autres.
          </p>
          <a
            href="/data"
            className="bg-white text-teal-600 px-8 py-3 rounded-full text-xl font-semibold transition duration-300 hover:bg-teal-100"
          >
            Découvrir
          </a>
        </div>
      </section>
      <section id="discover" className="py-16 bg-white text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
          {randomCoiffeurs.map((coiffeur, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="p-4">
                <h3 className="text-2xl font-semibold text-teal-600 mb-3">
                  {coiffeur.properties.nom}
                </h3>
                <p className="text-gray-700 mb-4">
                  {coiffeur.properties.ville}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
