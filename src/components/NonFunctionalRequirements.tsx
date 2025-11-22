import { 
  Zap, 
  Users, 
  CheckCircle, 
  TrendingUp, 
  Lock, 
  FileText, 
  Shield, 
  Activity, 
  Database, 
  LifeBuoy, 
  Smile, 
  Layout, 
  Settings, 
  BookOpen 
} from 'lucide-react';

export function NonFunctionalRequirements() {
  const requirements = [
    {
      title: 'System Performance & Scalability',
      items: [
        { icon: Zap, text: 'Fast processing of invoices and payments' },
        { icon: Users, text: 'Support at least 50 simultaneous users' },
        { icon: CheckCircle, text: 'Efficient completion of scheduled tasks' },
        { icon: TrendingUp, text: 'Handle 20% yearly data growth' }
      ]
    },
    {
      title: 'Data Security & Regulatory Adherence',
      items: [
        { icon: Lock, text: 'Strict role-based access control' },
        { icon: FileText, text: 'Automatic audit logs with timestamps' },
        { icon: Shield, text: 'Encryption during storage and transit' }
      ]
    },
    {
      title: 'Operational Reliability & Uptime',
      items: [
        { icon: Activity, text: '99.5% service availability' },
        { icon: Database, text: 'Synchronized and consistent financial data' },
        { icon: LifeBuoy, text: 'Disaster recovery: restore within 4 hours, max 15 minutes data loss' }
      ]
    },
    {
      title: 'User Experience & Interface Design',
      items: [
        { icon: Smile, text: 'Intuitive design for all skill levels' },
        { icon: Layout, text: 'Clear dashboards for quick executive decisions' }
      ]
    },
    {
      title: 'System Maintenance & Support',
      items: [
        { icon: Settings, text: 'Built-in administrative tools for ICT team' },
        { icon: BookOpen, text: 'Complete documentation and knowledge transfer' }
      ]
    }
  ];

  return (
    <section id="non-functional-requirements" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl mb-4">Non-Functional Requirements</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 leading-relaxed">
              These non-functional requirements define the quality standards and performance behavior the SAP ERP system must meet. They ensure reliability, security, scalability, and long-term sustainability.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {requirements.map((category, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg mb-6 text-blue-700 border-b border-blue-100 pb-3">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => {
                  const Icon = item.icon;
                  return (
                    <div key={itemIndex} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mt-0.5">
                        <Icon className="w-4 h-4 text-blue-600" />
                      </div>
                      <p className="text-sm text-gray-700 leading-snug">
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
