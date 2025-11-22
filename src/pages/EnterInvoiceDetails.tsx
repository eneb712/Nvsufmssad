import { FileText, Save } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { ProtectedRoute } from '../components/ProtectedRoute';

export function EnterInvoiceDetails() {
  const [formData, setFormData] = useState({
    invoiceNumber: '',
    vendorCode: '',
    invoiceDate: '',
    amount: '',
    description: ''
  });

  return (
    <ProtectedRoute module="enter-invoice-details">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl text-gray-900 mb-2">Enter Invoice Details</h1>
          <p className="text-gray-600">Record incoming vendor invoices for processing</p>
        </div>

        <Card className="max-w-2xl border-2 border-blue-100 p-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100">
              <FileText className="h-7 w-7 text-blue-600" />
            </div>
            <div>
              <h2 className="text-xl text-gray-900">Invoice Information</h2>
              <p className="text-sm text-gray-600">Enter vendor invoice details</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <Label className="text-base">Invoice Number *</Label>
              <Input
                placeholder="Enter invoice number"
                value={formData.invoiceNumber}
                onChange={(e) => setFormData({ ...formData, invoiceNumber: e.target.value })}
                className="h-14 text-base border-2"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-base">Vendor Code *</Label>
              <Input
                placeholder="Enter vendor code"
                value={formData.vendorCode}
                onChange={(e) => setFormData({ ...formData, vendorCode: e.target.value })}
                className="h-14 text-base border-2"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-base">Invoice Date *</Label>
              <Input
                type="date"
                value={formData.invoiceDate}
                onChange={(e) => setFormData({ ...formData, invoiceDate: e.target.value })}
                className="h-14 text-base border-2"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-base">Invoice Amount (₱) *</Label>
              <Input
                type="text"
                placeholder="0.00"
                value={formData.amount}
                onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                className="h-14 text-base border-2"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-base">Description</Label>
              <textarea
                placeholder="Enter invoice description..."
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={4}
                className="w-full rounded-xl border-2 border-gray-200 p-4 text-base"
              />
            </div>

            <Button size="lg" className="w-full h-16 bg-blue-600 hover:bg-blue-700 text-lg">
              <Save className="mr-2 h-6 w-6" />
              Save Invoice
            </Button>
          </div>
        </Card>
      </div>
    </ProtectedRoute>
  );
}
