import { BookOpen, Plus } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { ProtectedRoute } from '../components/ProtectedRoute';

export function ManageAccountGroups() {
  const groups = [
    { id: 'AG-001', name: 'Cash and Bank Accounts', category: 'Asset', accounts: 5 },
    { id: 'AG-002', name: 'Receivables', category: 'Asset', accounts: 8 },
    { id: 'AG-003', name: 'Payables', category: 'Liability', accounts: 6 },
    { id: 'AG-004', name: 'Revenue Accounts', category: 'Revenue', accounts: 12 },
  ];

  return (
    <ProtectedRoute module="manage-account-groups">
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl text-gray-900 mb-2">Manage Account Groups</h1>
            <p className="text-gray-600">Define and organize general ledger account classifications</p>
          </div>
          <Button size="lg" className="h-16 bg-blue-600 hover:bg-blue-700 text-lg px-8">
            <Plus className="mr-2 h-6 w-6" />
            Create Account Group
          </Button>
        </div>

        <Card className="border-2 border-gray-100">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b-2 border-gray-200">
                <tr>
                  <th className="px-8 py-5 text-left text-base text-gray-700">Group ID</th>
                  <th className="px-8 py-5 text-left text-base text-gray-700">Group Name</th>
                  <th className="px-8 py-5 text-left text-base text-gray-700">Category</th>
                  <th className="px-8 py-5 text-left text-base text-gray-700">Accounts</th>
                  <th className="px-8 py-5 text-left text-base text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {groups.map((group) => (
                  <tr key={group.id} className="hover:bg-gray-50">
                    <td className="px-8 py-6">
                      <p className="text-lg text-gray-900">{group.id}</p>
                    </td>
                    <td className="px-8 py-6">
                      <p className="text-gray-900">{group.name}</p>
                    </td>
                    <td className="px-8 py-6">
                      <Badge variant="outline" className="border-blue-200 text-blue-700">
                        {group.category}
                      </Badge>
                    </td>
                    <td className="px-8 py-6">
                      <p className="text-gray-700">{group.accounts} accounts</p>
                    </td>
                    <td className="px-8 py-6">
                      <Button size="sm" variant="outline" className="h-10">
                        Manage
                      </Button>
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
