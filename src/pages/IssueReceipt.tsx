import { useState } from 'react';
import { Receipt, Printer, Search } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { ProtectedRoute } from '../components/ProtectedRoute';

export function IssueReceipt() {
  const [formData, setFormData] = useState({
    studentId: '',
    studentName: '',
    program: '',
    amount: '',
    paymentFor: '',
    paymentMethod: ''
  });

  const handlePrintReceipt = () => {
    console.log('Printing receipt...', formData);
  };

  return (
    <ProtectedRoute module="issue-receipt">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl text-gray-900 mb-2">Issue Receipt</h1>
          <p className="text-gray-600">Generate official payment receipts for students</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Receipt Form */}
          <Card className="border-2 border-blue-100 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
                <Receipt className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-xl text-gray-900">Receipt Information</h2>
            </div>

            <div className="space-y-6">
              <div className="flex gap-3">
                <div className="flex-1 space-y-2">
                  <Label htmlFor="studentId" className="text-base">Student ID *</Label>
                  <Input
                    id="studentId"
                    placeholder="Enter student ID"
                    value={formData.studentId}
                    onChange={(e) => setFormData({ ...formData, studentId: e.target.value })}
                    className="h-12 text-base border-2"
                  />
                </div>
                <Button size="lg" className="h-12 mt-8 bg-blue-600 hover:bg-blue-700">
                  <Search className="h-5 w-5" />
                </Button>
              </div>

              <div className="space-y-2">
                <Label htmlFor="studentName" className="text-base">Student Name *</Label>
                <Input
                  id="studentName"
                  placeholder="Auto-filled after search"
                  value={formData.studentName}
                  onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                  className="h-12 text-base border-2"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="program" className="text-base">Program</Label>
                <Input
                  id="program"
                  placeholder="Auto-filled after search"
                  value={formData.program}
                  onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                  className="h-12 text-base border-2"
                  disabled
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
                  className="h-12 text-base border-2"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="paymentFor" className="text-base">Payment For *</Label>
                <Input
                  id="paymentFor"
                  placeholder="e.g., Tuition Fee, Laboratory Fee"
                  value={formData.paymentFor}
                  onChange={(e) => setFormData({ ...formData, paymentFor: e.target.value })}
                  className="h-12 text-base border-2"
                />
              </div>

              <Button 
                size="lg" 
                className="w-full h-14 bg-green-600 hover:bg-green-700"
                onClick={handlePrintReceipt}
              >
                <Printer className="mr-2 h-5 w-5" />
                Generate & Print Receipt
              </Button>
            </div>
          </Card>

          {/* Receipt Preview */}
          <Card className="border-2 border-gray-200 p-8 bg-gray-50">
            <h3 className="text-lg text-gray-900 mb-6 text-center">Receipt Preview</h3>
            <div className="bg-white border-2 border-gray-300 p-8 rounded-lg">
              <div className="text-center mb-6">
                <h2 className="text-xl text-gray-900">Nueva Vizcaya State University</h2>
                <p className="text-sm text-gray-600">Official Receipt</p>
              </div>
              
              <div className="space-y-3 border-t border-b border-gray-200 py-4 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Receipt No:</span>
                  <span className="text-gray-900">OR-2024-{Math.floor(Math.random() * 10000)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Date:</span>
                  <span className="text-gray-900">{new Date().toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Student ID:</span>
                  <span className="text-gray-900">{formData.studentId || '---'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Name:</span>
                  <span className="text-gray-900">{formData.studentName || '---'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Payment For:</span>
                  <span className="text-gray-900">{formData.paymentFor || '---'}</span>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg text-gray-700">Amount Paid:</span>
                  <span className="text-2xl text-blue-700">
                    ₱{formData.amount || '0.00'}
                  </span>
                </div>
              </div>

              <div className="text-center text-xs text-gray-500 mt-6">
                <p>This is an official receipt of payment</p>
                <p>Please keep for your records</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </ProtectedRoute>
  );
}
