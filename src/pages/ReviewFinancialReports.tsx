import { BarChart3, Download, Calendar, TrendingUp } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { ProtectedRoute } from '../components/ProtectedRoute';

export function ReviewFinancialReports() {
  const reports = [
    {
      id: 'RPT-2024-001',
      title: 'Monthly Financial Statement',
      period: 'November 2024',
      generatedDate: '2024-11-22',
      type: 'Financial',
      status: 'ready',
      pages: 45
    },
    {
      id: 'RPT-2024-002',
      title: 'Budget Utilization Report',
      period: 'Q3 2024',
      generatedDate: '2024-11-20',
      type: 'Budget',
      status: 'ready',
      pages: 28
    },
    {
      id: 'RPT-2024-003',
      title: 'Collection Performance Analysis',
      period: 'November 2024',
      generatedDate: '2024-11-21',
      type: 'Collections',
      status: 'ready',
      pages: 32
    }
  ];

  const getStatusBadge = (status: string) => {
    return (
      <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-green-200">
        Ready for Review
      </Badge>
    );
  };

  return (
    <ProtectedRoute module="review-financial-reports">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl text-gray-900 mb-2">Review Financial Reports</h1>
          <p className="text-gray-600">Access and review generated financial reports and statements</p>
        </div>

        {/* Summary Cards */}
        <div className="grid gap-6 sm:grid-cols-3">
          <Card className="border-2 border-blue-100 bg-gradient-to-br from-blue-50 to-white p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-600">Available Reports</p>
              <BarChart3 className="h-6 w-6 text-blue-600" />
            </div>
            <p className="text-2xl text-gray-900 mb-1">3</p>
            <p className="text-sm text-blue-600">Ready for review</p>
          </Card>

          <Card className="border-2 border-green-100 bg-gradient-to-br from-green-50 to-white p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-600">Reviewed This Month</p>
              <TrendingUp className="h-6 w-6 text-green-600" />
            </div>
            <p className="text-2xl text-gray-900 mb-1">12</p>
            <p className="text-sm text-green-600">Reports</p>
          </Card>

          <Card className="border-2 border-amber-100 bg-gradient-to-br from-amber-50 to-white p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-600">Current Period</p>
              <Calendar className="h-6 w-6 text-amber-600" />
            </div>
            <p className="text-2xl text-gray-900 mb-1">Nov 2024</p>
            <p className="text-sm text-amber-600">Fiscal period</p>
          </Card>
        </div>

        {/* Reports List */}
        <div className="space-y-4">
          {reports.map((report) => (
            <Card key={report.id} className="border-2 border-gray-200 p-8 hover:border-blue-300 transition-all">
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl text-gray-900">{report.title}</h3>
                    {getStatusBadge(report.status)}
                  </div>
                  <p className="text-gray-700 mb-1">{report.period}</p>
                  <p className="text-sm text-gray-600">Report ID: {report.id}</p>
                </div>
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-blue-100">
                  <BarChart3 className="h-8 w-8 text-blue-600" />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="text-xs text-gray-600 mb-1">Generated</p>
                  <p className="text-sm text-gray-900">{report.generatedDate}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 mb-1">Report Type</p>
                  <Badge variant="outline" className="border-blue-200 text-blue-700">
                    {report.type}
                  </Badge>
                </div>
                <div>
                  <p className="text-xs text-gray-600 mb-1">Pages</p>
                  <p className="text-sm text-gray-900">{report.pages}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Button size="lg" className="flex-1 h-14 bg-blue-600 hover:bg-blue-700 text-lg">
                  <BarChart3 className="mr-2 h-6 w-6" />
                  View Report
                </Button>
                <Button size="lg" variant="outline" className="h-14 border-2 text-lg px-8">
                  <Download className="mr-2 h-6 w-6" />
                  Download PDF
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </ProtectedRoute>
  );
}
