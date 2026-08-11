import { useState } from "react";
import login from "../services/login_api";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!username || !password) {
      setError("Enter your username and password.");
      return;
    }

    setError("");

    login(
        {
            username : username,
            password : password
        }
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
        <div className="w-full max-w-sm">
            <div className="text-center mb-8">
                <h1 className="text-xl font-semibold tracking-tight">Library</h1>
                <p className="text-sm text-gray-500 mt-1">Sign in to your account</p>
            </div>

            <form
            onSubmit={handleSubmit}
            className="bg-white border border-gray-200 rounded-lg p-6 space-y-4"
            >
                {error && (
                    <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-md px-3 py-2">
                    {error}
                    </p>
                )}

                <div>
                    <label htmlFor="username" className="block text-sm font-medium mb-1">
                    Username
                    </label>
                    <input
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="JeffVacation19"
                    className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
                    />
                </div>

                <div>
                    <label htmlFor="password" className="block text-sm font-medium mb-1">
                    Password
                    </label>
                    <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-2 rounded-md bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition disabled:opacity-50"
                >
                    {loading ? "Logging in..." : "Log in"}
                </button>
            </form>

            <p className="text-center text-sm text-gray-500 mt-6">
            Don't have an account?{" "}
                <a href="#" className="text-gray-900 font-medium hover:underline">
                    Sign up
                </a>
            </p>
        </div>
    </div>
  );
}