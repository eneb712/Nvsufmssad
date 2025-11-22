import { createBrowserRouter } from 'react-router';
import { Layout } from '../components/Layout';
import { Login } from '../pages/Login';
import { Dashboard } from '../pages/Dashboard';
import { PrepareVoucher } from '../pages/PrepareVoucher';
import { ManageChartOfAccounts } from '../pages/ManageChartOfAccounts';
import { PostVendorPayments } from '../pages/PostVendorPayments';
import { PostGeneralLedgerCollections } from '../pages/PostGeneralLedgerCollections';
import { ManageFixedAssets } from '../pages/ManageFixedAssets';
import { ViewPaymentHistory } from '../pages/ViewPaymentHistory';
import { ProcessCustomerPayment } from '../pages/ProcessCustomerPayment';
import { IssueOfficialReceipt } from '../pages/IssueOfficialReceipt';
import { RecordBankDeposit } from '../pages/RecordBankDeposit';
import { GenerateCollectionReport } from '../pages/GenerateCollectionReport';
import { VerifyPurchaseOrder } from '../pages/VerifyPurchaseOrder';
import { EnterInvoiceDetails } from '../pages/EnterInvoiceDetails';
import { CreateVendorMasterRecord } from '../pages/CreateVendorMasterRecord';
import { ApproveFinancialReports } from '../pages/ApproveFinancialReports';
import { ViewCollectedPayments } from '../pages/ViewCollectedPayments';
import { ReviewFinancialReports } from '../pages/ReviewFinancialReports';
import { ManagePostingPeriods } from '../pages/ManagePostingPeriods';
import { ConfigureOrganizationalStructure } from '../pages/ConfigureOrganizationalStructure';
import { ManageAccountGroups } from '../pages/ManageAccountGroups';
import { DefineNumberRanges } from '../pages/DefineNumberRanges';

export const router = createBrowserRouter([
  {
    path: '/login',
    Component: Login,
  },
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Dashboard },
      { path: 'prepare-voucher', Component: PrepareVoucher },
      { path: 'manage-chart-of-accounts', Component: ManageChartOfAccounts },
      { path: 'post-vendor-payments', Component: PostVendorPayments },
      { path: 'post-general-ledger-collections', Component: PostGeneralLedgerCollections },
      { path: 'manage-fixed-assets', Component: ManageFixedAssets },
      { path: 'view-payment-history', Component: ViewPaymentHistory },
      { path: 'process-customer-payment', Component: ProcessCustomerPayment },
      { path: 'issue-official-receipt', Component: IssueOfficialReceipt },
      { path: 'record-bank-deposit', Component: RecordBankDeposit },
      { path: 'generate-collection-report', Component: GenerateCollectionReport },
      { path: 'verify-purchase-order', Component: VerifyPurchaseOrder },
      { path: 'enter-invoice-details', Component: EnterInvoiceDetails },
      { path: 'create-vendor-master-record', Component: CreateVendorMasterRecord },
      { path: 'approve-financial-reports', Component: ApproveFinancialReports },
      { path: 'view-collected-payments', Component: ViewCollectedPayments },
      { path: 'review-financial-reports', Component: ReviewFinancialReports },
      { path: 'manage-posting-periods', Component: ManagePostingPeriods },
      { path: 'configure-organizational-structure', Component: ConfigureOrganizationalStructure },
      { path: 'manage-account-groups', Component: ManageAccountGroups },
      { path: 'define-number-ranges', Component: DefineNumberRanges },
    ],
  },
]);