# NVSU Finance ERP - Role-Based Access System

## Login Instructions
- **Username:** Any username (e.g., "accounting", "cashier", "admin")
- **Password:** Minimum 6 characters (e.g., "password123")
- **Role:** Select from dropdown based on your position

---

## 🎯 Strict Role-Based View Architecture

The system implements **COMPLETE MODULE HIDING** based on user role. Users ONLY see the specific modules they have permission to access—no grayed-out or disabled tabs.

---

## 📋 Role Configurations (Per Use Case Architecture)

### 1. 📊 Accounting Staff
**Purpose:** Financial transaction processing and account management

**Visible Modules ONLY:**
- ✅ Dashboard
- ✅ Prepare Voucher
- ✅ Manage Chart of Accounts
- ✅ Post Vendor Payments
- ✅ Post General Ledger Collections
- ✅ Manage Fixed Assets
- ✅ View Payment History

**All Other Modules:** ❌ Completely Hidden

---

### 2. 💰 Cashier's Office
**Purpose:** Strictly transactional - customer payment processing

**Visible Modules ONLY:**
- ✅ Dashboard
- ✅ Process Customer Payment
- ✅ Issue Official Receipt (OR)
- ✅ Record Bank Deposit
- ✅ Generate Collection Report

**Hidden:** ❌ All general ledger, procurement, and budgeting modules

---

### 3. 📦 Supply Officer
**Purpose:** Supply chain inputs and vendor management

**Visible Modules ONLY:**
- ✅ Dashboard
- ✅ Verify Purchase Order
- ✅ Enter Invoice Details
- ✅ Create Vendor Master Record

**Hidden:** ❌ All payment processing, collections, and financial reporting modules

---

### 4. 🎓 Finance Management Director
**Purpose:** Oversight and approval of financial operations

**Visible Modules ONLY:**
- ✅ Dashboard
- ✅ Approve Financial Reports
- ✅ View Collected Payments
- ✅ Review Financial Reports

**Hidden:** ❌ Day-to-day transactional modules and system configuration

---

### 5. 📈 Budget Officer
**Purpose:** Financial reports review

**Visible Modules ONLY:**
- ✅ Dashboard
- ✅ Review Financial Reports

**Hidden:** ❌ All other modules (most restricted view)

---

### 6. 🔧 Admin
**Purpose:** System configuration and structure management

**Visible Modules ONLY:**
- ✅ Dashboard
- ✅ Manage Posting Periods
- ✅ Configure Organizational Structure
- ✅ Manage Account Groups
- ✅ Define Number Ranges

**Hidden:** ❌ All transactional and operational modules

---

## 🎨 Design Standards

### Color Palette
- **Deep Academic Blue:** `#1e3a8a` (primary - trust & authority)
- **Gold Accent:** `#f59e0b` (secondary - prestige)
- **White Background:** `#ffffff` (clean & institutional)

### Status Badge Colors
- ✅ **Green (#059669):** Approved, Completed, Open, Active
- ⚠️ **Amber (#d97706):** Pending, Warning, In Progress
- ❌ **Red (#dc2626):** Rejected, Closed, Critical, Inactive

### UI Standards
- **Large Action Buttons:** 64px height (h-16) for primary actions
- **Form Fields:** 56px height (h-14) with 2px borders
- **High Contrast:** WCAG AAA compliant typography
- **Spacious Layout:** Clear spacing between form elements
- **Built-in Validation:** Real-time error messages below fields

---

## 🔐 Security Features

1. **Role-Based Access Control (RBAC):** Each role sees only permitted modules
2. **Complete Module Hiding:** Unauthorized features don't appear in UI
3. **Protected Routes:** Direct URL access blocked for unauthorized modules
4. **Access Denied Screens:** Clear messaging when attempting unauthorized access
5. **Session Management:** Secure storage of user role and credentials
6. **Automatic Logout:** Clean session termination

---

## 🧪 Testing Different Roles

### Test Accounting Staff:
```
Username: accounting
Password: password123
Role: Accounting Staff
```
**Expected View:** Vouchers, Chart of Accounts, Vendor Payments, GL Collections, Fixed Assets, Payment History

### Test Cashier:
```
Username: cashier
Password: password123
Role: Cashier's Office
```
**Expected View:** Customer Payments, Issue Receipt, Bank Deposits, Collection Reports ONLY

### Test Supply Officer:
```
Username: supply
Password: password123
Role: Supply Officer
```
**Expected View:** Purchase Orders, Invoice Entry, Vendor Master Records ONLY

### Test Finance Director:
```
Username: director
Password: password123
Role: Finance Management Director
```
**Expected View:** Approve Reports, View Payments, Review Reports (oversight focus)

### Test Budget Officer:
```
Username: budget
Password: password123
Role: Budget Officer
```
**Expected View:** Review Financial Reports ONLY (most restricted)

### Test Admin:
```
Username: admin
Password: password123
Role: Admin
```
**Expected View:** System configuration tools (Posting Periods, Org Structure, Account Groups, Number Ranges)

---

## 📱 Key Features by Role

### Accounting Staff Features:
- **Prepare Voucher:** Create payment vouchers with validation
- **Chart of Accounts:** Manage GL account structure
- **Vendor Payments:** Post payments to vendor accounts
- **GL Collections:** Post student collections to general ledger

### Cashier Features:
- **Process Payment:** Quick customer/student payment entry
- **Issue Receipt:** Generate official receipts with preview
- **Bank Deposits:** Record daily deposits with status tracking
- **Collection Reports:** Generate daily collection summaries

### Supply Officer Features:
- **Verify PO:** Review and approve purchase orders
- **Invoice Entry:** Record incoming vendor invoices
- **Vendor Master:** Create and maintain vendor records

### Director Features:
- **Approve Reports:** Review and approve financial statements
- **View Payments:** Monitor payment collections
- **Financial Reports:** Access comprehensive reports

### Admin Features:
- **Posting Periods:** Open/close fiscal periods
- **Org Structure:** Configure company codes and cost centers
- **Account Groups:** Define GL account classifications
- **Number Ranges:** Set up document numbering systems

---

## ✨ UI Highlights

- **Clean Login Portal:** Prominent NVSU logo, clear role selection
- **Dynamic Sidebar:** 80px width (w-80) with role-specific navigation
- **Gold Role Badge:** Highlighted current role at top of sidebar
- **Large Buttons:** Accessible 64px height for primary actions
- **Status Badges:** Color-coded transaction states
- **Form Validation:** Inline error messages with ⚠ icon
- **Responsive Design:** Optimized for desktop use
- **High Contrast:** Dark blue text on white background

---

## 🚀 System Benefits

- **Zero Confusion:** Users only see what they need
- **Reduced Errors:** Simplified interfaces prevent mistakes
- **Faster Training:** Role-specific views easier to learn
- **Better Security:** Reduced attack surface per user
- **Institutional Design:** Professional academic aesthetic
- **Accessibility:** High contrast, large buttons, clear labels

---

This system ensures non-technical university staff can efficiently perform their specific financial duties without confusion or access to unnecessary features.
