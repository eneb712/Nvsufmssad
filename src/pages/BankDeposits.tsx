import { Building2, Upload, Calendar } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { ProtectedRoute } from '../components/ProtectedRoute';

export function BankDeposits() {
  const deposits = [
    {
      id: 'DEP-2024-001',
      date: '2024-11-22',
      bank: 'Land Bank of the Philippines',
      accountNumber: 'XXXX-XXXX-1234',
      amount: '₱245,680.00',
      status: 'completed',
      referenceNumber: 'LBP-2024-789456'
    },
    {
      id: 'DEP-2024-002',
      date: '2024-11-21',
      bank: 'Development Bank of the Philippines',
      accountNumber: 'XXXX-XXXX-5678',
      amount: '₱189,250.00',
      status: 'pending',
      referenceNumber: 'DBP-2024-123789'
    },
    {
      id: 'DEP-2024-003',
      date: '2024-11-20',
      bank: 'Land Bank of the Philippines',
      accountNumber: 'XXXX-XXXX-1234',
      amount: '₱312,450.00',
      status: 'completed',
      referenceNumber: 'LBP-2024-654321'
    }
  ];

  const getStatusBadge = (status: string) => {
    return status === 'completed' ? (
      <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-green-200">
        Completed
      </Badge>
    ) : (
      <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-100 border-amber-200">
        Pending Confirmation
      </Badge>
    );
  };

  return (
    <ProtectedRoute module="bank-deposits">
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl text-gray-900 mb-2">Bank Deposits</h1>
            <p className="text-gray-600">Record and track daily bank deposits</p>
          </div>
          <Button size="lg" className="h-14 bg-blue-600 hover:bg-blue-700">
            <Upload className="mr-2 h-5 w-5" />
            Record New Deposit
          </Button>
        </div>

        {/* Summary Cards */}
        <div className="grid gap-6 sm:grid-cols-3">
          <Card className="border-2 border-green-100 bg-gradient-to-br from-green-50 to-white p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-600">Today's Deposits</p>
              <Building2 className="h-6 w-6 text-green-600" />
            </div>
            <p className="text-2xl text-gray-900 mb-1">₱245,680.00</p>
            <p className="text-sm text-green-600">1 transaction</p>
          </Card>

          <Card className="border-2 border-blue-100 bg-gradient-to-br from-blue-50 to-white p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-600">This Week</p>
              <Calendar className="h-6 w-6 text-blue-600" />
            </div>
            <p className="text-2xl text-gray-900 mb-1">₱1,247,380.00</p>
            <p className="text-sm text-blue-600">7 transactions</p>
          </Card>

          <Card className="border-2 border-amber-100 bg-gradient-to-br from-amber-50 to-white p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-600">Pending Confirmation</p>
              <Building2 className="h-6 w-6 text-amber-600" />
            </div>
            <p className="text-2xl text-gray-900 mb-1">₱189,250.00</p>
            <p className="text-sm text-amber-600">1 transaction</p>
          </Card>
        </div>

        {/* Deposits Table */}
        <Card className="border-2 border-gray-100">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b-2 border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm text-gray-700">Deposit ID</th>
                  <th className="px-6 py-4 text-left text-sm text-gray-700">Date</th>
                  <th className="px-6 py-4 text-left text-sm text-gray-700">Bank</th>
                  <th className="px-6 py-4 text-left text-sm text-gray-700">Account Number</th>
                  <th className="px-6 py-4 text-left text-sm text-gray-700">Amount</th>
                  <th className="px-6 py-4 text-left text-sm text-gray-700">Reference Number</th>
                  <th className="px-6 py-4 text-left text-sm text-gray-700">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {deposits.map((deposit) => (
                  <tr key={deposit.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <p className="text-gray-900">{deposit.id}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-gray-700">{deposit.date}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-gray-900">{deposit.bank}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-gray-700">{deposit.accountNumber}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-gray-900">{deposit.amount}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-gray-600">{deposit.referenceNumber}</p>
                    </td>
                    <td className="px-6 py-4">
                      {getStatusBadge(deposit.status)}
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
