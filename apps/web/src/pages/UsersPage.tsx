import { useState } from 'react';
import { useAuthStore } from '../store/authStore';

interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'owner' | 'admin' | 'member';
  status: 'active' | 'inactive';
  lastLogin: string;
  portfolioCount: number;
}

export default function UsersPage() {
  const { user: currentUser } = useAuthStore();
  
  // Mock users data
  const [users] = useState<User[]>([
    { id: '1', email: 'john.doe@company.com', firstName: 'John', lastName: 'Doe', role: 'admin', status: 'active', lastLogin: '2024-01-15', portfolioCount: 3 },
    { id: '2', email: 'jane.smith@company.com', firstName: 'Jane', lastName: 'Smith', role: 'member', status: 'active', lastLogin: '2024-01-14', portfolioCount: 2 },
    { id: '3', email: 'mike.wilson@company.com', firstName: 'Mike', lastName: 'Wilson', role: 'member', status: 'active', lastLogin: '2024-01-13', portfolioCount: 5 },
    { id: '4', email: 'sarah.johnson@company.com', firstName: 'Sarah', lastName: 'Johnson', role: 'member', status: 'inactive', lastLogin: '2024-01-10', portfolioCount: 1 },
    { id: '5', email: 'david.brown@company.com', firstName: 'David', lastName: 'Brown', role: 'admin', status: 'active', lastLogin: '2024-01-15', portfolioCount: 4 },
    { id: '6', email: 'lisa.davis@company.com', firstName: 'Lisa', lastName: 'Davis', role: 'member', status: 'active', lastLogin: '2024-01-12', portfolioCount: 2 },
    { id: '7', email: 'tom.miller@company.com', firstName: 'Tom', lastName: 'Miller', role: 'member', status: 'active', lastLogin: '2024-01-11', portfolioCount: 3 },
    { id: '8', email: 'amy.garcia@company.com', firstName: 'Amy', lastName: 'Garcia', role: 'member', status: 'active', lastLogin: '2024-01-14', portfolioCount: 1 },
    { id: '9', email: 'chris.martinez@company.com', firstName: 'Chris', lastName: 'Martinez', role: 'member', status: 'active', lastLogin: '2024-01-13', portfolioCount: 6 },
    { id: '10', email: 'emma.lopez@company.com', firstName: 'Emma', lastName: 'Lopez', role: 'member', status: 'active', lastLogin: '2024-01-15', portfolioCount: 2 },
    { id: '11', email: 'ryan.taylor@company.com', firstName: 'Ryan', lastName: 'Taylor', role: 'member', status: 'inactive', lastLogin: '2024-01-08', portfolioCount: 1 },
    { id: '12', email: 'sophia.anderson@company.com', firstName: 'Sophia', lastName: 'Anderson', role: 'member', status: 'active', lastLogin: '2024-01-14', portfolioCount: 4 },
  ]);

  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [inviteEmail, setInviteEmail] = useState('');
  const [inviteRole, setInviteRole] = useState('member');

  const handleSelectUser = (userId: string) => {
    setSelectedUsers(prev => 
      prev.includes(userId) 
        ? prev.filter(id => id !== userId)
        : [...prev, userId]
    );
  };

  const handleSelectAll = () => {
    setSelectedUsers(selectedUsers.length === users.length ? [] : users.map(u => u.id));
  };

  const handleSendMessage = () => {
    alert(`Sending message to ${selectedUsers.length} users`);
  };

  const handleDeactivate = () => {
    alert(`Deactivating ${selectedUsers.length} users`);
    setSelectedUsers([]);
  };

  const handleViewUser = (userId: string) => {
    alert(`Viewing user ${userId}`);
  };

  const handleEditUser = (userId: string) => {
    alert(`Editing user ${userId}`);
  };

  const handleRemoveUser = (userId: string) => {
    alert(`Removing user ${userId}`);
  };

  const handleSendInvite = () => {
    alert(`Invite sent to ${inviteEmail} as ${inviteRole}`);
    setShowInviteModal(false);
    setInviteEmail('');
    setInviteRole('member');
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'owner': return 'bg-purple-100 text-purple-800';
      case 'admin': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    return status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800';
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">User Management</h1>
          <p className="text-gray-600 dark:text-gray-300">Manage your organization's users and their portfolios</p>
        </div>
        <button
          onClick={() => setShowInviteModal(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Invite User
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Users</h3>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">{users.length}</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Active Users</h3>
          <p className="text-2xl font-bold text-green-600 dark:text-green-400">{users.filter(u => u.status === 'active').length}</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Portfolios</h3>
          <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{users.reduce((sum, u) => sum + u.portfolioCount, 0)}</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Avg Portfolios/User</h3>
          <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">{(users.reduce((sum, u) => sum + u.portfolioCount, 0) / users.length).toFixed(1)}</p>
        </div>
      </div>

      {/* Actions */}
      {selectedUsers.length > 0 && (
        <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg mb-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-blue-700 dark:text-blue-300">{selectedUsers.length} users selected</span>
            <div className="space-x-2">
              <button 
                onClick={handleSendMessage}
                className="text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
              >
                Send Message
              </button>
              <button 
                onClick={handleDeactivate}
                className="text-sm bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
              >
                Deactivate
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Users Table */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-left">
                <input
                  type="checkbox"
                  checked={selectedUsers.length === users.length}
                  onChange={handleSelectAll}
                  className="rounded border-gray-300"
                />
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">User</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Role</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Portfolios</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Last Login</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                <td className="px-6 py-4">
                  <input
                    type="checkbox"
                    checked={selectedUsers.includes(user.id)}
                    onChange={() => handleSelectUser(user.id)}
                    className="rounded border-gray-300"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {user.firstName[0]}{user.lastName[0]}
                      </span>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900 dark:text-white">{user.firstName} {user.lastName}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{user.email}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getRoleColor(user.role)}`}>
                    {user.role}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(user.status)}`}>
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                  <span className="font-medium">{user.portfolioCount}</span> portfolios
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  {user.lastLogin}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button 
                    onClick={() => handleViewUser(user.id)}
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300 mr-3"
                  >
                    View
                  </button>
                  <button 
                    onClick={() => handleEditUser(user.id)}
                    className="text-green-600 dark:text-green-400 hover:text-green-900 dark:hover:text-green-300 mr-3"
                  >
                    Edit
                  </button>
                  <button 
                    onClick={() => handleRemoveUser(user.id)}
                    className="text-red-600 dark:text-red-400 hover:text-red-900 dark:hover:text-red-300"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Invite Modal */}
      {showInviteModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg max-w-md w-full">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Invite New User</h3>
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Email address"
                value={inviteEmail}
                onChange={(e) => setInviteEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md"
              />
              <select 
                value={inviteRole}
                onChange={(e) => setInviteRole(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md"
              >
                <option value="member">Member</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => setShowInviteModal(false)}
                className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
              >
                Cancel
              </button>
              <button 
                onClick={handleSendInvite}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Send Invite
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}