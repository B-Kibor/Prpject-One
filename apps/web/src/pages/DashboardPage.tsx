import { useAuthStore } from '../store/authStore';
import { Link } from 'react-router-dom';

export default function DashboardPage() {
  const { user } = useAuthStore();

  return (
    <div className="p-8">
      <div className="mb-10">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent mb-2">
          Welcome back, {user?.firstName}
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">Here's what's happening with your portfolios today</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <Link to="/users" className="group bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200/50 dark:border-slate-700/50 hover:scale-105">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
              <span className="text-white text-xl">👥</span>
            </div>
            <div className="text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors">
              →
            </div>
          </div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Team Members</h3>
          <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">12</p>
          <p className="text-sm text-slate-500 dark:text-slate-400">Active users in your organization</p>
        </Link>

        <Link to="/portfolios" className="group bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200/50 dark:border-slate-700/50 hover:scale-105">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
              <span className="text-white text-xl">💼</span>
            </div>
            <div className="text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors">
              →
            </div>
          </div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Active Portfolios</h3>
          <p className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-1">28</p>
          <p className="text-sm text-slate-500 dark:text-slate-400">Total portfolios managed</p>
        </Link>

        <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-slate-200/50 dark:border-slate-700/50">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
              <span className="text-white text-xl">💰</span>
            </div>
          </div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Assets Under Management</h3>
          <p className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1">$1.2M</p>
          <p className="text-sm text-slate-500 dark:text-slate-400">Total portfolio value</p>
        </div>

        <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-slate-200/50 dark:border-slate-700/50">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl flex items-center justify-center">
              <span className="text-white text-xl">📈</span>
            </div>
          </div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Average Performance</h3>
          <p className="text-3xl font-bold text-amber-600 dark:text-amber-400 mb-1">+7.8%</p>
          <p className="text-sm text-slate-500 dark:text-slate-400">Portfolio returns this quarter</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-slate-200/50 dark:border-slate-700/50">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Recent Activity</h3>
            <span className="text-sm text-slate-500 dark:text-slate-400">Last 24 hours</span>
          </div>
          <div className="space-y-4">
            <div className="flex items-start space-x-4 p-4 rounded-xl bg-slate-50/50 dark:bg-slate-700/30">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-slate-900 dark:text-white">Portfolio Updated</p>
                <p className="text-sm text-slate-600 dark:text-slate-300">John Doe updated Growth Portfolio allocation</p>
                <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-4 rounded-xl bg-slate-50/50 dark:bg-slate-700/30">
              <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-slate-900 dark:text-white">New User Registered</p>
                <p className="text-sm text-slate-600 dark:text-slate-300">Sarah Johnson joined your organization</p>
                <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">4 hours ago</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-4 rounded-xl bg-slate-50/50 dark:bg-slate-700/30">
              <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-slate-900 dark:text-white">Report Generated</p>
                <p className="text-sm text-slate-600 dark:text-slate-300">Monthly performance report is ready</p>
                <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">1 day ago</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-slate-200/50 dark:border-slate-700/50">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Top Performers</h3>
            <span className="text-sm text-slate-500 dark:text-slate-400">This quarter</span>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-emerald-50 to-emerald-100/50 dark:from-emerald-900/20 dark:to-emerald-800/20">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-medium text-sm">AG</span>
                </div>
                <div>
                  <p className="font-medium text-slate-900 dark:text-white">Aggressive Growth</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">David Brown</p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-lg font-bold text-emerald-600 dark:text-emerald-400">+15.7%</span>
                <p className="text-xs text-slate-500 dark:text-slate-400">$175K</p>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 rounded-xl bg-slate-50/50 dark:bg-slate-700/30">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-medium text-sm">TF</span>
                </div>
                <div>
                  <p className="font-medium text-slate-900 dark:text-white">Tech Focus</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Mike Wilson</p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-lg font-bold text-emerald-600 dark:text-emerald-400">+12.3%</span>
                <p className="text-xs text-slate-500 dark:text-slate-400">$200K</p>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 rounded-xl bg-slate-50/50 dark:bg-slate-700/30">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-medium text-sm">GP</span>
                </div>
                <div>
                  <p className="font-medium text-slate-900 dark:text-white">Growth Portfolio</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">John Doe</p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-lg font-bold text-emerald-600 dark:text-emerald-400">+8.5%</span>
                <p className="text-xs text-slate-500 dark:text-slate-400">$125K</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}