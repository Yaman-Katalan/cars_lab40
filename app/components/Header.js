import { useContext } from "react";
import { ThemeContext } from "../context/theme";
import { AuthContext } from "../context/auth";

export default function Header() {
  const { light, toggleThemeHandler } = useContext(ThemeContext);
  const { tokens, logout } = useContext(AuthContext);
  const username = tokens ? tokens.username : 'Guest';

  return (
    <header className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-700 text-gray-100">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <h1 className="text-4xl font-bold tracking-tight">
          Car Factory
        </h1>
        <nav className="flex items-center space-x-8">
          <a
            href="/"
            className="text-gray-100 hover:text-gray-300 transition-colors text-lg font-medium"
          >
            Home
          </a>
          {tokens && (
            <div className="flex items-center space-x-6">
              <span className="text-lg font-medium">Welcome, {username}!</span>
              <button
                onClick={logout}
                className="px-4 py-2 bg-red-600 text-white rounded-lg shadow-lg hover:bg-red-700 transition-colors font-semibold"
              >
                Logout
              </button>
            </div>
          )}
          <button
            onClick={toggleThemeHandler}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            {light ? "Dark Mode" : "Light Mode"}
          </button>
        </nav>
      </div>
    </header>
  );
}
