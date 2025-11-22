import { Bell, Search, Settings, Menu } from 'lucide-react';
import { Button } from './ui/button';
import { useSidebarContext } from '../contexts/SidebarContext';

export function Header() {
  const { toggleSidebar } = useSidebarContext();

  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 bg-white shadow-sm">
      <div className="flex h-20 items-center justify-between px-6 lg:px-8">
        {/* Left Section - Hamburger Menu + Search */}
        <div className="flex flex-1 items-center gap-4">
          {/* Hamburger Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className="h-12 w-12 rounded-xl hover:bg-gray-100"
            aria-label="Toggle sidebar"
          >
            <Menu className="h-6 w-6 text-gray-600" />
          </Button>

          {/* Search Bar */}
          <div className="relative w-full max-w-md">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search transactions, students, or vendors..."
              className="h-12 w-full rounded-xl border-2 border-gray-200 bg-gray-50 pl-12 pr-4 transition-all placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none"
            />
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="relative h-12 w-12 rounded-xl hover:bg-gray-100"
          >
            <Bell className="h-5 w-5 text-gray-600" />
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500"></span>
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="h-12 w-12 rounded-xl hover:bg-gray-100"
          >
            <Settings className="h-5 w-5 text-gray-600" />
          </Button>
        </div>
      </div>
    </header>
  );
}