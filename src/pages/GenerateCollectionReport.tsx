import { BarChart3, Download, Calendar } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { ProtectedRoute } from '../components/ProtectedRoute';

export function GenerateCollectionReport() {
  return (
    <ProtectedRoute module="generate-collection-report">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl text-gray-900 mb-2">Generate Collection Report</h1>
          <p className="text-gray-600">Create daily and periodic collection reports</p>
        </div>

        <Card className="max-w-2xl border-2 border-blue-100 p-8">
          <h2 className="text-xl text-gray-900 mb-8">Report Configuration</h2>
          
          <div className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-base text-gray-700">Report Type</label>
                <Select>
                  <SelectTrigger className="h-14 text-base border-2">
                    <SelectValue placeholder="Select report type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="daily">Daily Collection Report</SelectItem>
                    <SelectItem value="weekly">Weekly Summary</SelectItem>
                    <SelectItem value="monthly">Monthly Summary</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-base text-gray-700">Date Range</label>
                <Select>
                  <SelectTrigger className="h-14 text-base border-2">
                    <SelectValue placeholder="Select period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="today">Today</SelectItem>
                    <SelectItem value="week">This Week</SelectItem>
                    <SelectItem value="month">This Month</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button size="lg" className="w-full h-16 bg-blue-600 hover:bg-blue-700 text-lg">
              <BarChart3 className="mr-2 h-6 w-6" />
              Generate Report
            </Button>
          </div>
        </Card>

        <Card className="border-2 border-gray-100 p-8">
          <h3 className="text-xl text-gray-900 mb-6">Today's Collection Summary</h3>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="p-6 bg-green-50 rounded-xl border-2 border-green-200">
              <p className="text-sm text-gray-600 mb-2">Total Collections</p>
              <p className="text-3xl text-gray-900">₱245,680.00</p>
            </div>
            <div className="p-6 bg-blue-50 rounded-xl border-2 border-blue-200">
              <p className="text-sm text-gray-600 mb-2">Total Transactions</p>
              <p className="text-3xl text-gray-900">42</p>
            </div>
            <div className="p-6 bg-amber-50 rounded-xl border-2 border-amber-200">
              <p className="text-sm text-gray-600 mb-2">Cash on Hand</p>
              <p className="text-3xl text-gray-900">₱125,000.00</p>
            </div>
          </div>
        </Card>
      </div>
    </ProtectedRoute>
  );
}
