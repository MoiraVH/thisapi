import { useState, useEffect } from 'react';
import axios from 'axios';

const NasaPage = () => {
  const [nasaData, setNasaData] = useState(null);

  useEffect(() => {
    const fetchNasaData = async () => {
      const response = await axios.get('https://api.nasa.gov/planetary/apod?api_key=YOUR_NASA_API_KEY');
      setNasaData(response.data);
    };
    fetchNasaData();
  }, []);

  const handleRefresh = async () => {
    const response = await axios.get('https://api.nasa.gov/planetary/apod?api_key=YOUR_NASA_API_KEY');
    setNasaData(response.data);
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">NASA</h2>
      {nasaData ? (
        <div>
          <img src={nasaData.url} alt={nasaData.title} className="w-full h-64 object-cover mb-4" />
          <h3 className="text-xl font-bold">{nasaData.title}</h3>
          <p>{nasaData.explanation}</p>
          <button
            onClick={handleRefresh}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
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

export default NasaPage;