import { useState } from 'react';

interface Portfolio {
  id: string;
  name: string;
  owner: string;
  status: 'active' | 'draft' | 'archived';
  value: number;
  assets: number;
  performance: number;
  lastUpdated: string;
  risk: 'low' | 'medium' | 'high';
}

export default function PortfoliosPage() {
  
  // Mock portfolios data
  const [portfolios] = useState<Portfolio[]>([
    { id: '1', name: 'Growth Portfolio', owner: 'John Doe', status: 'active', value: 125000, assets: 12, performance: 8.5, lastUpdated: '2024-01-15', risk: 'medium' },
    { id: '2', name: 'Conservative Mix', owner: 'Jane Smith', status: 'active', value: 85000, assets: 8, performance: 4.2, lastUpdated: '2024-01-14', risk: 'low' },
    { id: '3', name: 'Tech Focus', owner: 'Mike Wilson', status: 'active', value: 200000, assets: 15, performance: 12.3, lastUpdated: '2024-01-15', risk: 'high' },
    { id: '4', name: 'Retirement Fund', owner: 'Sarah Johnson', status: 'draft', value: 45000, assets: 5, performance: 0, lastUpdated: '2024-01-10', risk: 'low' },
    { id: '5', name: 'Aggressive Growth', owner: 'David Brown', status: 'active', value: 175000, assets: 20, performance: 15.7, lastUpdated: '2024-01-15', risk: 'high' },
    { id: '6', name: 'Balanced Portfolio', owner: 'Lisa Davis', status: 'active', value: 95000, assets: 10, performance: 6.8, lastUpdated: '2024-01-12', risk: 'medium' },
    { id: '7', name: 'Income Generator', owner: 'Tom Miller', status: 'active', value: 110000, assets: 14, performance: 5.5, lastUpdated: '2024-01-13', risk: 'low' },
    { id: '8', name: 'Startup Investments', owner: 'Amy Garcia', status: 'archived', value: 30000, assets: 3, performance: -2.1, lastUpdated: '2024-01-08', risk: 'high' },
    { id: '9', name: 'ESG Portfolio', owner: 'Chris Martinez', status: 'active', value: 140000, assets: 18, performance: 7.9, lastUpdated: '2024-01-14', risk: 'medium' },
    { id: '10', name: 'International Mix', owner: 'Emma Lopez', status: 'active', value: 78000, assets: 9, performance: 3.6, lastUpdated: '2024-01-11', risk: 'medium' },
  ]);

  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('value');

  const filteredPortfolios = portfolios.filter(p => 
    filter === 'all' || p.status === filter
  );

  const sortedPortfolios = [...filteredPortfolios].sort((a, b) => {
    switch (sortBy) {
      case 'value': return b.value - a.value;
      case 'performance': return b.performance - a.performance;
      case 'name': return a.name.localeCompare(b.name);
      default: return 0;
    }
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'draft': return 'bg-yellow-100 text-yellow-800';
      case 'archived': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'low': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'high': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const totalValue = portfolios.reduce((sum, p) => sum + p.value, 0);
  const avgPerformance = portfolios.reduce((sum, p) => sum + p.performance, 0) / portfolios.length;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Portfolio Management</h1>
          <p className="text-gray-600">Monitor and manage all user portfolios</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Create Portfolio
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Total Value</h3>
          <p className="text-2xl font-bold text-gray-900">{formatCurrency(totalValue)}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Active Portfolios</h3>
          <p className="text-2xl font-bold text-green-600">{portfolios.filter(p => p.status === 'active').length}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Avg Performance</h3>
          <p className="text-2xl font-bold text-blue-600">{avgPerformance.toFixed(1)}%</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Total Assets</h3>
          <p className="text-2xl font-bold text-purple-600">{portfolios.reduce((sum, p) => sum + p.assets, 0)}</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <div className="flex flex-wrap gap-4 items-center">
          <div>
            <label className="text-sm font-medium text-gray-700 mr-2">Status:</label>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="border border-gray-300 rounded px-3 py-1"
            >
              <option value="all">All</option>
              <option value="active">Active</option>
              <option value="draft">Draft</option>
              <option value="archived">Archived</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 mr-2">Sort by:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-300 rounded px-3 py-1"
            >
              <option value="value">Value</option>
              <option value="performance">Performance</option>
              <option value="name">Name</option>
            </select>
          </div>
        </div>
      </div>

      {/* Portfolios Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedPortfolios.map((portfolio) => (
          <div key={portfolio.id} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-semibold text-gray-900">{portfolio.name}</h3>
                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(portfolio.status)}`}>
                  {portfolio.status}
                </span>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Owner:</span>
                  <span className="text-sm font-medium">{portfolio.owner}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Value:</span>
                  <span className="text-sm font-bold text-green-600">{formatCurrency(portfolio.value)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Assets:</span>
                  <span className="text-sm font-medium">{portfolio.assets}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Performance:</span>
                  <span className={`text-sm font-medium ${portfolio.performance >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {portfolio.performance > 0 ? '+' : ''}{portfolio.performance}%
                  </span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Risk Level:</span>
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getRiskColor(portfolio.risk)}`}>
                    {portfolio.risk}
                  </span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Last Updated:</span>
                  <span className="text-sm text-gray-600">{portfolio.lastUpdated}</span>
                </div>
              </div>
              
              <div className="mt-6 flex space-x-2">
                <button className="flex-1 bg-blue-600 text-white py-2 px-3 rounded text-sm hover:bg-blue-700">
                  View Details
                </button>
                <button className="flex-1 bg-gray-100 text-gray-700 py-2 px-3 rounded text-sm hover:bg-gray-200">
                  Edit
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}