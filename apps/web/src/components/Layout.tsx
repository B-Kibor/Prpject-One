import { Outlet, Link, useLocation } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { useEffect } from 'react';

export default function Layout() {
  const { user, logout, darkMode, toggleDarkMode } = useAuthStore();
  const location = useLocation();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleLogout = () => {
    logout();
    window.location.href = '/login';
  };

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: '📊' },
    { name: 'Users', href: '/users', icon: '👥' },
    { name: 'Portfolios', href: '/portfolios', icon: '💼' },
    { name: 'Reports', href: '/reports', icon: '📈' },
    { name: 'Settings', href: '/settings', icon: '⚙️' },
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
        <nav className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md shadow-lg border-b border-slate-200/50 dark:border-slate-700/50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">P</span>
                  </div>
                  <h1 className="text-xl font-semibold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                    Portfolio Pro
                  </h1>
                </div>
              </div>
              
              <div className="flex items-center space-x-6">
                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-200"
                  title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                >
                  <span className="text-lg">{darkMode ? '☀️' : '🌙'}</span>
                </button>
                <div className="flex items-center space-x-3">
                  <div className="text-right">
                    <div className="text-sm font-medium text-slate-900 dark:text-white">
                      {user?.firstName} {user?.lastName}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 capitalize">
                      {user?.role}
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-medium text-sm">
                      {user?.firstName?.[0]}{user?.lastName?.[0]}
                    </span>
                  </div>
                </div>
                <button
                  onClick={handleLogout}
                  className="text-sm text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white px-4 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-200"
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </nav>

        <div className="flex">
          {/* Sidebar */}
          <div className="w-64 bg-white/60 dark:bg-slate-800/60 backdrop-blur-md shadow-xl border-r border-slate-200/50 dark:border-slate-700/50 min-h-screen">
            <nav className="mt-8 px-4">
              <div className="space-y-2">
                {navigation.map((item) => {
                  const isActive = location.pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`group flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 ${
                        isActive
                          ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/25'
                          : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/50 hover:text-slate-900 dark:hover:text-white'
                      }`}
                    >
                      <span className="mr-3 text-lg">{item.icon}</span>
                      <span className="font-medium">{item.name}</span>
                      {isActive && (
                        <div className="ml-auto w-2 h-2 bg-white rounded-full"></div>
                      )}
                    </Link>
                  );
                })}
              </div>
            </nav>
          </div>

          {/* Main content */}
          <div className="flex-1">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}