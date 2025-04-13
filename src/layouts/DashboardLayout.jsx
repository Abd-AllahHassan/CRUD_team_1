import Navbar from '../components/layoutComponents/Navbar';
import Sidebar from '../components/layoutComponents/Sidebar';
import DarkModeToggle from '../components/layoutComponents/DarkModeToggle';

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-white dark:bg-dark-bg text-black dark:text-white">
      <Sidebar className="dark:bg-dark-bg" />

      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-6">
          {children}
        </main>
      </div>

      <DarkModeToggle />
    </div>
  );
};

export default DashboardLayout;
