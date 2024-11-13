import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import coiffeursData from "../assets/coiffeurs.json";
import { useLocation, useNavigate } from "react-router-dom";
import "leaflet/dist/leaflet.css";
const icon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const Map = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const initialIndex =
    parseInt(urlParams.get("index")) ||
    Math.floor(Math.random() * coiffeursData.data.features.length);

  const [coiffeurIndex, setCoiffeurIndex] = useState(initialIndex);
  const coiffeur = coiffeursData.data.features[coiffeurIndex];
  const { nom, addresse, ville, codepostal, lat, lng } = coiffeur.properties;

  useEffect(() => {
    navigate(`?index=${coiffeurIndex}`, { replace: true });
  }, [coiffeurIndex, navigate]);

  const handleNextCoiffeur = () => {
    const randomIndex = Math.floor(
      Math.random() * coiffeursData.data.features.length
    );
    setCoiffeurIndex(randomIndex);
  };

  return (
    <div className="container mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="relative w-full h-full">
        <MapContainer
          center={[lat, lng]}
          zoom={13}
          scrollWheelZoom={false}
          style={{ height: "500px", width: "100%" }}
          key={lat + lng}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[lat, lng]} icon={icon}>
            <Popup>
              <div>
                <h3 className="text-lg font-semibold">{nom}</h3>
                <p>{addresse}</p>
                <p>
                  {ville}, {codepostal}
                </p>
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
      <div className="w-full h-full  p-4">
        <h3 className="text-2xl font-semibold">{nom}</h3>
        <p className="text-gray-700 mb-2">
          <strong>Adresse :</strong> {addresse}
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Ville :</strong> {ville}
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Code Postal :</strong> {codepostal}
        </p>
        <button
          onClick={handleNextCoiffeur}
          className="bg-teal-600 text-white px-4 py-2 rounded font-semibold"
        >
          Aléatoire ⟳
        </button>
      </div>
    </div>
  );
};

export default Map;
