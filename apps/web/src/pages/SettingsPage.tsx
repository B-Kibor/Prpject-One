import { useState, useEffect } from 'react';
import { useAuthStore } from '../store/authStore';

export default function SettingsPage() {
  const { user, darkMode, toggleDarkMode } = useAuthStore();
  const [activeTab, setActiveTab] = useState('organization');
  
  const [orgSettings, setOrgSettings] = useState({
    name: 'Acme Corporation',
    slug: 'acme-corp',
    description: 'Leading investment management firm',
    timezone: 'America/New_York',
    currency: 'USD',
    notifications: true,
    twoFactor: false
  });

  const [userSettings, setUserSettings] = useState({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    email: user?.email || '',
    notifications: true,
    darkMode: false,
    language: 'en'
  });

  useEffect(() => {
    setUserSettings(prev => ({ ...prev, darkMode }));
  }, [darkMode]);

  const handleSaveOrg = () => {
    alert('Organization settings saved!');
  };

  const handleUpdateProfile = () => {
    if (userSettings.darkMode !== darkMode) {
      toggleDarkMode();
    }
    alert('Profile updated!');
  };

  const handleUpdatePassword = () => {
    alert('Password updated!');
  };

  const handleChangePlan = () => {
    alert('Redirecting to plan selection...');
  };

  const handleUpdatePayment = () => {
    alert('Redirecting to payment update...');
  };

  const handleRevokeSession = () => {
    alert('Session revoked!');
  };

  const handleDarkModeToggle = (checked: boolean) => {
    setUserSettings(prev => ({ ...prev, darkMode: checked }));
    if (checked !== darkMode) {
      toggleDarkMode();
    }
  };

  const tabs = [
    { id: 'organization', name: 'Organization', icon: '🏢' },
    { id: 'profile', name: 'Profile', icon: '👤' },
    { id: 'security', name: 'Security', icon: '🔒' },
    { id: 'billing', name: 'Billing', icon: '💳' },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent mb-2">Settings</h1>
        <p className="text-slate-600 dark:text-slate-400">Manage your organization and account preferences</p>
      </div>

      <div className="flex space-x-8">
        {/* Sidebar */}
        <div className="w-64">
          <nav className="space-y-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/50 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <span className="mr-3 text-lg">{tab.icon}</span>
                <span className="font-medium">{tab.name}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Content */}
        <div className="flex-1 max-w-2xl">
          {activeTab === 'organization' && (
            <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-slate-200/50 dark:border-slate-700/50">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">Organization Settings</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Organization Name</label>
                  <input
                    type="text"
                    value={orgSettings.name}
                    onChange={(e) => setOrgSettings({...orgSettings, name: e.target.value})}
                    className="w-full px-4 py-3 border border-slate-200 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Slug</label>
                  <input
                    type="text"
                    value={orgSettings.slug}
                    onChange={(e) => setOrgSettings({...orgSettings, slug: e.target.value})}
                    className="w-full px-4 py-3 border border-slate-200 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Description</label>
                  <textarea
                    value={orgSettings.description}
                    onChange={(e) => setOrgSettings({...orgSettings, description: e.target.value})}
                    className="w-full px-4 py-3 border border-slate-200 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    rows={3}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Timezone</label>
                    <select
                      value={orgSettings.timezone}
                      onChange={(e) => setOrgSettings({...orgSettings, timezone: e.target.value})}
                      className="w-full px-4 py-3 border border-slate-200 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="America/New_York">Eastern Time</option>
                      <option value="America/Chicago">Central Time</option>
                      <option value="America/Denver">Mountain Time</option>
                      <option value="America/Los_Angeles">Pacific Time</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Currency</label>
                    <select
                      value={orgSettings.currency}
                      onChange={(e) => setOrgSettings({...orgSettings, currency: e.target.value})}
                      className="w-full px-4 py-3 border border-slate-200 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="USD">USD ($)</option>
                      <option value="EUR">EUR (€)</option>
                      <option value="GBP">GBP (£)</option>
                    </select>
                  </div>
                </div>
                <button 
                  onClick={handleSaveOrg}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Save Changes
                </button>
              </div>
            </div>
          )}

          {activeTab === 'profile' && (
            <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-slate-200/50 dark:border-slate-700/50">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">Profile Settings</h3>
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">First Name</label>
                    <input
                      type="text"
                      value={userSettings.firstName}
                      onChange={(e) => setUserSettings({...userSettings, firstName: e.target.value})}
                      className="w-full px-4 py-3 border border-slate-200 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Last Name</label>
                    <input
                      type="text"
                      value={userSettings.lastName}
                      onChange={(e) => setUserSettings({...userSettings, lastName: e.target.value})}
                      className="w-full px-4 py-3 border border-slate-200 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email</label>
                  <input
                    type="email"
                    value={userSettings.email}
                    onChange={(e) => setUserSettings({...userSettings, email: e.target.value})}
                    className="w-full px-4 py-3 border border-slate-200 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
                <div className="space-y-4">
                  <label className="flex items-center p-4 rounded-xl bg-slate-50/50 dark:bg-slate-700/30">
                    <input
                      type="checkbox"
                      checked={userSettings.notifications}
                      onChange={(e) => setUserSettings({...userSettings, notifications: e.target.checked})}
                      className="mr-3 w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                    />
                    <span className="text-slate-700 dark:text-slate-300 font-medium">Email notifications</span>
                  </label>
                  <label className="flex items-center p-4 rounded-xl bg-slate-50/50 dark:bg-slate-700/30">
                    <input
                      type="checkbox"
                      checked={userSettings.darkMode}
                      onChange={(e) => handleDarkModeToggle(e.target.checked)}
                      className="mr-3 w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                    />
                    <span className="text-slate-700 dark:text-slate-300 font-medium">Dark mode</span>
                  </label>
                </div>
                <button 
                  onClick={handleUpdateProfile}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Update Profile
                </button>
              </div>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-slate-200/50 dark:border-slate-700/50">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">Security Settings</h3>
              <div className="space-y-8">
                <div>
                  <h4 className="font-medium text-slate-900 dark:text-white mb-4">Change Password</h4>
                  <div className="space-y-4">
                    <input type="password" placeholder="Current password" className="w-full px-4 py-3 border border-slate-200 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200" />
                    <input type="password" placeholder="New password" className="w-full px-4 py-3 border border-slate-200 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200" />
                    <input type="password" placeholder="Confirm new password" className="w-full px-4 py-3 border border-slate-200 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200" />
                    <button 
                      onClick={handleUpdatePassword}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                      Update Password
                    </button>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 dark:text-white mb-4">Two-Factor Authentication</h4>
                  <label className="flex items-center p-4 rounded-xl bg-slate-50/50 dark:bg-slate-700/30">
                    <input
                      type="checkbox"
                      checked={orgSettings.twoFactor}
                      onChange={(e) => setOrgSettings({...orgSettings, twoFactor: e.target.checked})}
                      className="mr-3 w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                    />
                    <span className="text-slate-700 dark:text-slate-300 font-medium">Enable 2FA for enhanced security</span>
                  </label>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 dark:text-white mb-4">Active Sessions</h4>
                  <div className="border border-slate-200 dark:border-slate-600 rounded-xl p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium text-slate-900 dark:text-white">Current session</p>
                        <p className="text-sm text-slate-500 dark:text-slate-400">Chrome on macOS • Last active now</p>
                      </div>
                      <button 
                        onClick={handleRevokeSession}
                        className="text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 text-sm font-medium px-4 py-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-all duration-200"
                      >
                        Revoke
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'billing' && (
            <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-slate-200/50 dark:border-slate-700/50">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">Billing & Subscription</h3>
              <div className="space-y-8">
                <div className="border border-slate-200 dark:border-slate-600 rounded-xl p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-medium text-slate-900 dark:text-white">Professional Plan</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">$99/month • Up to 50 users</p>
                    </div>
                    <button 
                      onClick={handleChangePlan}
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium px-4 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200"
                    >
                      Change Plan
                    </button>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 dark:text-white mb-4">Payment Method</h4>
                  <div className="border border-slate-200 dark:border-slate-600 rounded-xl p-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <span className="mr-3 text-2xl">💳</span>
                        <div>
                          <span className="text-slate-900 dark:text-white font-medium">•••• •••• •••• 4242</span>
                          <p className="text-sm text-slate-500 dark:text-slate-400">Expires 12/25</p>
                        </div>
                      </div>
                      <button 
                        onClick={handleUpdatePayment}
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200"
                      >
                        Update
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 dark:text-white mb-4">Billing History</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between py-3 border-b border-slate-200 dark:border-slate-600">
                      <span className="text-slate-900 dark:text-white">Jan 2024</span>
                      <span className="font-medium text-slate-900 dark:text-white">$99.00</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-slate-200 dark:border-slate-600">
                      <span className="text-slate-900 dark:text-white">Dec 2023</span>
                      <span className="font-medium text-slate-900 dark:text-white">$99.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}