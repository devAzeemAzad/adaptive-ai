import { Link } from "react-router-dom";
import Input from "../components/Input";
function Register() {
  return (
    <div className="flex items-center justify-center min-h-[80vh] px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-blue-600">
          Create Account
        </h1>

        <p className="text-center text-gray-500 mt-2">Join AdaptiveAI today</p>

        <form className="mt-8 space-y-5">
          <Input label="Full Name" placeholder="Enter your full name" />

          <Input label="Email" type="email" placeholder="Enter your email" />

          <Input
            label="Password"
            type="password"
            placeholder="Create your password"
          />

          <Input
            label="Confirm Password"
            type="password"
            placeholder="Confirm your password"
          />

          <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
            Create Account
          </button>
        </form>

        <p className="text-center mt-6 text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
