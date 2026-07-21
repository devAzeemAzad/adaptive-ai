import Button from "./Button";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-5 shadow-sm bg-white">
      <h1 className="text-2xl font-bold text-blue-600">
        AdaptiveAI
      </h1>

      <Button>
        Login
      </Button>
    </nav>
  );
}

export default Navbar;