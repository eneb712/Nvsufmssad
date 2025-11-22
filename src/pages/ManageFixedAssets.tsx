import { Archive, Plus } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { ProtectedRoute } from '../components/ProtectedRoute';

export function ManageFixedAssets() {
  const assets = [
    { id: 'FA-001', name: 'Computer Equipment - Lab 1', cost: '₱500,000.00', date: '2023-01-15', status: 'active', depreciation: '₱125,000.00' },
    { id: 'FA-002', name: 'Office Furniture - Admin Building', cost: '₱250,000.00', date: '2023-03-20', status: 'active', depreciation: '₱62,500.00' },
    { id: 'FA-003', name: 'Air Conditioning Units', cost: '₱180,000.00', date: '2023-05-10', status: 'active', depreciation: '₱45,000.00' },
  ];

  return (
    <ProtectedRoute module="manage-fixed-assets">
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl text-gray-900 mb-2">Manage Fixed Assets</h1>
            <p className="text-gray-600">Track and manage university fixed assets and depreciation</p>
          </div>
          <Button size="lg" className="h-16 bg-blue-600 hover:bg-blue-700 text-lg px-8">
            <Plus className="mr-2 h-6 w-6" />
            Add New Asset
          </Button>
        </div>

        <Card className="border-2 border-gray-100">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b-2 border-gray-200">
                <tr>
                  <th className="px-8 py-5 text-left text-base text-gray-700">Asset ID</th>
                  <th className="px-8 py-5 text-left text-base text-gray-700">Asset Name</th>
                  <th className="px-8 py-5 text-left text-base text-gray-700">Acquisition Cost</th>
                  <th className="px-8 py-5 text-left text-base text-gray-700">Accumulated Depreciation</th>
                  <th className="px-8 py-5 text-left text-base text-gray-700">Acquisition Date</th>
                  <th className="px-8 py-5 text-left text-base text-gray-700">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {assets.map((asset) => (
                  <tr key={asset.id} className="hover:bg-gray-50">
                    <td className="px-8 py-6"><p className="text-lg text-gray-900">{asset.id}</p></td>
                    <td className="px-8 py-6"><p className="text-gray-900">{asset.name}</p></td>
                    <td className="px-8 py-6"><p className="text-gray-900">{asset.cost}</p></td>
                    <td className="px-8 py-6"><p className="text-red-600">{asset.depreciation}</p></td>
                    <td className="px-8 py-6"><p className="text-gray-700">{asset.date}</p></td>
                    <td className="px-8 py-6">
                      <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Active</Badge>
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
