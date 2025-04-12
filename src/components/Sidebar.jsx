import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Home, UserPlus, Menu, X } from 'lucide-react';
import UserMenu from './UserMenu';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    // Only close sidebar on small screens
    if (window.innerWidth < 1024) {
      setIsOpen(false);
    }
  };

  return (
    <div>
      {/* Hamburger button for small screens */}
      {!isOpen && (
        <button
          onClick={toggleSidebar}
          className="lg:hidden p-4 text-white z-50 relative"
        >
          <Menu size={28} />
        </button>
      )}

      {/* Overlay and Sidebar for small screens */}
      {isOpen && (
        <div className="fixed inset-0 z-40 flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50"
            onClick={toggleSidebar}
          ></div>

          {/* Sidebar */}
          <aside className="relative z-50 bg-dark-sidebar text-light-text w-64 min-h-screen flex flex-col transition-all duration-300 ease-in-out">
            {/* Close (X) Icon */}
            <div className="flex justify-end p-4">
              <button onClick={toggleSidebar} className="text-white">
                <X size={24} />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex-grow px-6">
              <nav className="flex flex-col gap-4">
                <NavLink
                  to="/"
                  onClick={handleLinkClick}
                  className="flex items-center gap-3 p-2 rounded hover:bg-card-blue hover:text-white transition-colors"
                >
                  <Home size={20} />
                  <span>Home</span>
                </NavLink>
                <NavLink
                  to="/add-customer"
                  onClick={handleLinkClick}
                  className="flex items-center gap-3 p-2 rounded hover:bg-card-blue hover:text-white transition-colors"
                >
                  <UserPlus size={20} />
                  <span>Add Customer</span>
                </NavLink>
              </nav>
            </div>

            {/* User Menu at Bottom */}
            <div className="p-6">
              <UserMenu />
            </div>
          </aside>
        </div>
      )}

      {/* Sidebar for large screens */}
      <aside className="hidden lg:flex flex-col justify-between bg-dark-sidebar text-light-text w-64 min-h-screen">
        <div className="flex-grow p-6">
          <nav className="flex flex-col gap-4">
            <NavLink
              to="/"
              className="flex items-center gap-3 p-2 rounded hover:bg-card-blue hover:text-white transition-colors"
            >
              <Home size={20} />
              <span>Home</span>
            </NavLink>
            <NavLink
              to="/add-customer"
              className="flex items-center gap-3 p-2 rounded hover:bg-card-blue hover:text-white transition-colors"
            >
              <UserPlus size={20} />
              <span>Add Customer</span>
            </NavLink>
          </nav>
        </div>

        <div className="p-6">
          <UserMenu />
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
