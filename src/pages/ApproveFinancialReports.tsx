import { CheckCircle, XCircle, FileText } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { ProtectedRoute } from '../components/ProtectedRoute';

export function ApproveFinancialReports() {
  const reports = [
    { id: 'RPT-2024-045', title: 'Monthly Budget Execution Report', period: 'November 2024', status: 'pending', submittedBy: 'Budget Office' },
    { id: 'RPT-2024-046', title: 'Quarterly Financial Statement', period: 'Q3 2024', status: 'pending', submittedBy: 'Accounting' },
  ];

  return (
    <ProtectedRoute module="approve-financial-reports">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl text-gray-900 mb-2">Approve Financial Reports</h1>
          <p className="text-gray-600">Review and approve submitted financial reports</p>
        </div>

        <div className="space-y-4">
          {reports.map((report) => (
            <Card key={report.id} className="border-2 border-gray-200 p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl text-gray-900">{report.title}</h3>
                    <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-100">Pending Approval</Badge>
                  </div>
                  <p className="text-gray-700 mb-1">{report.period}</p>
                  <p className="text-sm text-gray-600">Submitted by: {report.submittedBy}</p>
                  <p className="text-sm text-gray-600">Report ID: {report.id}</p>
                </div>
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-blue-100">
                  <FileText className="h-8 w-8 text-blue-600" />
                </div>
              </div>

              <div className="flex gap-4">
                <Button size="lg" className="flex-1 h-14 bg-green-600 hover:bg-green-700 text-lg">
                  <CheckCircle className="mr-2 h-6 w-6" />
                  Approve Report
                </Button>
                <Button size="lg" variant="outline" className="flex-1 h-14 border-2 border-red-300 text-red-600 hover:bg-red-50 text-lg">
                  <XCircle className="mr-2 h-6 w-6" />
                  Reject
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </ProtectedRoute>
  );
}
