import React, { Suspense } from "react";
import { Menu, Bell, Search, User } from "lucide-react";

const Button = React.lazy(() => import("designSystem/Button").then(module => ({ default: module.Button })));

const Header = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 fixed w-full top-0 z-50">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-4">
          <Suspense fallback={<button className="p-2">☰</button>}>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden"
            >
              <Menu className="h-4 w-4" />
            </Button>
          </Suspense>
          
          <div className="flex items-center space-x-2">
            <h1 className="text-xl font-bold text-gray-900">
              Enterprise App
            </h1>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="hidden md:flex items-center space-x-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Notifications */}
          <Suspense fallback={<button className="p-2">🔔</button>}>
            <Button variant="outline" size="sm">
              <Bell className="h-4 w-4" />
            </Button>
          </Suspense>

          {/* User Profile */}
          <Suspense fallback={<button className="p-2">👤</button>}>
            <Button variant="outline" size="sm">
              <User className="h-4 w-4" />
            </Button>
          </Suspense>
        </div>
      </div>
    </header>
  );
};

export default Header;