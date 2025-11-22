import { BookOpen, Plus } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { ProtectedRoute } from '../components/ProtectedRoute';

export function ManageChartOfAccounts() {
  const accounts = [
    { code: '1000', name: 'Cash in Bank', type: 'Asset', balance: '₱5,245,680.00', status: 'active' },
    { code: '1100', name: 'Accounts Receivable', type: 'Asset', balance: '₱1,285,450.00', status: 'active' },
    { code: '2000', name: 'Accounts Payable', type: 'Liability', balance: '₱845,230.00', status: 'active' },
    { code: '3000', name: 'Equity', type: 'Equity', balance: '₱8,500,000.00', status: 'active' },
    { code: '4000', name: 'Tuition Revenue', type: 'Revenue', balance: '₱12,450,000.00', status: 'active' },
  ];

  return (
    <ProtectedRoute module="manage-chart-of-accounts">
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl text-gray-900 mb-2">Manage Chart of Accounts</h1>
            <p className="text-gray-600">Configure and maintain the general ledger account structure</p>
          </div>
          <Button size="lg" className="h-16 bg-blue-600 hover:bg-blue-700 text-lg px-8">
            <Plus className="mr-2 h-6 w-6" />
            Add New Account
          </Button>
        </div>

        <Card className="border-2 border-gray-100">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b-2 border-gray-200">
                <tr>
                  <th className="px-8 py-5 text-left text-base text-gray-700">Account Code</th>
                  <th className="px-8 py-5 text-left text-base text-gray-700">Account Name</th>
                  <th className="px-8 py-5 text-left text-base text-gray-700">Type</th>
                  <th className="px-8 py-5 text-left text-base text-gray-700">Balance</th>
                  <th className="px-8 py-5 text-left text-base text-gray-700">Status</th>
                  <th className="px-8 py-5 text-left text-base text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {accounts.map((account) => (
                  <tr key={account.code} className="hover:bg-gray-50">
                    <td className="px-8 py-6"><p className="text-lg text-gray-900">{account.code}</p></td>
                    <td className="px-8 py-6"><p className="text-gray-900">{account.name}</p></td>
                    <td className="px-8 py-6">
                      <Badge variant="outline" className="border-blue-200 text-blue-700">{account.type}</Badge>
                    </td>
                    <td className="px-8 py-6"><p className="text-gray-900">{account.balance}</p></td>
                    <td className="px-8 py-6">
                      <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Active</Badge>
                    </td>
                    <td className="px-8 py-6">
                      <Button size="sm" variant="outline" className="h-10">Edit</Button>
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
