import { useContext, useState } from "react";
import { AuthContext } from "../context/auth";

export default function LoginForm() {
  const { login } = useContext(AuthContext);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    const success = await login({ username, password });
    if (!success) {
      setError("Incorrect username or password. Please try again.");
    } else {
      setError(null); // Clear any previous errors on successful login
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-teal-500">
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 max-w-md w-full">
        <h2 className="text-3xl font-extrabold text-gray-800 dark:text-gray-100 mb-6 text-center">Login</h2>
        {error && (
          <div className="mb-4 text-red-500 dark:text-red-400 text-sm text-center">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col">
            <label htmlFor="username" className="text-gray-700 dark:text-gray-300 font-medium mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="p-3 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all"
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-gray-700 dark:text-gray-300 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="p-3 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
