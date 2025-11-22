import { Outlet } from 'react-router';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { SidebarProvider, useSidebarContext } from '../contexts/SidebarContext';

function LayoutContent() {
  const { isOpen } = useSidebarContext();

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <div 
        className={`transition-all duration-300 ${
          isOpen ? 'lg:pl-80' : 'lg:pl-0'
        }`}
      >
        <Header />
        <main className="p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export function Layout() {
  return (
    <SidebarProvider>
      <LayoutContent />
    </SidebarProvider>
  );
}