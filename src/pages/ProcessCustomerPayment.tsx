import { useState } from 'react';
import { CreditCard, Search, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Badge } from '../components/ui/badge';
import { ProtectedRoute } from '../components/ProtectedRoute';

export function ProcessCustomerPayment() {
  const [formData, setFormData] = useState({
    customerId: '',
    customerName: '',
    paymentAmount: '',
    paymentMethod: '',
    referenceNumber: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.customerId) newErrors.customerId = 'Customer ID is required';
    if (!formData.paymentAmount) newErrors.paymentAmount = 'Payment amount is required';
    if (!formData.paymentMethod) newErrors.paymentMethod = 'Payment method is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleProcess = () => {
    if (validateForm()) {
      console.log('Processing payment:', formData);
    }
  };

  return (
    <ProtectedRoute module="process-customer-payment">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl text-gray-900 mb-2">Process Customer Payment</h1>
          <p className="text-gray-600">Record student tuition and fee payments</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Payment Form */}
          <Card className="border-2 border-blue-100 p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100">
                <CreditCard className="h-7 w-7 text-blue-600" />
              </div>
              <div>
                <h2 className="text-xl text-gray-900">Payment Details</h2>
                <p className="text-sm text-gray-600">Enter customer information and payment details</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex gap-3">
                <div className="flex-1 space-y-2">
                  <Label htmlFor="customerId" className="text-base">Customer/Student ID *</Label>
                  <Input
                    id="customerId"
                    placeholder="Enter ID number"
                    value={formData.customerId}
                    onChange={(e) => setFormData({ ...formData, customerId: e.target.value })}
                    className={`h-14 text-base border-2 ${errors.customerId ? 'border-red-500' : ''}`}
                  />
                  {errors.customerId && <p className="text-sm text-red-600">⚠ {errors.customerId}</p>}
                </div>
                <Button size="lg" className="h-14 mt-8 bg-blue-600 hover:bg-blue-700">
                  <Search className="h-5 w-5" />
                </Button>
              </div>

              <div className="space-y-2">
                <Label htmlFor="customerName" className="text-base">Customer Name</Label>
                <Input
                  id="customerName"
                  placeholder="Auto-filled after search"
                  value={formData.customerName}
                  onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                  className="h-14 text-base border-2"
                  disabled
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="paymentAmount" className="text-base">Payment Amount (₱) *</Label>
                <Input
                  id="paymentAmount"
                  type="text"
                  placeholder="0.00"
                  value={formData.paymentAmount}
                  onChange={(e) => setFormData({ ...formData, paymentAmount: e.target.value })}
                  className={`h-14 text-base border-2 ${errors.paymentAmount ? 'border-red-500' : ''}`}
                />
                {errors.paymentAmount && <p className="text-sm text-red-600">⚠ {errors.paymentAmount}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="paymentMethod" className="text-base">Payment Method *</Label>
                <Select value={formData.paymentMethod} onValueChange={(value) => setFormData({ ...formData, paymentMethod: value })}>
                  <SelectTrigger className={`h-14 text-base border-2 ${errors.paymentMethod ? 'border-red-500' : ''}`}>
                    <SelectValue placeholder="Select payment method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cash">Cash</SelectItem>
                    <SelectItem value="check">Check</SelectItem>
                    <SelectItem value="bank-transfer">Bank Transfer</SelectItem>
                    <SelectItem value="online-payment">Online Payment</SelectItem>
                  </SelectContent>
                </Select>
                {errors.paymentMethod && <p className="text-sm text-red-600">⚠ {errors.paymentMethod}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="referenceNumber" className="text-base">Reference Number</Label>
                <Input
                  id="referenceNumber"
                  placeholder="Check number or transaction ID"
                  value={formData.referenceNumber}
                  onChange={(e) => setFormData({ ...formData, referenceNumber: e.target.value })}
                  className="h-14 text-base border-2"
                />
              </div>

              <Button 
                size="lg" 
                className="w-full h-16 bg-green-600 hover:bg-green-700 text-lg"
                onClick={handleProcess}
              >
                <CheckCircle className="mr-2 h-6 w-6" />
                Process Payment
              </Button>
            </div>
          </Card>

          {/* Summary Card */}
          <Card className="border-2 border-gray-200 p-8 bg-gradient-to-br from-gray-50 to-white">
            <h3 className="text-xl text-gray-900 mb-6">Today's Collections Summary</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center p-4 bg-white rounded-lg border border-gray-200">
                <span className="text-gray-600">Total Transactions</span>
                <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 text-lg px-4 py-2">
                  42
                </Badge>
              </div>
              
              <div className="flex justify-between items-center p-4 bg-white rounded-lg border border-gray-200">
                <span className="text-gray-600">Total Amount Collected</span>
                <span className="text-2xl text-green-600">₱245,680.00</span>
              </div>
            </div>

            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
              <h4 className="text-sm text-gray-700 mb-4">Payment Method Breakdown</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Cash</span>
                  <span className="text-sm text-gray-900">₱125,000.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Bank Transfer</span>
                  <span className="text-sm text-gray-900">₱85,680.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Check</span>
                  <span className="text-sm text-gray-900">₱35,000.00</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </ProtectedRoute>
  );
}
