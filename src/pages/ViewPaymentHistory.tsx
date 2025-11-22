import { History, Download } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { ProtectedRoute } from '../components/ProtectedRoute';

export function ViewPaymentHistory() {
  const payments = [
    { id: 'PAY-2024-156', vendor: 'ABC Office Supplies', amount: '₱45,250.00', date: '2024-11-22', type: 'Vendor Payment', status: 'completed' },
    { id: 'PAY-2024-155', vendor: 'Tech Solutions Corp.', amount: '₱125,000.00', date: '2024-11-21', type: 'Vendor Payment', status: 'completed' },
    { id: 'PAY-2024-154', vendor: 'Maintenance Services', amount: '₱32,500.00', date: '2024-11-20', type: 'Service Payment', status: 'completed' },
  ];

  return (
    <ProtectedRoute module="view-payment-history">
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl text-gray-900 mb-2">View Payment History</h1>
            <p className="text-gray-600">Review historical payment transactions and records</p>
          </div>
          <Button size="lg" variant="outline" className="h-14 border-2">
            <Download className="mr-2 h-5 w-5" />
            Export History
          </Button>
        </div>

        <Card className="border-2 border-gray-100">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b-2 border-gray-200">
                <tr>
                  <th className="px-8 py-5 text-left text-base text-gray-700">Payment ID</th>
                  <th className="px-8 py-5 text-left text-base text-gray-700">Vendor/Recipient</th>
                  <th className="px-8 py-5 text-left text-base text-gray-700">Type</th>
                  <th className="px-8 py-5 text-left text-base text-gray-700">Amount</th>
                  <th className="px-8 py-5 text-left text-base text-gray-700">Date</th>
                  <th className="px-8 py-5 text-left text-base text-gray-700">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {payments.map((payment) => (
                  <tr key={payment.id} className="hover:bg-gray-50">
                    <td className="px-8 py-6"><p className="text-gray-900">{payment.id}</p></td>
                    <td className="px-8 py-6"><p className="text-gray-900">{payment.vendor}</p></td>
                    <td className="px-8 py-6">
                      <Badge variant="outline" className="border-blue-200 text-blue-700">{payment.type}</Badge>
                    </td>
                    <td className="px-8 py-6"><p className="text-lg text-gray-900">{payment.amount}</p></td>
                    <td className="px-8 py-6"><p className="text-gray-700">{payment.date}</p></td>
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
