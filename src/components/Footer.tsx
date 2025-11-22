import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* University Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-700" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                </svg>
              </div>
              <div>
                <div className="text-sm text-blue-200">NVSU</div>
              </div>
            </div>
            <p className="text-sm text-blue-100 leading-relaxed">
              Nueva Vizcaya State University's Financial Management System - Building a modern, integrated digital financial platform for the future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('goals')}
                  className="text-sm text-blue-100 hover:text-white transition-colors"
                >
                  Goals & Objectives
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('functional-requirements')}
                  className="text-sm text-blue-100 hover:text-white transition-colors"
                >
                  Functional Requirements
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('non-functional-requirements')}
                  className="text-sm text-blue-100 hover:text-white transition-colors"
                >
                  Non-Functional Requirements
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('prioritization')}
                  className="text-sm text-blue-100 hover:text-white transition-colors"
                >
                  Prioritization
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg mb-6">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-300 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-blue-100">
                  Bayombong, Nueva Vizcaya, Philippines
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-blue-300 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-blue-100">
                  +63 (XX) XXXX-XXXX
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-300 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-blue-100">
                  finance@nvsu.edu.ph
                </span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg mb-6">Connect With Us</h3>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-10 h-10 bg-blue-800 hover:bg-blue-700 rounded-xl flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-blue-800 hover:bg-blue-700 rounded-xl flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-blue-800 hover:bg-blue-700 rounded-xl flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-6 p-4 bg-blue-800/50 backdrop-blur-sm rounded-xl border border-blue-700">
              <p className="text-xs text-blue-200 leading-relaxed">
                For system inquiries and technical support, please contact the ICT department.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-blue-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-blue-200">
              © {new Date().getFullYear()} Nueva Vizcaya State University – Financial Management System. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-blue-200">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
