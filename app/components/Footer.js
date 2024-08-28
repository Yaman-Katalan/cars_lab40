export default function Footer() {
    return (
      <footer className="bg-gray-800 text-gray-100 py-6 mt-12 border-t border-gray-700">
        <div className="container mx-auto flex flex-col items-center space-y-4">
          <div className="flex flex-col items-center space-y-2">
            <h2 className="text-lg font-serif font-semibold">Car Factory</h2>
            <p className="text-sm">Innovating the Future of Automotive Design</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <p className="text-xs">&copy; 2024 Car Factory, Inc. All rights reserved.</p>
            <p className="text-xs">Built with precision and passion.</p>
          </div>
          <nav className="flex space-x-4">
            <a href="/privacy" className="text-gray-300 hover:text-gray-100 text-xs transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-gray-300 hover:text-gray-100 text-xs transition-colors">
              Terms of Service
            </a>
          </nav>
        </div>
      </footer>
    );
  }
  