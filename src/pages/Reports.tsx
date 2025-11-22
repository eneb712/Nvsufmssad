import { FileText, Download, Calendar, Filter } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';

export function Reports() {
  const reportTemplates = [
    {
      name: 'Daily Collection Report',
      description: 'Summary of all student payments received today',
      category: 'Collections',
      icon: '📊'
    },
    {
      name: 'Accounts Payable Summary',
      description: 'Outstanding vendor payments and voucher status',
      category: 'Payables',
      icon: '💳'
    },
    {
      name: 'Budget Utilization Report',
      description: 'Department-wise budget allocation and spending',
      category: 'Budget',
      icon: '💰'
    },
    {
      name: 'Monthly Financial Statement',
      description: 'Comprehensive financial overview for the month',
      category: 'Financial',
      icon: '📈'
    },
    {
      name: 'Student Account Statement',
      description: 'Individual student payment history and balance',
      category: 'Collections',
      icon: '🎓'
    },
    {
      name: 'Vendor Transaction History',
      description: 'Complete payment history by vendor',
      category: 'Payables',
      icon: '🏢'
    },
    {
      name: 'Cash Flow Analysis',
      description: 'Income and expenses breakdown',
      category: 'Financial',
      icon: '💵'
    },
    {
      name: 'Year-End Financial Report',
      description: 'Annual comprehensive financial summary',
      category: 'Financial',
      icon: '📋'
    }
  ];

  const recentReports = [
    {
      name: 'Daily Collection Report',
      date: '2024-11-22',
      generatedBy: 'Juan Dela Cruz',
      format: 'PDF',
      status: 'completed'
    },
    {
      name: 'Budget Utilization Report',
      date: '2024-11-21',
      generatedBy: 'Maria Santos',
      format: 'Excel',
      status: 'completed'
    },
    {
      name: 'Monthly Financial Statement',
      date: '2024-11-20',
      generatedBy: 'Juan Dela Cruz',
      format: 'PDF',
      status: 'completed'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl text-gray-900 mb-2">Reports & Analytics</h1>
        <p className="text-gray-600">Generate and download financial reports</p>
      </div>

      {/* Quick Report Generation */}
      <Card className="border-2 border-blue-100 bg-gradient-to-br from-blue-50 to-white p-6">
        <h2 className="text-xl text-gray-900 mb-6">Quick Report Generation</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <Select>
            <SelectTrigger className="h-12">
              <SelectValue placeholder="Select report type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="daily-collection">Daily Collection Report</SelectItem>
              <SelectItem value="ap-summary">Accounts Payable Summary</SelectItem>
              <SelectItem value="budget-utilization">Budget Utilization Report</SelectItem>
              <SelectItem value="monthly-statement">Monthly Financial Statement</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="h-12">
              <SelectValue placeholder="Select date range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="yesterday">Yesterday</SelectItem>
              <SelectItem value="this-week">This Week</SelectItem>
              <SelectItem value="this-month">This Month</SelectItem>
              <SelectItem value="last-month">Last Month</SelectItem>
              <SelectItem value="custom">Custom Range</SelectItem>
            </SelectContent>
          </Select>

          <Button size="lg" className="h-12 bg-blue-600 hover:bg-blue-700">
            <FileText className="mr-2 h-5 w-5" />
            Generate Report
          </Button>
        </div>
      </Card>

      {/* Report Templates */}
      <div>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl text-gray-900">Available Report Templates</h2>
          <Button variant="outline" className="h-12 border-2">
            <Filter className="mr-2 h-5 w-5" />
            Filter by Category
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {reportTemplates.map((template, index) => (
            <Card key={index} className="border-2 border-gray-100 p-6 hover:border-blue-200 hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-100 to-blue-200 text-2xl flex-shrink-0">
                  {template.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg text-gray-900 mb-2">{template.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{template.description}</p>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs text-blue-700">
                      {template.category}
                    </span>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="h-10">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Recent Reports */}
      <Card className="border-2 border-gray-100 p-6">
        <h2 className="text-xl text-gray-900 mb-6">Recently Generated Reports</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b-2 border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-sm text-gray-700">Report Name</th>
                <th className="px-6 py-4 text-left text-sm text-gray-700">Date Generated</th>
                <th className="px-6 py-4 text-left text-sm text-gray-700">Generated By</th>
                <th className="px-6 py-4 text-left text-sm text-gray-700">Format</th>
                <th className="px-6 py-4 text-left text-sm text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {recentReports.map((report, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-blue-600" />
                      <p className="text-gray-900">{report.name}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-gray-400" />
                      <p className="text-gray-700">{report.date}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-gray-700">{report.generatedBy}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700">
                      {report.format}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <Button size="sm" variant="outline" className="h-9">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
