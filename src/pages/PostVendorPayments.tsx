import { DollarSign, Send } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { ProtectedRoute } from '../components/ProtectedRoute';

export function PostVendorPayments() {
  const payments = [
    { id: 'VP-2024-001', vendor: 'ABC Office Supplies', amount: '₱45,250.00', date: '2024-11-22', status: 'ready' },
    { id: 'VP-2024-002', vendor: 'Tech Solutions Corp.', amount: '₱125,000.00', date: '2024-11-22', status: 'ready' },
    { id: 'VP-2024-003', vendor: 'Maintenance Services', amount: '₱32,500.00', date: '2024-11-21', status: 'posted' },
  ];

  return (
    <ProtectedRoute module="post-vendor-payments">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl text-gray-900 mb-2">Post Vendor Payments</h1>
          <p className="text-gray-600">Post approved vendor payments to the general ledger</p>
        </div>

        <div className="space-y-4">
          {payments.map((payment) => (
            <Card key={payment.id} className="border-2 border-gray-200 p-8">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-xl text-gray-900 mb-2">{payment.id}</h3>
                  <p className="text-gray-700 mb-1">{payment.vendor}</p>
                  <p className="text-sm text-gray-600">{payment.date}</p>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <p className="text-2xl text-gray-900">{payment.amount}</p>
                    <Badge className={payment.status === 'posted' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}>
                      {payment.status === 'posted' ? 'Posted' : 'Ready to Post'}
                    </Badge>
                  </div>
                  {payment.status === 'ready' && (
                    <Button size="lg" className="h-14 bg-blue-600 hover:bg-blue-700">
                      <Send className="mr-2 h-5 w-5" />
                      Post to GL
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </ProtectedRoute>
  );
}
