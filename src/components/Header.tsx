import { Search, Plus, Home, Shield } from 'lucide-react';

interface HeaderProps {
  currentView: 'home' | 'submit' | 'admin';
  onViewChange: (view: 'home' | 'submit' | 'admin') => void;
}

export default function Header({ currentView, onViewChange }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Search className="w-8 h-8 text-blue-600" />
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
              Lost & Found
            </h1>
          </div>

          <nav className="flex items-center space-x-2 sm:space-x-4">
            <button
              onClick={() => onViewChange('home')}
              className={`flex items-center space-x-1 sm:space-x-2 px-3 py-2 rounded-lg transition-colors ${
                currentView === 'home'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Home className="w-5 h-5" />
              <span className="hidden sm:inline">Browse</span>
            </button>

            <button
              onClick={() => onViewChange('submit')}
              className={`flex items-center space-x-1 sm:space-x-2 px-3 py-2 rounded-lg transition-colors ${
                currentView === 'submit'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Plus className="w-5 h-5" />
              <span className="hidden sm:inline">Report</span>
            </button>

            <button
              onClick={() => onViewChange('admin')}
              className={`flex items-center space-x-1 sm:space-x-2 px-3 py-2 rounded-lg transition-colors ${
                currentView === 'admin'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Shield className="w-5 h-5" />
              <span className="hidden sm:inline">Admin</span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
