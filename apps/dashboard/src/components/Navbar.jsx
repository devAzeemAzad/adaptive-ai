function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-5 shadow-sm bg-white">
      <h1 className="text-2xl font-bold text-blue-600">
        AdaptiveAI
      </h1>

      <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
        Login
      </button>
    </nav>
  );
}

export default Navbar;