import { useState } from "react";
import { Eye, EyeOff, Github } from "lucide-react";

function Login({ handleLogin }) {
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    console.log("Email is", email);
    console.log("Password is", password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="min-h-screen bg-linear-to-tr from-gray-900 via-gray-950 to-black flex items-center justify-center p-6">
      <div className="w-full max-w-lg">
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-[#0f1724]/60 to-[#03040a]/60 border border-gray-800/60 shadow-xl p-8 backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_0_100px_rgba(128,0,255,0.2)]">
          <div className="flex items-center gap-4 mb-6">
            <div>
              <h1 className="text-2xl font-semibold text-white">
                Welcome Back
              </h1>
              <p className="text-sm text-gray-400">
                Sign in to continue to your dashboard
              </p>
            </div>
          </div>

          <form
            className="space-y-4"
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <div className="relative">
              <input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 bg-gray-800/60 border border-gray-700 rounded-xl text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              />
            </div>

            <div className="relative">
              <input
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full px-4 py-3 bg-gray-800/60 border border-gray-700 rounded-xl text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition pr-12"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-200 transition cursor-pointer"
                aria-label="Toggle password visibility"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center text-gray-300">
                <input type="checkbox" className="mr-2 accent-purple-500" />
                Remember me
              </label>
              <a
                href="#"
                className="text-purple-400 hover:text-purple-300 transition"
              >
                Forgot?
              </a>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-linear-to-r from-purple-600 to-cyan-500 text-white font-semibold rounded-xl hover:scale-[1.01] transition-transform shadow-lg cursor-pointer"
            >
              Log In
            </button>
          </form>

          <div className="my-6 text-center text-gray-500">or continue with</div>

          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-3 py-3 bg-gray-800/50 border border-gray-700 rounded-xl hover:bg-gray-800/70 transition cursor-pointer">
              <img
                src="https://www.google.com/favicon.ico"
                alt="Google"
                className="w-5 h-5"
              />
              <span className="text-gray-100">Google</span>
            </button>
            <button className="flex items-center justify-center gap-3 py-3 bg-gray-800/50 border border-gray-700 rounded-xl hover:bg-gray-800/70 transition cursor-pointer">
              <Github className="w-8 h-8 text-white bg-black p-1.5 rounded-full" />
              <span className="text-gray-100">GitHub</span>
            </button>
          </div>

          <div className="text-center mt-6 text-gray-400 text-sm">
            Don't have an account?{" "}
            <a href="#" className="text-purple-400 font-medium">
              Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
