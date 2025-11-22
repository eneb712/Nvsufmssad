import { useState } from 'react';
import { FileText, Save, Send } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { ProtectedRoute } from '../components/ProtectedRoute';

export function PrepareVoucher() {
  const [formData, setFormData] = useState({
    voucherType: '',
    documentDate: '',
    postingDate: '',
    referenceNumber: '',
    vendorCode: '',
    amount: '',
    description: '',
    costCenter: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.voucherType) newErrors.voucherType = 'Voucher type is required';
    if (!formData.documentDate) newErrors.documentDate = 'Document date is required';
    if (!formData.amount) newErrors.amount = 'Amount is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log('Voucher prepared:', formData);
    }
  };

  return (
    <ProtectedRoute module="prepare-voucher">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl text-gray-900 mb-2">Prepare Voucher</h1>
          <p className="text-gray-600">Create and submit payment vouchers for vendor transactions</p>
        </div>

        <Card className="border-2 border-blue-100 p-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100">
              <FileText className="h-7 w-7 text-blue-600" />
            </div>
            <div>
              <h2 className="text-xl text-gray-900">Voucher Information</h2>
              <p className="text-sm text-gray-600">Complete all required fields with accurate information</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="voucherType" className="text-base">Voucher Type *</Label>
                <Select value={formData.voucherType} onValueChange={(value) => setFormData({ ...formData, voucherType: value })}>
                  <SelectTrigger className={`h-14 text-base border-2 ${errors.voucherType ? 'border-red-500' : ''}`}>
                    <SelectValue placeholder="Select voucher type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="vendor-payment">Vendor Payment</SelectItem>
                    <SelectItem value="reimbursement">Reimbursement</SelectItem>
                    <SelectItem value="petty-cash">Petty Cash</SelectItem>
                    <SelectItem value="utility">Utility Payment</SelectItem>
                  </SelectContent>
                </Select>
                {errors.voucherType && <p className="text-sm text-red-600">⚠ {errors.voucherType}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="referenceNumber" className="text-base">Reference Number</Label>
                <Input
                  id="referenceNumber"
                  placeholder="e.g., INV-2024-001"
                  value={formData.referenceNumber}
                  onChange={(e) => setFormData({ ...formData, referenceNumber: e.target.value })}
                  className="h-14 text-base border-2"
                />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="documentDate" className="text-base">Document Date *</Label>
                <Input
                  id="documentDate"
                  type="date"
                  value={formData.documentDate}
                  onChange={(e) => setFormData({ ...formData, documentDate: e.target.value })}
                  className={`h-14 text-base border-2 ${errors.documentDate ? 'border-red-500' : ''}`}
                />
                {errors.documentDate && <p className="text-sm text-red-600">⚠ {errors.documentDate}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="postingDate" className="text-base">Posting Date</Label>
                <Input
                  id="postingDate"
                  type="date"
                  value={formData.postingDate}
                  onChange={(e) => setFormData({ ...formData, postingDate: e.target.value })}
                  className="h-14 text-base border-2"
                />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="vendorCode" className="text-base">Vendor Code</Label>
                <Input
                  id="vendorCode"
                  placeholder="Enter vendor code"
                  value={formData.vendorCode}
                  onChange={(e) => setFormData({ ...formData, vendorCode: e.target.value })}
                  className="h-14 text-base border-2"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="amount" className="text-base">Amount (₱) *</Label>
                <Input
                  id="amount"
                  type="text"
                  placeholder="0.00"
                  value={formData.amount}
                  onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                  className={`h-14 text-base border-2 ${errors.amount ? 'border-red-500' : ''}`}
                />
                {errors.amount && <p className="text-sm text-red-600">⚠ {errors.amount}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="costCenter" className="text-base">Cost Center</Label>
              <Input
                id="costCenter"
                placeholder="e.g., CC-001"
                value={formData.costCenter}
                onChange={(e) => setFormData({ ...formData, costCenter: e.target.value })}
                className="h-14 text-base border-2"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description" className="text-base">Description</Label>
              <textarea
                id="description"
                placeholder="Enter voucher description..."
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={4}
                className="w-full rounded-xl border-2 border-gray-200 p-4 text-base transition-colors focus:border-blue-500 focus:outline-none"
              />
            </div>

            <div className="flex gap-4 pt-6">
              <Button size="lg" className="flex-1 h-16 bg-blue-600 hover:bg-blue-700 text-lg" onClick={handleSubmit}>
                <Save className="mr-2 h-6 w-6" />
                Save Voucher
              </Button>
              <Button size="lg" variant="outline" className="flex-1 h-16 border-2 border-green-500 text-green-700 hover:bg-green-50 text-lg">
                <Send className="mr-2 h-6 w-6" />
                Submit for Approval
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </ProtectedRoute>
  );
}
