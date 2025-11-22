import { useState } from 'react';
import { Plus, Search, Receipt, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { ProtectedRoute } from '../components/ProtectedRoute';

export function StudentCollections() {
  const [showPaymentDialog, setShowPaymentDialog] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<any>(null);
  const [paymentAmount, setPaymentAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [paymentError, setPaymentError] = useState('');

  const students = [
    {
      id: 'STU-2024-001',
      name: 'Maria Clara Santos',
      program: 'BS Computer Science',
      year: '3rd Year',
      totalFees: '₱45,250.00',
      amountPaid: '₱30,000.00',
      balance: '₱15,250.00',
      status: 'partial',
      lastPayment: '2024-10-15'
    },
    {
      id: 'STU-2024-002',
      name: 'Juan Miguel Reyes',
      program: 'BS Business Administration',
      year: '2nd Year',
      totalFees: '₱38,500.00',
      amountPaid: '₱38,500.00',
      balance: '₱0.00',
      status: 'paid',
      lastPayment: '2024-11-01'
    },
    {
      id: 'STU-2024-003',
      name: 'Anna Louise Cruz',
      program: 'BS Civil Engineering',
      year: '4th Year',
      totalFees: '₱52,800.00',
      amountPaid: '₱20,000.00',
      balance: '₱32,800.00',
      status: 'partial',
      lastPayment: '2024-09-20'
    },
    {
      id: 'STU-2024-004',
      name: 'Carlos Domingo',
      program: 'BS Education',
      year: '1st Year',
      totalFees: '₱35,000.00',
      amountPaid: '₱0.00',
      balance: '₱35,000.00',
      status: 'unpaid',
      lastPayment: 'N/A'
    },
    {
      id: 'STU-2024-005',
      name: 'Sofia Isabelle Garcia',
      program: 'BS Nursing',
      year: '3rd Year',
      totalFees: '₱48,900.00',
      amountPaid: '₱48,900.00',
      balance: '₱0.00',
      status: 'paid',
      lastPayment: '2024-11-10'
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'paid':
        return <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-green-200">Fully Paid</Badge>;
      case 'partial':
        return <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-100 border-amber-200">Partial Payment</Badge>;
      case 'unpaid':
        return <Badge className="bg-red-100 text-red-700 hover:bg-red-100 border-red-200">Unpaid</Badge>;
      default:
        return null;
    }
  };

  const handleRecordPayment = () => {
    setPaymentError('');
    
    if (!paymentAmount || Number(paymentAmount) <= 0) {
      setPaymentError('Please enter a valid payment amount');
      return;
    }

    const balance = parseFloat(selectedStudent.balance.replace(/[₱,]/g, ''));
    if (Number(paymentAmount) > balance) {
      setPaymentError('Payment amount cannot exceed outstanding balance');
      return;
    }

    if (!paymentMethod) {
      setPaymentError('Please select a payment method');
      return;
    }

    console.log('Payment recorded:', {
      student: selectedStudent,
      amount: paymentAmount,
      method: paymentMethod
    });

    setShowPaymentDialog(false);
    setPaymentAmount('');
    setPaymentMethod('');
    setSelectedStudent(null);
  };

  return (
    <ProtectedRoute>
      <div className="space-y-8">
        {/* Page Header */}
        <div>
          <h1 className="text-3xl text-gray-900 mb-2">Student Collections</h1>
          <p className="text-gray-600">Track and process student payment transactions</p>
        </div>

        {/* Summary Cards */}
        <div className="grid gap-6 sm:grid-cols-3">
          <Card className="border-2 border-green-100 bg-gradient-to-br from-green-50 to-white p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-600">Total Collected Today</p>
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <p className="text-2xl text-gray-900 mb-1">₱245,680.00</p>
            <p className="text-sm text-green-600">+12.5% from yesterday</p>
          </Card>

          <Card className="border-2 border-amber-100 bg-gradient-to-br from-amber-50 to-white p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-600">Pending Payments</p>
              <Receipt className="h-6 w-6 text-amber-600" />
            </div>
            <p className="text-2xl text-gray-900 mb-1">₱1,285,450.00</p>
            <p className="text-sm text-amber-600">1,234 students</p>
          </Card>

          <Card className="border-2 border-blue-100 bg-gradient-to-br from-blue-50 to-white p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-600">Total Transactions</p>
              <Receipt className="h-6 w-6 text-blue-600" />
            </div>
            <p className="text-2xl text-gray-900 mb-1">156</p>
            <p className="text-sm text-blue-600">Today</p>
          </Card>
        </div>

        {/* Search Bar */}
        <Card className="border-2 border-gray-100 p-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Search by student name, ID, or program..."
              className="h-14 pl-12 text-base"
            />
          </div>
        </Card>

        {/* Students Table */}
        <Card className="border-2 border-gray-100">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b-2 border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm text-gray-700">Student ID</th>
                  <th className="px-6 py-4 text-left text-sm text-gray-700">Name</th>
                  <th className="px-6 py-4 text-left text-sm text-gray-700">Program</th>
                  <th className="px-6 py-4 text-left text-sm text-gray-700">Total Fees</th>
                  <th className="px-6 py-4 text-left text-sm text-gray-700">Amount Paid</th>
                  <th className="px-6 py-4 text-left text-sm text-gray-700">Balance</th>
                  <th className="px-6 py-4 text-left text-sm text-gray-700">Status</th>
                  <th className="px-6 py-4 text-left text-sm text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {students.map((student) => (
                  <tr key={student.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <p className="text-gray-900">{student.id}</p>
                      <p className="text-sm text-gray-500">{student.year}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-gray-900">{student.name}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-gray-700">{student.program}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-gray-900">{student.totalFees}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-gray-900">{student.amountPaid}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className={`${student.balance === '₱0.00' ? 'text-green-600' : 'text-red-600'}`}>
                        {student.balance}
                      </p>
                    </td>
                    <td className="px-6 py-4">
                      {getStatusBadge(student.status)}
                    </td>
                    <td className="px-6 py-4">
                      <Dialog open={showPaymentDialog && selectedStudent?.id === student.id} onOpenChange={(open) => {
                        setShowPaymentDialog(open);
                        if (!open) {
                          setSelectedStudent(null);
                          setPaymentAmount('');
                          setPaymentMethod('');
                          setPaymentError('');
                        }
                      }}>
                        <DialogTrigger asChild>
                          <Button 
                            size="sm" 
                            className="h-10 bg-blue-600 hover:bg-blue-700"
                            disabled={student.status === 'paid'}
                            onClick={() => setSelectedStudent(student)}
                          >
                            <Plus className="mr-2 h-4 w-4" />
                            Record Payment
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-lg">
                          <DialogHeader>
                            <DialogTitle className="text-2xl">Record Student Payment</DialogTitle>
                          </DialogHeader>
                          {selectedStudent && (
                            <div className="space-y-6 pt-4">
                              <Card className="border-2 border-blue-100 bg-blue-50 p-4">
                                <p className="text-sm text-gray-600 mb-2">Student Information</p>
                                <p className="text-lg text-gray-900 mb-1">{selectedStudent.name}</p>
                                <p className="text-sm text-gray-700">{selectedStudent.id} • {selectedStudent.program}</p>
                                <div className="mt-4 pt-4 border-t border-blue-200">
                                  <div className="flex justify-between text-sm mb-2">
                                    <span className="text-gray-600">Total Fees:</span>
                                    <span className="text-gray-900">{selectedStudent.totalFees}</span>
                                  </div>
                                  <div className="flex justify-between text-sm mb-2">
                                    <span className="text-gray-600">Amount Paid:</span>
                                    <span className="text-gray-900">{selectedStudent.amountPaid}</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-gray-900">Outstanding Balance:</span>
                                    <span className="text-xl text-red-600">{selectedStudent.balance}</span>
                                  </div>
                                </div>
                              </Card>

                              <div className="space-y-2">
                                <Label htmlFor="paymentAmount" className="text-base">Payment Amount (₱) *</Label>
                                <Input
                                  id="paymentAmount"
                                  type="text"
                                  placeholder="0.00"
                                  value={paymentAmount}
                                  onChange={(e) => setPaymentAmount(e.target.value)}
                                  className={`h-12 text-base ${paymentError && !paymentAmount ? 'border-red-500' : ''}`}
                                />
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor="paymentMethod" className="text-base">Payment Method *</Label>
                                <Select value={paymentMethod} onValueChange={setPaymentMethod}>
                                  <SelectTrigger className={`h-12 text-base ${paymentError && !paymentMethod ? 'border-red-500' : ''}`}>
                                    <SelectValue placeholder="Select payment method" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="cash">Cash</SelectItem>
                                    <SelectItem value="check">Check</SelectItem>
                                    <SelectItem value="bank-transfer">Bank Transfer</SelectItem>
                                    <SelectItem value="online">Online Payment</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>

                              {paymentError && (
                                <Card className="border-2 border-red-200 bg-red-50 p-4">
                                  <p className="text-sm text-red-600 flex items-center gap-2">
                                    <span>⚠</span> {paymentError}
                                  </p>
                                </Card>
                              )}

                              <div className="flex gap-3 pt-4">
                                <Button 
                                  type="button"
                                  size="lg" 
                                  className="flex-1 h-14 bg-green-600 hover:bg-green-700"
                                  onClick={handleRecordPayment}
                                >
                                  <CheckCircle className="mr-2 h-5 w-5" />
                                  Confirm Payment
                                </Button>
                                <Button 
                                  type="button"
                                  size="lg" 
                                  variant="outline" 
                                  className="h-14 border-2"
                                  onClick={() => setShowPaymentDialog(false)}
                                >
                                  Cancel
                                </Button>
                              </div>
                            </div>
                          )}
                        </DialogContent>
                      </Dialog>
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