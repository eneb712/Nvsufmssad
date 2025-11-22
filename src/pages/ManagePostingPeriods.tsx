import { Calendar, Plus, Lock, Unlock } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { ProtectedRoute } from '../components/ProtectedRoute';

export function ManagePostingPeriods() {
  const postingPeriods = [
    {
      year: '2024',
      period: 'November',
      startDate: '2024-11-01',
      endDate: '2024-11-30',
      status: 'open',
      transactions: 245
    },
    {
      year: '2024',
      period: 'October',
      startDate: '2024-10-01',
      endDate: '2024-10-31',
      status: 'closed',
      transactions: 389
    },
    {
      year: '2024',
      period: 'September',
      startDate: '2024-09-01',
      endDate: '2024-09-30',
      status: 'closed',
      transactions: 312
    }
  ];

  const getStatusBadge = (status: string) => {
    return status === 'open' ? (
      <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-green-200 text-base px-4 py-2">
        <Unlock className="mr-1 h-4 w-4" />
        Open
      </Badge>
    ) : (
      <Badge className="bg-red-100 text-red-700 hover:bg-red-100 border-red-200 text-base px-4 py-2">
        <Lock className="mr-1 h-4 w-4" />
        Closed
      </Badge>
    );
  };

  return (
    <ProtectedRoute module="manage-posting-periods">
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl text-gray-900 mb-2">Manage Posting Periods</h1>
            <p className="text-gray-600">Configure fiscal periods and control transaction posting windows</p>
          </div>
          <Button size="lg" className="h-16 bg-blue-600 hover:bg-blue-700 text-lg px-8">
            <Plus className="mr-2 h-6 w-6" />
            Create New Period
          </Button>
        </div>

        {/* Summary Cards */}
        <div className="grid gap-6 sm:grid-cols-3">
          <Card className="border-2 border-green-100 bg-gradient-to-br from-green-50 to-white p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-600">Open Periods</p>
              <Unlock className="h-6 w-6 text-green-600" />
            </div>
            <p className="text-2xl text-gray-900 mb-1">1</p>
            <p className="text-sm text-green-600">Currently accepting posts</p>
          </Card>

          <Card className="border-2 border-red-100 bg-gradient-to-br from-red-50 to-white p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-600">Closed Periods</p>
              <Lock className="h-6 w-6 text-red-600" />
            </div>
            <p className="text-2xl text-gray-900 mb-1">2</p>
            <p className="text-sm text-red-600">Locked for posting</p>
          </Card>

          <Card className="border-2 border-blue-100 bg-gradient-to-br from-blue-50 to-white p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-600">Current Period</p>
              <Calendar className="h-6 w-6 text-blue-600" />
            </div>
            <p className="text-2xl text-gray-900 mb-1">Nov 2024</p>
            <p className="text-sm text-blue-600">245 transactions</p>
          </Card>
        </div>

        {/* Posting Periods Table */}
        <Card className="border-2 border-gray-100">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b-2 border-gray-200">
                <tr>
                  <th className="px-8 py-5 text-left text-base text-gray-700">Year</th>
                  <th className="px-8 py-5 text-left text-base text-gray-700">Period</th>
                  <th className="px-8 py-5 text-left text-base text-gray-700">Start Date</th>
                  <th className="px-8 py-5 text-left text-base text-gray-700">End Date</th>
                  <th className="px-8 py-5 text-left text-base text-gray-700">Transactions</th>
                  <th className="px-8 py-5 text-left text-base text-gray-700">Status</th>
                  <th className="px-8 py-5 text-left text-base text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {postingPeriods.map((period, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-8 py-6">
                      <p className="text-lg text-gray-900">{period.year}</p>
                    </td>
                    <td className="px-8 py-6">
                      <p className="text-lg text-gray-900">{period.period}</p>
                    </td>
                    <td className="px-8 py-6">
                      <p className="text-gray-700">{period.startDate}</p>
                    </td>
                    <td className="px-8 py-6">
                      <p className="text-gray-700">{period.endDate}</p>
                    </td>
                    <td className="px-8 py-6">
                      <p className="text-gray-900">{period.transactions}</p>
                    </td>
                    <td className="px-8 py-6">
                      {getStatusBadge(period.status)}
                    </td>
                    <td className="px-8 py-6">
                      {period.status === 'open' ? (
                        <Button size="lg" variant="outline" className="h-12 border-2 border-red-300 text-red-600 hover:bg-red-50">
                          <Lock className="mr-2 h-5 w-5" />
                          Close Period
                        </Button>
                      ) : (
                        <Button size="lg" variant="outline" className="h-12 border-2 border-green-300 text-green-600 hover:bg-green-50">
                          <Unlock className="mr-2 h-5 w-5" />
                          Reopen Period
                        </Button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </ProtectedRoute>
  );
}
