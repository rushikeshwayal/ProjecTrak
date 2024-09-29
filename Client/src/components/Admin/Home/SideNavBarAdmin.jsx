// import OpenSideNavPng from '../../../assets/OpenSideNav.png';
// import CloseSideNavPng from '../../../assets/CloseSideNav.png';
// import SideNavPng from '../../../assets/SideNavPng.png';
export default function SideNavBarAdmin({ isSidebarOpen, setIsSidebarOpen }) {
  return (
    <div className="fixed  h-screen top-10 flex">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} h-full w-80 bg-gray-100 shadow-lg z-40`}
      >
        <div className="flex flex-col h-full p-4">
          {/* Navigation Links */}
          <ul className="flex flex-col space-y-2 mt-20">
            <li className="group">
              <a
                href="/home"
                className="flex items-center px-4 py-2 text-gray-700 rounded-lg transition duration-300 transform hover:bg-purple-500 hover:text-white hover:scale-105 group-hover:shadow-lg"
              >
                Home
              </a>
            </li>
            <li className="group">
              <a
                href="/investigator/management"
                className="flex items-center px-4 py-2 text-gray-700 rounded-lg transition duration-300 transform hover:bg-purple-500 hover:text-white hover:scale-105 group-hover:shadow-lg"
              >
                Investigator Management
              </a>
            </li>
            <li className="group">
              <a
                href="/investigator/audit/reports"
                className="flex items-center px-4 py-2 text-gray-700 rounded-lg transition duration-300 transform hover:bg-purple-500 hover:text-white hover:scale-105 group-hover:shadow-lg"
              >
                Audit Reports
              </a>
            </li>
              <li className="group">
              <a
                href="/connect/admin"
                className="flex items-center px-4 py-2 text-gray-700 rounded-lg transition duration-300 transform hover:bg-purple-500 hover:text-white hover:scale-105 group-hover:shadow-lg"
              >
                Connect With Admin
              </a>
            </li>
            <li className="group">
              <a
                href="/project/statistics"
                className="flex items-center px-4 py-2 text-gray-700 rounded-lg transition duration-300 transform hover:bg-purple-500 hover:text-white hover:scale-105 group-hover:shadow-lg"
              >
                Project Statistics
              </a>
            </li>
            <li className="group">
              <a
                href="/organization"
                className="flex items-center px-4 py-2 text-gray-700 rounded-lg transition duration-300 transform hover:bg-purple-500 hover:text-white hover:scale-105 group-hover:shadow-lg"
              >
                About Organization
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Toggle Button - Separate it from the sidebar */}
      <button 
        onClick={() => setIsSidebarOpen(!isSidebarOpen)} 
        className="fixed font-extrabold h-10 top-8 left-4  z-50 bg-white px-[12px] rounded-lg text-center border-[2px] border-purple-500  text-purple-500   focus:outline-none"
      >  {isSidebarOpen ? '◁' : '▷'} 
      </button>
    </div>
  );
}
