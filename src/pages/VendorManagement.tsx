import { Users, Plus, Search } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { ProtectedRoute } from '../components/ProtectedRoute';

export function VendorManagement() {
  const vendors = [
    {
      id: 'VEN-001',
      name: 'ABC Office Supplies Inc.',
      category: 'Office Supplies',
      contactPerson: 'John Smith',
      email: 'john@abcsupplies.com',
      phone: '+63 917 123 4567',
      status: 'active',
      totalTransactions: 45,
      totalAmount: '₱1,250,000.00'
    },
    {
      id: 'VEN-002',
      name: 'Tech Solutions Corp.',
      category: 'IT Equipment',
      contactPerson: 'Maria Garcia',
      email: 'maria@techsolutions.com',
      phone: '+63 918 234 5678',
      status: 'active',
      totalTransactions: 28,
      totalAmount: '₱2,450,000.00'
    },
    {
      id: 'VEN-003',
      name: 'Educational Materials Hub',
      category: 'Educational Materials',
      contactPerson: 'Robert Cruz',
      email: 'robert@edumaterials.com',
      phone: '+63 919 345 6789',
      status: 'inactive',
      totalTransactions: 12,
      totalAmount: '₱450,000.00'
    }
  ];

  const getStatusBadge = (status: string) => {
    return status === 'active' ? (
      <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-green-200">
        Active
      </Badge>
    ) : (
      <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-100 border-gray-200">
        Inactive
      </Badge>
    );
  };

  return (
    <ProtectedRoute module="vendor-management">
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl text-gray-900 mb-2">Vendor Management</h1>
            <p className="text-gray-600">Manage supplier information and relationships</p>
          </div>
          <Button size="lg" className="h-14 bg-blue-600 hover:bg-blue-700">
            <Plus className="mr-2 h-5 w-5" />
            Add New Vendor
          </Button>
        </div>

        {/* Summary Cards */}
        <div className="grid gap-6 sm:grid-cols-3">
          <Card className="border-2 border-blue-100 bg-gradient-to-br from-blue-50 to-white p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-600">Total Vendors</p>
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <p className="text-2xl text-gray-900 mb-1">3</p>
            <p className="text-sm text-blue-600">2 active, 1 inactive</p>
          </Card>

          <Card className="border-2 border-green-100 bg-gradient-to-br from-green-50 to-white p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-600">Total Transactions</p>
              <Users className="h-6 w-6 text-green-600" />
            </div>
            <p className="text-2xl text-gray-900 mb-1">85</p>
            <p className="text-sm text-green-600">This fiscal year</p>
          </Card>

          <Card className="border-2 border-amber-100 bg-gradient-to-br from-amber-50 to-white p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-600">Total Procurement</p>
              <Users className="h-6 w-6 text-amber-600" />
            </div>
            <p className="text-2xl text-gray-900 mb-1">₱4,150,000.00</p>
            <p className="text-sm text-amber-600">This fiscal year</p>
          </Card>
        </div>

        {/* Search Bar */}
        <Card className="border-2 border-gray-100 p-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Search by vendor name, category, or contact..."
              className="h-14 pl-12 text-base"
            />
          </div>
        </Card>

        {/* Vendors Table */}
        <Card className="border-2 border-gray-100">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b-2 border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm text-gray-700">Vendor ID</th>
                  <th className="px-6 py-4 text-left text-sm text-gray-700">Vendor Name</th>
                  <th className="px-6 py-4 text-left text-sm text-gray-700">Category</th>
                  <th className="px-6 py-4 text-left text-sm text-gray-700">Contact Person</th>
                  <th className="px-6 py-4 text-left text-sm text-gray-700">Contact Info</th>
                  <th className="px-6 py-4 text-left text-sm text-gray-700">Total Amount</th>
                  <th className="px-6 py-4 text-left text-sm text-gray-700">Status</th>
                  <th className="px-6 py-4 text-left text-sm text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {vendors.map((vendor) => (
                  <tr key={vendor.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <p className="text-gray-900">{vendor.id}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-gray-900">{vendor.name}</p>
                      <p className="text-sm text-gray-500">{vendor.totalTransactions} transactions</p>
                    </td>
                    <td className="px-6 py-4">
                      <Badge variant="outline" className="border-blue-200 text-blue-700">
                        {vendor.category}
                      </Badge>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-gray-900">{vendor.contactPerson}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-gray-700">{vendor.email}</p>
                      <p className="text-sm text-gray-500">{vendor.phone}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-gray-900">{vendor.totalAmount}</p>
                    </td>
                    <td className="px-6 py-4">
                      {getStatusBadge(vendor.status)}
                    </td>
                    <td className="px-6 py-4">
                      <Button size="sm" variant="outline" className="h-9">
                        View Details
                      </Button>
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
