import { ShoppingCart, CheckCircle, XCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { ProtectedRoute } from '../components/ProtectedRoute';

export function VerifyPurchaseOrder() {
  const purchaseOrders = [
    {
      poNumber: 'PO-2024-001',
      vendor: 'ABC Office Supplies Inc.',
      date: '2024-11-20',
      amount: '₱45,250.00',
      items: 12,
      status: 'pending',
      description: 'Office supplies for Q4'
    },
    {
      poNumber: 'PO-2024-002',
      vendor: 'Tech Solutions Corp.',
      date: '2024-11-21',
      amount: '₱125,000.00',
      items: 5,
      status: 'pending',
      description: 'Computer equipment for IT lab'
    },
    {
      poNumber: 'PO-2024-003',
      vendor: 'Educational Materials Hub',
      date: '2024-11-22',
      amount: '₱78,900.00',
      items: 25,
      status: 'pending',
      description: 'Textbooks and learning materials'
    }
  ];

  return (
    <ProtectedRoute module="verify-purchase-order">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl text-gray-900 mb-2">Verify Purchase Order</h1>
          <p className="text-gray-600">Review and verify incoming purchase orders from departments</p>
        </div>

        {/* Summary Cards */}
        <div className="grid gap-6 sm:grid-cols-3">
          <Card className="border-2 border-amber-100 bg-gradient-to-br from-amber-50 to-white p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-600">Pending Verification</p>
              <ShoppingCart className="h-6 w-6 text-amber-600" />
            </div>
            <p className="text-2xl text-gray-900 mb-1">3</p>
            <p className="text-sm text-amber-600">Purchase orders</p>
          </Card>

          <Card className="border-2 border-green-100 bg-gradient-to-br from-green-50 to-white p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-600">Verified Today</p>
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <p className="text-2xl text-gray-900 mb-1">8</p>
            <p className="text-sm text-green-600">Purchase orders</p>
          </Card>

          <Card className="border-2 border-blue-100 bg-gradient-to-br from-blue-50 to-white p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-600">Total Value</p>
              <ShoppingCart className="h-6 w-6 text-blue-600" />
            </div>
            <p className="text-2xl text-gray-900 mb-1">₱249,150.00</p>
            <p className="text-sm text-blue-600">Pending POs</p>
          </Card>
        </div>

        {/* Purchase Orders List */}
        <div className="space-y-4">
          {purchaseOrders.map((po) => (
            <Card key={po.poNumber} className="border-2 border-gray-200 p-8 hover:border-blue-300 transition-all">
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl text-gray-900">{po.poNumber}</h3>
                    <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-100 border-amber-200">
                      Pending Verification
                    </Badge>
                  </div>
                  <p className="text-gray-700 mb-1">{po.vendor}</p>
                  <p className="text-sm text-gray-600">{po.description}</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl text-gray-900">{po.amount}</p>
                  <p className="text-sm text-gray-600 mt-1">{po.items} items</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="text-xs text-gray-600 mb-1">PO Date</p>
                  <p className="text-sm text-gray-900">{po.date}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 mb-1">Vendor</p>
                  <p className="text-sm text-gray-900">{po.vendor}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 mb-1">Total Items</p>
                  <p className="text-sm text-gray-900">{po.items}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Button size="lg" className="flex-1 h-14 bg-green-600 hover:bg-green-700 text-lg">
                  <CheckCircle className="mr-2 h-6 w-6" />
                  Verify & Approve
                </Button>
                <Button size="lg" variant="outline" className="flex-1 h-14 border-2 border-red-300 text-red-600 hover:bg-red-50 text-lg">
                  <XCircle className="mr-2 h-6 w-6" />
                  Reject
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </ProtectedRoute>
  );
}
