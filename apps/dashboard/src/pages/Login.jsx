import { Link } from "react-router-dom";
import Input from "../components/Input";
function Login() {
  return (
    <div className="flex items-center justify-center min-h-[80vh] px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-blue-600">
          Welcome Back
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Sign in to your AdaptiveAI account
        </p>

        <form className="mt-8 space-y-5">
          <Input label="Email" type="email" placeholder="Enter your email" />

          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
          />

          <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
            Login
          </button>
        </form>

        <p className="text-center mt-6 text-gray-600">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-600 font-semibold">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
