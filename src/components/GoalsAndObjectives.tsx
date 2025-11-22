import { 
  Clock, 
  Database, 
  AlertCircle, 
  Users, 
  GitMerge, 
  Shield, 
  Layers 
} from 'lucide-react';

export function GoalsAndObjectives() {
  const objectives = [
    {
      icon: Clock,
      label: 'Reduce processing time by 25–30% via automation'
    },
    {
      icon: Database,
      label: 'Improve data accuracy through centralized records'
    },
    {
      icon: AlertCircle,
      label: 'Eliminate duplicate/conflicting entries across units'
    },
    {
      icon: Users,
      label: 'Provide user-friendly interfaces for non-technical staff'
    },
    {
      icon: GitMerge,
      label: 'Integrate workflows across supply, budget, cashier, and accounting'
    },
    {
      icon: Shield,
      label: 'Strengthen internal control (audit trails, approvals, posting rules)'
    },
    {
      icon: Layers,
      label: 'Ensure compatibility with existing ICT infrastructure'
    }
  ];

  return (
    <section id="goals" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl mb-4">Goals and Objectives</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Text Content */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-xl mb-6 text-blue-700">System Goal</h3>
            <p className="text-gray-700 leading-relaxed">
              The goal of the proposed financial system is to address the remaining gaps and limitations found in Nueva Vizcaya State University's current financial operations, particularly the issues not fully solved by the partially implemented ERP module. While the existing SAP system provided the structure for digital operations, it did not eliminate delays, inconsistencies, and remaining manual processes. The new system aims to become a practical, fully functional, and user-friendly digital solution that automates workflows, supports real transactions, and ensures accuracy, transparency, and reliability of the university's financial data.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              To achieve this goal, the analysis focuses on the following objectives:
            </p>
          </div>

          {/* Right: Objective Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {objectives.map((objective, index) => {
              const Icon = objective.icon;
              return (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-200 transition-all group"
                >
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <p className="text-sm text-gray-700 leading-snug">
                    {objective.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
