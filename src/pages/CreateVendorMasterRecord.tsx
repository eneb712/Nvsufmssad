import { Users, Save } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { ProtectedRoute } from '../components/ProtectedRoute';

export function CreateVendorMasterRecord() {
  const [formData, setFormData] = useState({
    vendorCode: '',
    vendorName: '',
    contactPerson: '',
    email: '',
    phone: '',
    address: ''
  });

  return (
    <ProtectedRoute module="create-vendor-master-record">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl text-gray-900 mb-2">Create Vendor Master Record</h1>
          <p className="text-gray-600">Add new vendor information to the system</p>
        </div>

        <Card className="max-w-3xl border-2 border-blue-100 p-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100">
              <Users className="h-7 w-7 text-blue-600" />
            </div>
            <div>
              <h2 className="text-xl text-gray-900">Vendor Information</h2>
              <p className="text-sm text-gray-600">Complete vendor registration form</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label className="text-base">Vendor Code *</Label>
                <Input
                  placeholder="e.g., VEN-001"
                  value={formData.vendorCode}
                  onChange={(e) => setFormData({ ...formData, vendorCode: e.target.value })}
                  className="h-14 text-base border-2"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-base">Vendor Name *</Label>
                <Input
                  placeholder="Enter vendor name"
                  value={formData.vendorName}
                  onChange={(e) => setFormData({ ...formData, vendorName: e.target.value })}
                  className="h-14 text-base border-2"
                />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label className="text-base">Contact Person</Label>
                <Input
                  placeholder="Enter contact person name"
                  value={formData.contactPerson}
                  onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                  className="h-14 text-base border-2"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-base">Phone Number</Label>
                <Input
                  placeholder="+63 XXX XXX XXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="h-14 text-base border-2"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-base">Email Address</Label>
              <Input
                type="email"
                placeholder="vendor@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="h-14 text-base border-2"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-base">Address</Label>
              <textarea
                placeholder="Enter complete address..."
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                rows={3}
                className="w-full rounded-xl border-2 border-gray-200 p-4 text-base"
              />
            </div>

            <Button size="lg" className="w-full h-16 bg-green-600 hover:bg-green-700 text-lg">
              <Save className="mr-2 h-6 w-6" />
              Create Vendor Record
            </Button>
          </div>
        </Card>
      </div>
    </ProtectedRoute>
  );
}
