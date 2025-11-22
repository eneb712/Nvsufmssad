import { Receipt, Printer } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { ProtectedRoute } from '../components/ProtectedRoute';

export function IssueOfficialReceipt() {
  const [formData, setFormData] = useState({
    receiptNumber: `OR-${new Date().getFullYear()}-${Math.floor(Math.random() * 10000)}`,
    payerName: '',
    amount: '',
    paymentFor: ''
  });

  return (
    <ProtectedRoute module="issue-official-receipt">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl text-gray-900 mb-2">Issue Official Receipt (OR)</h1>
          <p className="text-gray-600">Generate official receipts for customer payments</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <Card className="border-2 border-blue-100 p-8">
            <div className="space-y-6">
              <div className="space-y-2">
                <Label className="text-base">Receipt Number</Label>
                <Input value={formData.receiptNumber} disabled className="h-14 text-base border-2" />
              </div>
              <div className="space-y-2">
                <Label className="text-base">Payer Name *</Label>
                <Input
                  placeholder="Enter payer name"
                  value={formData.payerName}
                  onChange={(e) => setFormData({ ...formData, payerName: e.target.value })}
                  className="h-14 text-base border-2"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-base">Amount (₱) *</Label>
                <Input
                  placeholder="0.00"
                  value={formData.amount}
                  onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                  className="h-14 text-base border-2"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-base">Payment For *</Label>
                <Input
                  placeholder="e.g., Tuition Fee"
                  value={formData.paymentFor}
                  onChange={(e) => setFormData({ ...formData, paymentFor: e.target.value })}
                  className="h-14 text-base border-2"
                />
              </div>
              <Button size="lg" className="w-full h-16 bg-green-600 hover:bg-green-700 text-lg">
                <Printer className="mr-2 h-6 w-6" />
                Generate & Print Receipt
              </Button>
            </div>
          </Card>

          <Card className="border-2 border-gray-200 p-8 bg-gray-50">
            <h3 className="text-lg text-gray-900 mb-6 text-center">Receipt Preview</h3>
            <div className="bg-white border-2 p-8 rounded-lg">
              <div className="text-center mb-6">
                <h2 className="text-xl text-gray-900">Nueva Vizcaya State University</h2>
                <p className="text-sm text-gray-600">Official Receipt</p>
              </div>
              <div className="space-y-3 border-t border-b py-4 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Receipt No:</span>
                  <span className="text-gray-900">{formData.receiptNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Date:</span>
                  <span className="text-gray-900">{new Date().toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Received from:</span>
                  <span className="text-gray-900">{formData.payerName || '---'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Payment for:</span>
                  <span className="text-gray-900">{formData.paymentFor || '---'}</span>
                </div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-lg text-gray-700">Amount:</span>
                  <span className="text-2xl text-blue-700">₱{formData.amount || '0.00'}</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </ProtectedRoute>
  );
}
