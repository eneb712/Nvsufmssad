import { Link, useLocation, useNavigate } from 'react-router';
import { useEffect } from 'react';
import { 
  LayoutDashboard, 
  FileText, 
  Receipt,
  DollarSign,
  LogOut,
  BookOpen,
  TrendingUp,
  Archive,
  History,
  CreditCard,
  Building2,
  BarChart3,
  ShoppingCart,
  Users,
  CheckCircle,
  ClipboardList,
  Settings,
  Calendar,
  Layers,
  Hash,
  X
} from 'lucide-react';
import { getUserRole, getUserName, roleNames, getAccessibleModules, roleDescriptions } from '../utils/rolePermissions';
import { useSidebarContext } from '../contexts/SidebarContext';

export function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { isOpen, toggleSidebar } = useSidebarContext();
  
  useEffect(() => {
    const userRole = localStorage.getItem('userRole');
    if (!userRole) {
      navigate('/login');
    }
  }, [navigate]);

  const userRole = getUserRole();
  const userName = getUserName();
  const accessibleModules = getAccessibleModules();

  // Complete module list matching use case architecture
  const allNavigation = [
    { name: 'Dashboard', href: '/', icon: LayoutDashboard, module: 'dashboard' },
    
    // Accounting Staff Modules
    { name: 'Prepare Voucher', href: '/prepare-voucher', icon: FileText, module: 'prepare-voucher' },
    { name: 'Manage Chart of Accounts', href: '/manage-chart-of-accounts', icon: BookOpen, module: 'manage-chart-of-accounts' },
    { name: 'Post Vendor Payments', href: '/post-vendor-payments', icon: DollarSign, module: 'post-vendor-payments' },
    { name: 'Post General Ledger Collections', href: '/post-general-ledger-collections', icon: TrendingUp, module: 'post-general-ledger-collections' },
    { name: 'Manage Fixed Assets', href: '/manage-fixed-assets', icon: Archive, module: 'manage-fixed-assets' },
    { name: 'View Payment History', href: '/view-payment-history', icon: History, module: 'view-payment-history' },
    
    // Cashier's Office Modules
    { name: 'Process Customer Payment', href: '/process-customer-payment', icon: CreditCard, module: 'process-customer-payment' },
    { name: 'Issue Official Receipt (OR)', href: '/issue-official-receipt', icon: Receipt, module: 'issue-official-receipt' },
    { name: 'Record Bank Deposit', href: '/record-bank-deposit', icon: Building2, module: 'record-bank-deposit' },
    { name: 'Generate Collection Report', href: '/generate-collection-report', icon: BarChart3, module: 'generate-collection-report' },
    
    // Supply Officer Modules
    { name: 'Verify Purchase Order', href: '/verify-purchase-order', icon: ShoppingCart, module: 'verify-purchase-order' },
    { name: 'Enter Invoice Details', href: '/enter-invoice-details', icon: FileText, module: 'enter-invoice-details' },
    { name: 'Create Vendor Master Record', href: '/create-vendor-master-record', icon: Users, module: 'create-vendor-master-record' },
    
    // Finance Director Modules
    { name: 'Approve Financial Reports', href: '/approve-financial-reports', icon: CheckCircle, module: 'approve-financial-reports' },
    { name: 'View Collected Payments', href: '/view-collected-payments', icon: ClipboardList, module: 'view-collected-payments' },
    { name: 'Review Financial Reports', href: '/review-financial-reports', icon: BarChart3, module: 'review-financial-reports' },
    
    // Admin Modules
    { name: 'Manage Posting Periods', href: '/manage-posting-periods', icon: Calendar, module: 'manage-posting-periods' },
    { name: 'Configure Organizational Structure', href: '/configure-organizational-structure', icon: Layers, module: 'configure-organizational-structure' },
    { name: 'Manage Account Groups', href: '/manage-account-groups', icon: BookOpen, module: 'manage-account-groups' },
    { name: 'Define Number Ranges', href: '/define-number-ranges', icon: Hash, module: 'define-number-ranges' },
  ];

  // STRICT FILTERING: Only show modules the user has permission to access
  const navigation = allNavigation.filter(item => accessibleModules.includes(item.module));

  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  const handleLogout = () => {
    localStorage.removeItem('userRole');
    localStorage.removeItem('username');
    navigate('/login');
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
      
      {/* Sidebar */}
      <div 
        className={`
          fixed inset-y-0 left-0 z-50 w-80 bg-gradient-to-b from-blue-900 to-blue-950 text-white shadow-2xl
          transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        {/* Close Button - Mobile Only */}
        <button
          onClick={toggleSidebar}
          className="absolute right-4 top-6 lg:hidden p-2 rounded-lg hover:bg-blue-800 transition-colors"
          aria-label="Close sidebar"
        >
          <X className="h-5 w-5" />
        </button>

      {/* Logo Section */}
      <div className="flex h-20 items-center gap-3 border-b border-blue-800 px-6">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 shadow-lg">
          <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
          </svg>
        </div>
        <div>
          <h1 className="text-lg tracking-tight">NVSU Finance</h1>
          <p className="text-xs text-blue-300">Financial Management ERP</p>
        </div>
      </div>

      {/* Role Badge */}
      <div className="mx-4 mt-4 mb-3 p-4 bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl shadow-lg border border-amber-400">
        <p className="text-xs text-amber-100 mb-1">Current Role</p>
        <p className="text-sm text-white tracking-wide">{roleNames[userRole]}</p>
        <p className="text-xs text-amber-100 mt-1.5 leading-relaxed">{roleDescriptions[userRole]}</p>
      </div>

      {/* Navigation - ONLY shows permitted modules */}
      <nav className="flex-1 space-y-1 px-4 py-4 overflow-y-auto max-h-[calc(100vh-340px)]">
        {navigation.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);
          
          return (
            <Link
              key={item.name}
              to={item.href}
              className={`
                flex items-center gap-3 rounded-xl px-4 py-3.5 transition-all
                ${active 
                  ? 'bg-blue-800 text-white shadow-lg border border-blue-700' 
                  : 'text-blue-200 hover:bg-blue-800/50 hover:text-white'
                }
              `}
            >
              <Icon className="h-5 w-5 flex-shrink-0" />
              <span className="text-sm tracking-wide leading-tight">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* User Section */}
      <div className="border-t border-blue-800 p-4">
        <div className="mb-3 flex items-center gap-3 rounded-xl bg-blue-800/50 p-3 border border-blue-700">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-amber-600 shadow-md">
            <span className="text-sm text-white">{userName.substring(0, 2).toUpperCase()}</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm truncate text-white">{userName}</p>
            <p className="text-xs text-blue-300 truncate">{roleNames[userRole]}</p>
          </div>
        </div>
        <button 
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-xl px-4 py-3.5 text-blue-200 transition-all hover:bg-red-600 hover:text-white border border-transparent hover:border-red-500 shadow-sm hover:shadow-lg"
        >
          <LogOut className="h-5 w-5" />
          <span className="text-sm">Sign Out</span>
        </button>
      </div>
    </div>
    </>
  );
}