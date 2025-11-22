import { Layers, Plus } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { ProtectedRoute } from '../components/ProtectedRoute';

export function ConfigureOrganizationalStructure() {
  const structures = [
    { code: 'NVSU', name: 'Nueva Vizcaya State University', type: 'Company Code', level: 1 },
    { code: 'COE', name: 'College of Engineering', type: 'Cost Center', level: 2 },
    { code: 'CBA', name: 'College of Business Administration', type: 'Cost Center', level: 2 },
    { code: 'CAS', name: 'College of Arts and Sciences', type: 'Cost Center', level: 2 },
  ];

  return (
    <ProtectedRoute module="configure-organizational-structure">
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl text-gray-900 mb-2">Configure Organizational Structure</h1>
            <p className="text-gray-600">Define company codes, cost centers, and organizational hierarchy</p>
          </div>
          <Button size="lg" className="h-16 bg-blue-600 hover:bg-blue-700 text-lg px-8">
            <Plus className="mr-2 h-6 w-6" />
            Add Structure Element
          </Button>
        </div>

        <Card className="border-2 border-gray-100">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b-2 border-gray-200">
                <tr>
                  <th className="px-8 py-5 text-left text-base text-gray-700">Code</th>
                  <th className="px-8 py-5 text-left text-base text-gray-700">Name</th>
                  <th className="px-8 py-5 text-left text-base text-gray-700">Type</th>
                  <th className="px-8 py-5 text-left text-base text-gray-700">Level</th>
                  <th className="px-8 py-5 text-left text-base text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {structures.map((structure) => (
                  <tr key={structure.code} className="hover:bg-gray-50">
                    <td className="px-8 py-6">
                      <p className="text-lg text-gray-900">{structure.code}</p>
                    </td>
                    <td className="px-8 py-6">
                      <p className="text-gray-900">{structure.name}</p>
                    </td>
                    <td className="px-8 py-6">
                      <Badge variant="outline" className="border-blue-200 text-blue-700">
                        {structure.type}
                      </Badge>
                    </td>
                    <td className="px-8 py-6">
                      <p className="text-gray-700">Level {structure.level}</p>
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
