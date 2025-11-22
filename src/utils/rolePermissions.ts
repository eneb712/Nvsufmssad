export type UserRole = 'accounting' | 'supply' | 'director' | 'budget' | 'cashier' | 'admin';

export interface NavItem {
  name: string;
  href: string;
  icon: string;
  module: string;
}

// STRICT Role-Based Module Visibility - Exact permissions per use case architecture
export const rolePermissions: Record<UserRole, string[]> = {
  // Accounting Staff: Financial transaction processing
  accounting: [
    'dashboard',
    'prepare-voucher',
    'manage-chart-of-accounts',
    'post-vendor-payments',
    'post-general-ledger-collections',
    'manage-fixed-assets',
    'view-payment-history'
  ],
  
  // Cashier's Office: Strictly transactional - customer payments only
  cashier: [
    'dashboard',
    'process-customer-payment',
    'issue-official-receipt',
    'record-bank-deposit',
    'generate-collection-report'
  ],
  
  // Supply Officer: Supply chain inputs only
  supply: [
    'dashboard',
    'verify-purchase-order',
    'enter-invoice-details',
    'create-vendor-master-record'
  ],
  
  // Finance Management Director: Oversight and approvals
  director: [
    'dashboard',
    'approve-financial-reports',
    'view-collected-payments',
    'review-financial-reports'
  ],
  
  // Budget Officer: Financial reports review only
  budget: [
    'dashboard',
    'review-financial-reports'
  ],
  
  // Admin: System configuration
  admin: [
    'dashboard',
    'manage-posting-periods',
    'configure-organizational-structure',
    'manage-account-groups',
    'define-number-ranges'
  ]
};

export const roleNames: Record<UserRole, string> = {
  accounting: 'Accounting Staff',
  supply: 'Supply Officer',
  director: 'Finance Management Director',
  budget: 'Budget Officer',
  cashier: "Cashier's Office",
  admin: 'Admin'
};

export const roleDescriptions: Record<UserRole, string> = {
  accounting: 'Process financial transactions and manage accounts',
  cashier: 'Handle customer payments and issue receipts',
  supply: 'Manage supply chain and procurement inputs',
  director: 'Oversee and approve financial operations',
  budget: 'Review financial reports and budgets',
  admin: 'Configure system settings and structure'
};

export function getUserRole(): UserRole {
  const role = localStorage.getItem('userRole') as UserRole;
  return role || 'admin';
}

export function getUserName(): string {
  return localStorage.getItem('username') || 'User';
}

export function hasPermission(module: string): boolean {
  const role = getUserRole();
  return rolePermissions[role]?.includes(module) || false;
}

export function getAccessibleModules(): string[] {
  const role = getUserRole();
  return rolePermissions[role] || [];
}

export function isLoggedIn(): boolean {
  return localStorage.getItem('userRole') !== null;
}
