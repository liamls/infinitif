import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-gray-800 p-4">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-white text-2xl font-bold">
          <a href="/">Infinitif</a>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="/vote" className="text-white hover:text-blue-400">
            Vote
          </a>
          <a href="/resultats" className="text-white hover:text-blue-400">
            Résultats
          </a>
          <a href="/contact" className="text-white hover:text-blue-400">
            Contact
          </a>
        </div>
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </nav>
      <div
        className={`md:hidden ${
          isOpen ? "block" : "hidden"
        } bg-gray-800 p-4 space-y-4`}
      >
        <a href="/" className="text-white hover:text-blue-400">
          Accueil
        </a>
        <a href="/vote" className="text-white hover:text-blue-400">
          Vote
        </a>
        <a href="/resultats" className="text-white hover:text-blue-400">
          Résultats
        </a>
        <a href="/contact" className="text-white hover:text-blue-400">
          Contact
        </a>
      </div>
    </header>
  );
};

export default Header;
