export default function Home() {
  return (
    <main className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Bienvenido a Multi API App</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">NASA API</h2>
          <p className="mb-4">Explora la imagen astronómica del día de la NASA.</p>
          <a href="/nasa" className="text-blue-500 hover:text-blue-700">
            Ver más →
          </a>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Google Maps API</h2>
          <p className="mb-4">Visualiza mapas y ubicaciones interactivas.</p>
          <a href="/maps" className="text-blue-500 hover:text-blue-700">
            Ver más →
          </a>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Pokemon API</h2>
          <p className="mb-4">Descubre información sobre diferentes Pokemon.</p>
          <a href="/pokemon" className="text-blue-500 hover:text-blue-700">
            Ver más →
          </a>
        </div>
      </div>
    </main>
  )
}