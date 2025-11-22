import { Hash, Plus } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { ProtectedRoute } from '../components/ProtectedRoute';

export function DefineNumberRanges() {
  const ranges = [
    { id: 'NR-001', docType: 'Vendor Payment Voucher', prefix: 'VPV', start: 1000, end: 9999, current: 1245, status: 'active' },
    { id: 'NR-002', docType: 'Official Receipt', prefix: 'OR', start: 10000, end: 99999, current: 25680, status: 'active' },
    { id: 'NR-003', docType: 'Purchase Order', prefix: 'PO', start: 1000, end: 9999, current: 3456, status: 'active' },
  ];

  return (
    <ProtectedRoute module="define-number-ranges">
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl text-gray-900 mb-2">Define Number Ranges</h1>
            <p className="text-gray-600">Configure document numbering sequences for transactions</p>
          </div>
          <Button size="lg" className="h-16 bg-blue-600 hover:bg-blue-700 text-lg px-8">
            <Plus className="mr-2 h-6 w-6" />
            Add Number Range
          </Button>
        </div>

        <Card className="border-2 border-gray-100">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b-2 border-gray-200">
                <tr>
                  <th className="px-8 py-5 text-left text-base text-gray-700">Range ID</th>
                  <th className="px-8 py-5 text-left text-base text-gray-700">Document Type</th>
                  <th className="px-8 py-5 text-left text-base text-gray-700">Prefix</th>
                  <th className="px-8 py-5 text-left text-base text-gray-700">Range</th>
                  <th className="px-8 py-5 text-left text-base text-gray-700">Current Number</th>
                  <th className="px-8 py-5 text-left text-base text-gray-700">Status</th>
                  <th className="px-8 py-5 text-left text-base text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {ranges.map((range) => (
                  <tr key={range.id} className="hover:bg-gray-50">
                    <td className="px-8 py-6">
                      <p className="text-lg text-gray-900">{range.id}</p>
                    </td>
                    <td className="px-8 py-6">
                      <p className="text-gray-900">{range.docType}</p>
                    </td>
                    <td className="px-8 py-6">
                      <Badge variant="outline" className="border-blue-200 text-blue-700">
                        {range.prefix}
                      </Badge>
                    </td>
                    <td className="px-8 py-6">
                      <p className="text-gray-700">{range.start} - {range.end}</p>
                    </td>
                    <td className="px-8 py-6">
                      <p className="text-lg text-gray-900">{range.current}</p>
                    </td>
                    <td className="px-8 py-6">
                      <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Active</Badge>
                    </td>
                    <td className="px-8 py-6">
                      <Button size="sm" variant="outline" className="h-10">
                        Edit
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
