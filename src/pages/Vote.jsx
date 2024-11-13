import { useState } from "react";
import { useSpring, animated } from "@react-spring/web"; // Importer les hooks de react-spring
import coiffeursData from "../assets/coiffeurs.json"; // Assurez-vous que le chemin est correct

const Vote = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState(null);

  const coiffeurs = coiffeursData.data.features;

  const handleSwipe = (direction) => {
    setSwipeDirection(direction);
  };

  const changeCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % coiffeurs.length);
  };
  const props = useSpring({
    transform: `translateX(${
      swipeDirection === "right"
        ? "100%"
        : swipeDirection === "left"
        ? "-100%"
        : "0%"
    })`,
    opacity: swipeDirection ? 0 : 1,
    config: { tension: 200, friction: 20 },
    onRest: () => {
      if (swipeDirection) {
        changeCard();
        setSwipeDirection(null);
      }
    },
  });

  const currentCoiffeur = coiffeurs[currentIndex];

  return (
    <div className="container mx-auto px-6 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Swipez pour voter !
      </h2>
      <div className="flex justify-center items-center">
        <animated.div
          style={props}
          className="w-96 h-96 bg-white rounded-lg shadow-xl flex justify-center items-center p-6"
        >
          <div className="text-center">
            <h3 className="text-xl font-bold">
              {currentCoiffeur.properties.nom}
            </h3>
            <p>{currentCoiffeur.properties.addresse}</p>
            <p>{currentCoiffeur.properties.codepostal}</p>
          </div>
        </animated.div>
      </div>
      <div className="flex justify-center mt-4 text-2xl">
        <button
          onClick={() => handleSwipe("left")}
          className="px-4 py-2 mx-4 bg-red-200 text-white rounded-full hover:bg-red-300"
        >
          ❌
        </button>
        <button
          onClick={() => handleSwipe("right")}
          className="px-4 py-2 mx-4 bg-green-200 text-white rounded-full hover:bg-green-300"
        >
          🧡
        </button>
      </div>
    </div>
  );
};

export default Vote;
