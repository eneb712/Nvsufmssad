import { Building2, Save } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { ProtectedRoute } from '../components/ProtectedRoute';

export function RecordBankDeposit() {
  const [formData, setFormData] = useState({
    depositDate: '',
    bank: '',
    amount: '',
    referenceNumber: ''
  });

  return (
    <ProtectedRoute module="record-bank-deposit">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl text-gray-900 mb-2">Record Bank Deposit</h1>
          <p className="text-gray-600">Record daily cash deposits to university bank accounts</p>
        </div>

        <Card className="max-w-2xl border-2 border-blue-100 p-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100">
              <Building2 className="h-7 w-7 text-blue-600" />
            </div>
            <div>
              <h2 className="text-xl text-gray-900">Deposit Information</h2>
              <p className="text-sm text-gray-600">Enter bank deposit details</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <Label className="text-base">Deposit Date *</Label>
              <Input
                type="date"
                value={formData.depositDate}
                onChange={(e) => setFormData({ ...formData, depositDate: e.target.value })}
                className="h-14 text-base border-2"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-base">Bank *</Label>
              <Select value={formData.bank} onValueChange={(value) => setFormData({ ...formData, bank: value })}>
                <SelectTrigger className="h-14 text-base border-2">
                  <SelectValue placeholder="Select bank" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="lbp">Land Bank of the Philippines</SelectItem>
                  <SelectItem value="dbp">Development Bank of the Philippines</SelectItem>
                  <SelectItem value="pnb">Philippine National Bank</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="text-base">Deposit Amount (₱) *</Label>
              <Input
                type="text"
                placeholder="0.00"
                value={formData.amount}
                onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                className="h-14 text-base border-2"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-base">Bank Reference Number</Label>
              <Input
                placeholder="Enter reference number"
                value={formData.referenceNumber}
                onChange={(e) => setFormData({ ...formData, referenceNumber: e.target.value })}
                className="h-14 text-base border-2"
              />
            </div>

            <Button size="lg" className="w-full h-16 bg-blue-600 hover:bg-blue-700 text-lg">
              <Save className="mr-2 h-6 w-6" />
              Record Deposit
            </Button>
          </div>
        </Card>
      </div>
    </ProtectedRoute>
  );
}
