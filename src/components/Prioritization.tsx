import { CheckCircle2, Circle, CircleDot, XCircle } from 'lucide-react';

export function Prioritization() {
  const priorities = [
    {
      level: 'Must Have',
      icon: CheckCircle2,
      color: 'blue',
      items: [
        'Organizational structure configuration (company code, chart of accounts)',
        'Core AP/AR processes',
        'Student payments and vendor transactions',
        'Fixed assets management'
      ]
    },
    {
      level: 'Should Have',
      icon: Circle,
      color: 'green',
      items: [
        'Role-based reporting views',
        'Internal controls (posting periods, reconciliation accounts)'
      ]
    },
    {
      level: 'Could Have',
      icon: CircleDot,
      color: 'yellow',
      items: [
        'Controlling (CO) module integration',
        'Automated migration of historical data'
      ]
    },
    {
      level: 'Won\'t Have',
      icon: XCircle,
      color: 'gray',
      items: [
        'Additional SAP modules (MM, HR, SD) to avoid scope creep'
      ]
    }
  ];

  const colorClasses = {
    blue: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      text: 'text-blue-700',
      icon: 'text-blue-600',
      badge: 'bg-blue-600'
    },
    green: {
      bg: 'bg-green-50',
      border: 'border-green-200',
      text: 'text-green-700',
      icon: 'text-green-600',
      badge: 'bg-green-600'
    },
    yellow: {
      bg: 'bg-amber-50',
      border: 'border-amber-200',
      text: 'text-amber-700',
      icon: 'text-amber-600',
      badge: 'bg-amber-600'
    },
    gray: {
      bg: 'bg-gray-50',
      border: 'border-gray-200',
      text: 'text-gray-700',
      icon: 'text-gray-600',
      badge: 'bg-gray-600'
    }
  };

  return (
    <section id="prioritization" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl mb-4">Prioritization (MoSCoW Method)</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          
          <div className="max-w-4xl mx-auto bg-blue-50 p-8 rounded-2xl border border-blue-100">
            <p className="text-gray-700 leading-relaxed">
              To ensure efficient implementation, the requirements were prioritized using the MoSCoW method, focusing on essential financial functions and minimizing project scope expansion.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {priorities.map((priority, index) => {
            const Icon = priority.icon;
            const colors = colorClasses[priority.color as keyof typeof colorClasses];
            
            return (
              <div 
                key={index}
                className={`${colors.bg} border-2 ${colors.border} p-8 rounded-2xl transition-all hover:shadow-lg`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 ${colors.badge} rounded-xl flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className={`text-xl ${colors.text}`}>
                    {priority.level}
                  </h3>
                </div>

                <ul className="space-y-3">
                  {priority.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <div className={`w-1.5 h-1.5 ${colors.badge} rounded-full mt-2 flex-shrink-0`}></div>
                      <span className="text-gray-700 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Summary Table */}
        <div className="mt-12 bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 shadow-sm">
          <h3 className="text-xl mb-6 text-center text-gray-800">Implementation Priority Summary</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-white rounded-xl border border-blue-200">
              <div className="text-3xl text-blue-600 mb-2">4</div>
              <div className="text-sm text-gray-600">Must Have</div>
            </div>
            <div className="text-center p-4 bg-white rounded-xl border border-green-200">
              <div className="text-3xl text-green-600 mb-2">2</div>
              <div className="text-sm text-gray-600">Should Have</div>
            </div>
            <div className="text-center p-4 bg-white rounded-xl border border-amber-200">
              <div className="text-3xl text-amber-600 mb-2">2</div>
              <div className="text-sm text-gray-600">Could Have</div>
            </div>
            <div className="text-center p-4 bg-white rounded-xl border border-gray-200">
              <div className="text-3xl text-gray-600 mb-2">1</div>
              <div className="text-sm text-gray-600">Won't Have</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
