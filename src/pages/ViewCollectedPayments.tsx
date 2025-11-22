import { ClipboardList, Download } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { ProtectedRoute } from '../components/ProtectedRoute';

export function ViewCollectedPayments() {
  const collections = [
    { date: '2024-11-22', type: 'Tuition Fees', amount: '₱245,680.00', transactions: 42, collector: 'Cashier 1' },
    { date: '2024-11-21', type: 'Laboratory Fees', amount: '₱89,250.00', transactions: 28, collector: 'Cashier 2' },
    { date: '2024-11-20', type: 'Miscellaneous Fees', amount: '₱52,400.00', transactions: 15, collector: 'Cashier 1' },
  ];

  return (
    <ProtectedRoute module="view-collected-payments">
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl text-gray-900 mb-2">View Collected Payments</h1>
            <p className="text-gray-600">Monitor daily collection summaries across all cashiers</p>
          </div>
          <Button size="lg" variant="outline" className="h-14 border-2">
            <Download className="mr-2 h-5 w-5" />
            Export Report
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          <Card className="border-2 border-green-100 bg-gradient-to-br from-green-50 to-white p-6">
            <p className="text-sm text-gray-600 mb-2">Total Collections Today</p>
            <p className="text-3xl text-gray-900 mb-1">₱245,680.00</p>
            <p className="text-sm text-green-600">42 transactions</p>
          </Card>

          <Card className="border-2 border-blue-100 bg-gradient-to-br from-blue-50 to-white p-6">
            <p className="text-sm text-gray-600 mb-2">This Week</p>
            <p className="text-3xl text-gray-900 mb-1">₱1,247,380.00</p>
            <p className="text-sm text-blue-600">195 transactions</p>
          </Card>

          <Card className="border-2 border-amber-100 bg-gradient-to-br from-amber-50 to-white p-6">
            <p className="text-sm text-gray-600 mb-2">This Month</p>
            <p className="text-3xl text-gray-900 mb-1">₱4,892,150.00</p>
            <p className="text-sm text-amber-600">756 transactions</p>
          </Card>
        </div>

        <Card className="border-2 border-gray-100">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b-2 border-gray-200">
                <tr>
                  <th className="px-8 py-5 text-left text-base text-gray-700">Date</th>
                  <th className="px-8 py-5 text-left text-base text-gray-700">Collection Type</th>
                  <th className="px-8 py-5 text-left text-base text-gray-700">Amount</th>
                  <th className="px-8 py-5 text-left text-base text-gray-700">Transactions</th>
                  <th className="px-8 py-5 text-left text-base text-gray-700">Collected By</th>
                  <th className="px-8 py-5 text-left text-base text-gray-700">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {collections.map((collection, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-8 py-6"><p className="text-gray-700">{collection.date}</p></td>
                    <td className="px-8 py-6"><p className="text-gray-900">{collection.type}</p></td>
                    <td className="px-8 py-6"><p className="text-lg text-gray-900">{collection.amount}</p></td>
                    <td className="px-8 py-6"><p className="text-gray-700">{collection.transactions}</p></td>
                    <td className="px-8 py-6"><p className="text-gray-700">{collection.collector}</p></td>
                    <td className="px-8 py-6">
                      <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Completed</Badge>
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
