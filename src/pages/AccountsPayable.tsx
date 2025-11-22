import { useState } from 'react';
import { Plus, FileText, Download, Filter, Search } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { ProtectedRoute } from '../components/ProtectedRoute';

export function AccountsPayable() {
  const [showNewPaymentDialog, setShowNewPaymentDialog] = useState(false);
  const [formData, setFormData] = useState({
    vendor: '',
    invoiceNumber: '',
    amount: '',
    dueDate: '',
    description: '',
    category: ''
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const vouchers = [
    {
      id: 'AP-2024-1001',
      vendor: 'ABC Office Supplies Inc.',
      invoiceNumber: 'INV-45678',
      amount: '₱45,250.00',
      dueDate: '2024-12-01',
      status: 'pending',
      category: 'Office Supplies',
      dateCreated: '2024-11-20'
    },
    {
      id: 'AP-2024-1002',
      vendor: 'Tech Solutions Corp.',
      invoiceNumber: 'INV-78901',
      amount: '₱125,000.00',
      dueDate: '2024-11-25',
      status: 'approved',
      category: 'IT Equipment',
      dateCreated: '2024-11-19'
    },
    {
      id: 'AP-2024-1003',
      vendor: 'Maintenance Services Ltd.',
      invoiceNumber: 'INV-23456',
      amount: '₱32,500.00',
      dueDate: '2024-11-30',
      status: 'pending',
      category: 'Maintenance',
      dateCreated: '2024-11-21'
    },
    {
      id: 'AP-2024-1004',
      vendor: 'Educational Materials Hub',
      invoiceNumber: 'INV-89012',
      amount: '₱78,900.00',
      dueDate: '2024-11-28',
      status: 'approved',
      category: 'Educational Materials',
      dateCreated: '2024-11-18'
    },
    {
      id: 'AP-2024-1005',
      vendor: 'Utility Company',
      invoiceNumber: 'INV-34567',
      amount: '₱156,780.00',
      dueDate: '2024-12-05',
      status: 'rejected',
      category: 'Utilities',
      dateCreated: '2024-11-22'
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'approved':
        return <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-green-200">Approved</Badge>;
      case 'pending':
        return <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-100 border-amber-200">Pending</Badge>;
      case 'rejected':
        return <Badge className="bg-red-100 text-red-700 hover:bg-red-100 border-red-200">Rejected</Badge>;
      default:
        return null;
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    
    if (!formData.vendor) errors.vendor = 'Vendor name is required';
    if (!formData.invoiceNumber) errors.invoiceNumber = 'Invoice number is required';
    if (!formData.amount) {
      errors.amount = 'Amount is required';
    } else if (isNaN(Number(formData.amount)) || Number(formData.amount) <= 0) {
      errors.amount = 'Please enter a valid amount';
    }
    if (!formData.dueDate) errors.dueDate = 'Due date is required';
    if (!formData.category) errors.category = 'Category is required';
    if (!formData.description) errors.description = 'Description is required';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      setShowNewPaymentDialog(false);
      setFormData({
        vendor: '',
        invoiceNumber: '',
        amount: '',
        dueDate: '',
        description: '',
        category: ''
      });
      setFormErrors({});
    }
  };

  return (
    <ProtectedRoute>
      <div className="space-y-8">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl text-gray-900 mb-2">Accounts Payable</h1>
            <p className="text-gray-600">Manage vendor payments and invoice processing</p>
          </div>
          <Dialog open={showNewPaymentDialog} onOpenChange={setShowNewPaymentDialog}>
            <DialogTrigger asChild>
              <Button size="lg" className="h-14 bg-blue-600 hover:bg-blue-700 shadow-lg">
                <Plus className="mr-2 h-5 w-5" />
                Process New Payment
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle className="text-2xl">Process Vendor Payment</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-6 pt-4">
                <div className="space-y-2">
                  <Label htmlFor="vendor" className="text-base">Vendor Name *</Label>
                  <Input
                    id="vendor"
                    placeholder="Enter vendor name or select from list"
                    value={formData.vendor}
                    onChange={(e) => setFormData({ ...formData, vendor: e.target.value })}
                    className={`h-12 text-base ${formErrors.vendor ? 'border-red-500' : ''}`}
                  />
                  {formErrors.vendor && (
                    <p className="text-sm text-red-600 flex items-center gap-1">
                      <span>⚠</span> {formErrors.vendor}
                    </p>
                  )}
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="invoiceNumber" className="text-base">Invoice Number *</Label>
                    <Input
                      id="invoiceNumber"
                      placeholder="INV-XXXXX"
                      value={formData.invoiceNumber}
                      onChange={(e) => setFormData({ ...formData, invoiceNumber: e.target.value })}
                      className={`h-12 text-base ${formErrors.invoiceNumber ? 'border-red-500' : ''}`}
                    />
                    {formErrors.invoiceNumber && (
                      <p className="text-sm text-red-600 flex items-center gap-1">
                        <span>⚠</span> {formErrors.invoiceNumber}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="amount" className="text-base">Amount (₱) *</Label>
                    <Input
                      id="amount"
                      type="text"
                      placeholder="0.00"
                      value={formData.amount}
                      onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                      className={`h-12 text-base ${formErrors.amount ? 'border-red-500' : ''}`}
                    />
                    {formErrors.amount && (
                      <p className="text-sm text-red-600 flex items-center gap-1">
                        <span>⚠</span> {formErrors.amount}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="dueDate" className="text-base">Due Date *</Label>
                    <Input
                      id="dueDate"
                      type="date"
                      value={formData.dueDate}
                      onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
                      className={`h-12 text-base ${formErrors.dueDate ? 'border-red-500' : ''}`}
                    />
                    {formErrors.dueDate && (
                      <p className="text-sm text-red-600 flex items-center gap-1">
                        <span>⚠</span> {formErrors.dueDate}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category" className="text-base">Category *</Label>
                    <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })}>
                      <SelectTrigger className={`h-12 text-base ${formErrors.category ? 'border-red-500' : ''}`}>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="office-supplies">Office Supplies</SelectItem>
                        <SelectItem value="it-equipment">IT Equipment</SelectItem>
                        <SelectItem value="maintenance">Maintenance</SelectItem>
                        <SelectItem value="utilities">Utilities</SelectItem>
                        <SelectItem value="educational">Educational Materials</SelectItem>
                      </SelectContent>
                    </Select>
                    {formErrors.category && (
                      <p className="text-sm text-red-600 flex items-center gap-1">
                        <span>⚠</span> {formErrors.category}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description" className="text-base">Description *</Label>
                  <textarea
                    id="description"
                    placeholder="Enter payment description or notes"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={4}
                    className={`w-full rounded-xl border-2 p-3 text-base transition-colors focus:border-blue-500 focus:outline-none ${formErrors.description ? 'border-red-500' : 'border-gray-200'}`}
                  />
                  {formErrors.description && (
                    <p className="text-sm text-red-600 flex items-center gap-1">
                      <span>⚠</span> {formErrors.description}
                    </p>
                  )}
                </div>

                <div className="flex gap-3 pt-4">
                  <Button type="submit" size="lg" className="flex-1 h-14 bg-blue-600 hover:bg-blue-700">
                    Submit for Approval
                  </Button>
                  <Button 
                    type="button" 
                    size="lg" 
                    variant="outline" 
                    className="flex-1 h-14 border-2"
                    onClick={() => setShowNewPaymentDialog(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* Filter Bar */}
        <Card className="border-2 border-gray-100 p-6">
          <div className="grid gap-4 md:grid-cols-4">
            <div className="relative md:col-span-2">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search by vendor, invoice number..."
                className="h-12 pl-12"
              />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="h-12">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="approved">Approved</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="h-12 border-2">
              <Filter className="mr-2 h-5 w-5" />
              More Filters
            </Button>
          </div>
        </Card>

        {/* Vouchers Table */}
        <Card className="border-2 border-gray-100">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b-2 border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm text-gray-700">Voucher ID</th>
                  <th className="px-6 py-4 text-left text-sm text-gray-700">Vendor</th>
                  <th className="px-6 py-4 text-left text-sm text-gray-700">Invoice #</th>
                  <th className="px-6 py-4 text-left text-sm text-gray-700">Amount</th>
                  <th className="px-6 py-4 text-left text-sm text-gray-700">Category</th>
                  <th className="px-6 py-4 text-left text-sm text-gray-700">Due Date</th>
                  <th className="px-6 py-4 text-left text-sm text-gray-700">Status</th>
                  <th className="px-6 py-4 text-left text-sm text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {vouchers.map((voucher) => (
                  <tr key={voucher.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <p className="text-gray-900">{voucher.id}</p>
                      <p className="text-sm text-gray-500">{voucher.dateCreated}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-gray-900">{voucher.vendor}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-gray-700">{voucher.invoiceNumber}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-gray-900">{voucher.amount}</p>
                    </td>
                    <td className="px-6 py-4">
                      <Badge variant="outline" className="border-blue-200 text-blue-700">
                        {voucher.category}
                      </Badge>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-gray-700">{voucher.dueDate}</p>
                    </td>
                    <td className="px-6 py-4">
                      {getStatusBadge(voucher.status)}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="h-9">
                          <FileText className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline" className="h-9">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
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