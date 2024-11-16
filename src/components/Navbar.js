import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <Link href="/" className="text-white hover:text-gray-400">
          Home
        </Link>
        <div>
          <Link href="/nasa" className="text-white hover:text-gray-400 mr-4">
            NASA
          </Link>
          <Link href="/maps" className="text-white hover:text-gray-400 mr-4">
            Maps
          </Link>
          <Link href="/pokemon" className="text-white hover:text-gray-400">
            Pokemon
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;