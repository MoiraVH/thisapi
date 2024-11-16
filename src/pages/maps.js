import { useState, useEffect } from 'react';
import axios from 'axios';

const MapsPage = () => {
  const [mapData, setMapData] = useState(null);

  useEffect(() => {
    const fetchMapData = async () => {
      const response = await axios.get('https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY');
      setMapData(response.data);
    };
    fetchMapData();
  }, []);

  const handleRefresh = async () => {
    const response = await axios.get('https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY');
    setMapData(response.data);
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Maps</h2>
      {mapData ? (
        <div>
          <div id="map" className="w-full h-64 mb-4"></div>
          <button
            onClick={handleRefresh}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Actualizar
          </button>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default MapsPage;