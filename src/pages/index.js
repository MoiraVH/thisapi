import Navbar from '../components/Navbar';
import NasaPage from './nasa';
import MapsPage from './maps';
import PokemonPage from './pokemon';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-8">
        <NasaPage />
        <MapsPage />
        <PokemonPage />
      </div>
    </div>
  );
};

export default Home;