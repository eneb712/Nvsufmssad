import { TrendingUp, TrendingDown, AlertTriangle } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Progress } from '../components/ui/progress';

export function Budgeting() {
  const departments = [
    {
      name: 'College of Engineering',
      code: 'COE',
      allocated: 2500000,
      spent: 1875000,
      remaining: 625000,
      utilization: 75,
      status: 'on-track'
    },
    {
      name: 'College of Business Administration',
      code: 'CBA',
      allocated: 1800000,
      spent: 1620000,
      remaining: 180000,
      utilization: 90,
      status: 'warning'
    },
    {
      name: 'College of Arts and Sciences',
      code: 'CAS',
      allocated: 2200000,
      spent: 1320000,
      remaining: 880000,
      utilization: 60,
      status: 'on-track'
    },
    {
      name: 'College of Education',
      code: 'COED',
      allocated: 1500000,
      spent: 1050000,
      remaining: 450000,
      utilization: 70,
      status: 'on-track'
    },
    {
      name: 'Information Technology Department',
      code: 'ITD',
      allocated: 3000000,
      spent: 2850000,
      remaining: 150000,
      utilization: 95,
      status: 'critical'
    }
  ];

  const formatCurrency = (amount: number) => {
    return `₱${amount.toLocaleString('en-PH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'on-track':
        return <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-green-200">On Track</Badge>;
      case 'warning':
        return <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-100 border-amber-200">Warning</Badge>;
      case 'critical':
        return <Badge className="bg-red-100 text-red-700 hover:bg-red-100 border-red-200">Critical</Badge>;
      default:
        return null;
    }
  };

  const totalAllocated = departments.reduce((sum, dept) => sum + dept.allocated, 0);
  const totalSpent = departments.reduce((sum, dept) => sum + dept.spent, 0);
  const totalRemaining = departments.reduce((sum, dept) => sum + dept.remaining, 0);
  const overallUtilization = (totalSpent / totalAllocated) * 100;

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl text-gray-900 mb-2">Budget Management</h1>
        <p className="text-gray-600">Monitor and track departmental budget allocation and utilization</p>
      </div>

      {/* Overall Summary */}
      <div className="grid gap-6 sm:grid-cols-3">
        <Card className="border-2 border-blue-100 bg-gradient-to-br from-blue-50 to-white p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-600">Total Budget Allocated</p>
            <TrendingUp className="h-6 w-6 text-blue-600" />
          </div>
          <p className="text-2xl text-gray-900 mb-1">{formatCurrency(totalAllocated)}</p>
          <p className="text-sm text-blue-600">Fiscal Year 2024-2025</p>
        </Card>

        <Card className="border-2 border-green-100 bg-gradient-to-br from-green-50 to-white p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-600">Total Budget Spent</p>
            <TrendingDown className="h-6 w-6 text-green-600" />
          </div>
          <p className="text-2xl text-gray-900 mb-1">{formatCurrency(totalSpent)}</p>
          <p className="text-sm text-green-600">{overallUtilization.toFixed(1)}% utilized</p>
        </Card>

        <Card className="border-2 border-amber-100 bg-gradient-to-br from-amber-50 to-white p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-600">Remaining Budget</p>
            <AlertTriangle className="h-6 w-6 text-amber-600" />
          </div>
          <p className="text-2xl text-gray-900 mb-1">{formatCurrency(totalRemaining)}</p>
          <p className="text-sm text-amber-600">{(100 - overallUtilization).toFixed(1)}% available</p>
        </Card>
      </div>

      {/* Overall Progress */}
      <Card className="border-2 border-gray-100 p-6">
        <h2 className="text-xl text-gray-900 mb-4">Overall Budget Utilization</h2>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Progress</span>
            <span className="text-gray-900">{overallUtilization.toFixed(1)}%</span>
          </div>
          <Progress value={overallUtilization} className="h-4" />
        </div>
      </Card>

      {/* Department Budgets */}
      <Card className="border-2 border-gray-100 p-6">
        <h2 className="text-xl text-gray-900 mb-6">Department Budget Breakdown</h2>
        <div className="space-y-6">
          {departments.map((dept, index) => (
            <div 
              key={index}
              className="border-2 border-gray-100 rounded-xl p-6 hover:border-blue-200 hover:shadow-md transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg text-gray-900">{dept.name}</h3>
                    {getStatusBadge(dept.status)}
                  </div>
                  <p className="text-sm text-gray-600">Department Code: {dept.code}</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl text-gray-900">{dept.utilization}%</p>
                  <p className="text-sm text-gray-600">Utilized</p>
                </div>
              </div>

              <div className="mb-4">
                <Progress 
                  value={dept.utilization} 
                  className={`h-3 ${
                    dept.utilization >= 90 
                      ? '[&>div]:bg-red-600' 
                      : dept.utilization >= 75 
                      ? '[&>div]:bg-amber-600' 
                      : '[&>div]:bg-green-600'
                  }`}
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-xs text-gray-600 mb-1">Allocated</p>
                  <p className="text-sm text-gray-900">{formatCurrency(dept.allocated)}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-xs text-gray-600 mb-1">Spent</p>
                  <p className="text-sm text-gray-900">{formatCurrency(dept.spent)}</p>
                </div>
                <div className={`rounded-lg p-4 ${
                  dept.utilization >= 90 ? 'bg-red-50' : 'bg-green-50'
                }`}>
                  <p className="text-xs text-gray-600 mb-1">Remaining</p>
                  <p className={`text-sm ${
                    dept.utilization >= 90 ? 'text-red-600' : 'text-green-600'
                  }`}>
                    {formatCurrency(dept.remaining)}
                  </p>
                </div>
              </div>

              {dept.utilization >= 90 && (
                <Card className="mt-4 border-2 border-red-200 bg-red-50 p-3">
                  <p className="text-sm text-red-600 flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4" />
                    {dept.utilization >= 95 
                      ? 'Critical: Budget nearly exhausted. Immediate attention required.' 
                      : 'Warning: Budget utilization exceeds 90%. Monitor spending closely.'}
                  </p>
                </Card>
              )}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
