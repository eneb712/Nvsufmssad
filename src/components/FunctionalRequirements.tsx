import { 
  Building2, 
  UserCheck, 
  CreditCard, 
  GraduationCap, 
  RefreshCw, 
  BarChart3 
} from 'lucide-react';

export function FunctionalRequirements() {
  const requirements = [
    {
      icon: Building2,
      title: 'Digital Financial Setup',
      description: 'The system digitally organizes the university\'s financial layout, assigns office codes, and sets annual budget calendars to track funds accurately across departments.',
      align: 'left'
    },
    {
      icon: UserCheck,
      title: 'Vendor Profile Storage',
      description: 'The system stores detailed digital profiles for all vendors, enabling fast retrieval during purchasing and invoice processing.',
      align: 'right'
    },
    {
      icon: CreditCard,
      title: 'Electronic Bill Payment',
      description: 'Accounting staff encode billing details and execute payments digitally, reducing reliance on manual paper vouchers.',
      align: 'left'
    },
    {
      icon: GraduationCap,
      title: 'Student Payment Tracking',
      description: 'Cashiers record tuition and other payments instantly, automatically linking them to the correct student accounts.',
      align: 'right'
    },
    {
      icon: RefreshCw,
      title: 'Real-Time Record Updates',
      description: 'Financial records update automatically, with support for approval workflows and audit tracking to ensure accountability.',
      align: 'left'
    },
    {
      icon: BarChart3,
      title: 'On-Screen Reporting',
      description: 'University leaders can view payment histories and financial summaries directly on-screen without waiting for printed reports.',
      align: 'right'
    }
  ];

  return (
    <section id="functional-requirements" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl mb-4">Functional Requirements</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          
          <div className="max-w-4xl mx-auto bg-blue-50 p-8 rounded-2xl border border-blue-100">
            <p className="text-gray-700 leading-relaxed">
              The financial system seeks to implement SAP ERP to restructure Nueva Vizcaya State University's financial processes. By shifting from manual operations to a fully integrated digital environment, the system will standardize financial data, eliminate gaps, and deliver faster, more accurate reporting. To achieve this goal, the analysis focuses on the following functional requirements:
            </p>
          </div>
        </div>

        <div className="space-y-8">
          {requirements.map((req, index) => {
            const Icon = req.icon;
            const isLeft = req.align === 'left';
            
            return (
              <div 
                key={index}
                className={`flex flex-col ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
              >
                {/* Icon Circle */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className={`flex-1 bg-gray-50 p-8 rounded-2xl border border-gray-100 ${isLeft ? 'lg:text-left' : 'lg:text-right'}`}>
                  <h3 className="text-xl mb-3 text-blue-700">{req.title}</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {req.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
