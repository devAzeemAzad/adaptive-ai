import Button from "./Button";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-5 shadow-sm bg-white">
      <h1 className="text-2xl font-bold text-blue-600">
        AdaptiveAI
      </h1>

      <Link to="api/auth/login">
        <Button>
          Login
        </Button>
      </Link>
    </nav>
  );
}

export default Navbar;