import { 
  DollarSign, 
  TrendingUp, 
  Users, 
  Clock,
  ArrowRight,
  AlertCircle,
  CheckCircle,
  XCircle,
  GraduationCap
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Link } from 'react-router';

export function Dashboard() {
  const stats = [
    {
      label: 'Total Collections (Today)',
      value: '₱245,680.00',
      change: '+12.5%',
      trend: 'up',
      icon: DollarSign,
      color: 'blue'
    },
    {
      label: 'Pending Approvals',
      value: '23',
      change: '5 urgent',
      trend: 'neutral',
      icon: Clock,
      color: 'amber'
    },
    {
      label: 'Active Students',
      value: '4,832',
      change: '+156 this semester',
      trend: 'up',
      icon: Users,
      color: 'green'
    },
    {
      label: 'Budget Utilization',
      value: '67.8%',
      change: 'On track',
      trend: 'up',
      icon: TrendingUp,
      color: 'purple'
    }
  ];

  const recentTransactions = [
    {
      id: 'TXN-2024-1234',
      type: 'Student Payment',
      student: 'Maria Santos',
      amount: '₱15,250.00',
      status: 'approved',
      date: '2024-11-22 09:45 AM'
    },
    {
      id: 'TXN-2024-1235',
      type: 'Vendor Payment',
      student: 'ABC Supplies Inc.',
      amount: '₱45,000.00',
      status: 'pending',
      date: '2024-11-22 09:30 AM'
    },
    {
      id: 'TXN-2024-1236',
      type: 'Student Payment',
      student: 'John Reyes',
      amount: '₱12,800.00',
      status: 'approved',
      date: '2024-11-22 09:15 AM'
    },
    {
      id: 'TXN-2024-1237',
      type: 'Budget Transfer',
      student: 'Engineering Dept.',
      amount: '₱100,000.00',
      status: 'rejected',
      date: '2024-11-22 08:50 AM'
    },
    {
      id: 'TXN-2024-1238',
      type: 'Student Payment',
      student: 'Anna Lopez',
      amount: '₱18,500.00',
      status: 'approved',
      date: '2024-11-22 08:30 AM'
    }
  ];

  const pendingApprovals = [
    {
      id: 'APV-2024-456',
      type: 'Purchase Order',
      requester: 'IT Department',
      amount: '₱125,000.00',
      priority: 'high',
      daysWaiting: 2
    },
    {
      id: 'APV-2024-457',
      type: 'Reimbursement',
      requester: 'Dr. Rodriguez',
      amount: '₱8,750.00',
      priority: 'medium',
      daysWaiting: 1
    },
    {
      id: 'APV-2024-458',
      type: 'Budget Allocation',
      requester: 'College of Arts',
      amount: '₱250,000.00',
      priority: 'high',
      daysWaiting: 3
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'approved':
        return (
          <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-green-200">
            <CheckCircle className="mr-1 h-3 w-3" />
            Approved
          </Badge>
        );
      case 'pending':
        return (
          <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-100 border-amber-200">
            <Clock className="mr-1 h-3 w-3" />
            Pending
          </Badge>
        );
      case 'rejected':
        return (
          <Badge className="bg-red-100 text-red-700 hover:bg-red-100 border-red-200">
            <XCircle className="mr-1 h-3 w-3" />
            Rejected
          </Badge>
        );
      default:
        return null;
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'high':
        return (
          <Badge className="bg-red-100 text-red-700 hover:bg-red-100 border-red-200">
            <AlertCircle className="mr-1 h-3 w-3" />
            High Priority
          </Badge>
        );
      case 'medium':
        return (
          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-blue-200">
            Medium
          </Badge>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here's what's happening today.</p>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="border-2 border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-sm text-gray-600 mb-2">{stat.label}</p>
                  <p className="text-2xl text-gray-900 mb-2">{stat.value}</p>
                  <p className={`text-sm ${stat.trend === 'up' ? 'text-green-600' : 'text-gray-600'}`}>
                    {stat.change}
                  </p>
                </div>
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-${stat.color}-100`}>
                  <Icon className={`h-6 w-6 text-${stat.color}-600`} />
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Quick Actions */}
      <Card className="border-2 border-blue-100 bg-gradient-to-br from-blue-50 to-white p-6">
        <h2 className="text-xl text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Button 
            asChild
            size="lg" 
            className="h-14 bg-blue-600 hover:bg-blue-700 text-white shadow-lg"
          >
            <Link to="/student-collections">
              <GraduationCap className="mr-2 h-5 w-5" />
              Record Student Payment
            </Link>
          </Button>
          <Button 
            asChild
            size="lg" 
            variant="outline" 
            className="h-14 border-2 border-blue-200 hover:bg-blue-50"
          >
            <Link to="/accounts-payable">
              <DollarSign className="mr-2 h-5 w-5" />
              Process Vendor Payment
            </Link>
          </Button>
          <Button 
            asChild
            size="lg" 
            variant="outline" 
            className="h-14 border-2 border-amber-200 hover:bg-amber-50"
          >
            <Link to="/budgeting">
              <TrendingUp className="mr-2 h-5 w-5" />
              View Budget Status
            </Link>
          </Button>
          <Button 
            asChild
            size="lg" 
            variant="outline" 
            className="h-14 border-2 border-gray-200 hover:bg-gray-50"
          >
            <Link to="/reports">
              <ArrowRight className="mr-2 h-5 w-5" />
              Generate Report
            </Link>
          </Button>
        </div>
      </Card>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent Transactions */}
        <Card className="border-2 border-gray-100 p-6">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl text-gray-900">Recent Transactions</h2>
            <Button variant="ghost" className="text-blue-600 hover:text-blue-700">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="space-y-4">
            {recentTransactions.map((transaction) => (
              <div 
                key={transaction.id}
                className="flex items-center justify-between border-l-4 border-blue-500 bg-gray-50 p-4 rounded-r-lg hover:bg-gray-100 transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="text-gray-900">{transaction.student}</p>
                    {getStatusBadge(transaction.status)}
                  </div>
                  <p className="text-sm text-gray-600">{transaction.type} • {transaction.id}</p>
                  <p className="text-xs text-gray-500 mt-1">{transaction.date}</p>
                </div>
                <p className="text-lg text-gray-900">{transaction.amount}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Pending Approvals */}
        <Card className="border-2 border-amber-100 bg-gradient-to-br from-amber-50 to-white p-6">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl text-gray-900">Pending Approvals</h2>
            <Badge className="bg-amber-600 text-white hover:bg-amber-600">
              {pendingApprovals.length} Items
            </Badge>
          </div>
          <div className="space-y-4">
            {pendingApprovals.map((approval) => (
              <div 
                key={approval.id}
                className="border-2 border-amber-200 bg-white p-4 rounded-xl"
              >
                <div className="mb-3 flex items-start justify-between">
                  <div className="flex-1">
                    <p className="text-gray-900 mb-1">{approval.type}</p>
                    <p className="text-sm text-gray-600">{approval.requester}</p>
                    <p className="text-xs text-gray-500 mt-1">{approval.id}</p>
                  </div>
                  {getPriorityBadge(approval.priority)}
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-lg text-gray-900">{approval.amount}</p>
                  <p className="text-sm text-gray-600">Waiting {approval.daysWaiting}d</p>
                </div>
                <div className="mt-4 flex gap-2">
                  <Button size="sm" className="flex-1 bg-green-600 hover:bg-green-700">
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Approve
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 border-red-200 text-red-600 hover:bg-red-50">
                    <XCircle className="mr-2 h-4 w-4" />
                    Reject
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
