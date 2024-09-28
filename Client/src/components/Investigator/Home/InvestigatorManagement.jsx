import  { useState } from 'react';
import MinistryLogos from '../../Common/MinistryLogos';
import SideNavBarInvestigator from './SideNavBarInvestigator';

const InvestigatorManagement = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [investigators, setInvestigators] = useState([
    { id: 1, name: 'Dr. John Doe', designation: 'Lead Investigator' },
    { id: 2, name: 'Dr. Jane Smith', designation: 'Co-Investigator' },
    { id: 3, name: 'Prof. Emily White', designation: 'Research Assistant' }
  ]);
  const [newInvestigator, setNewInvestigator] = useState({
    name: '',
    designation: ''
  });

  // Handle input changes for the form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewInvestigator({ ...newInvestigator, [name]: value });
  };

  // Handle adding a new investigator
  const handleAddInvestigator = () => {
    if (newInvestigator.name && newInvestigator.designation) {
      setInvestigators([
        ...investigators,
        { id: investigators.length + 1, ...newInvestigator }
      ]);
      setNewInvestigator({ name: '', designation: '' });
    }
  };

  // Handle deleting an investigator
  const handleDeleteInvestigator = (id) => {
    setInvestigators(investigators.filter((investigator) => investigator.id !== id));
  };

  return (
    <div className="flex relative min-h-screen bg-gray-100">
      {/* Ministry Logos at the top */}
      <div className="fixed top-0 left-0 right-0 z-40">
        <MinistryLogos />
      </div>

      {/* Sidebar - left side */}
      <div className={`fixed top-[100px] left-0 mt-[100px] transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <SideNavBarInvestigator isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      </div>

      {/* Main content area */}
      <div className={`flex-grow transition-all duration-300 ml-${isSidebarOpen ? '80' : '20'} mt-[100px] p-8`}>
        <h2 className="text-4xl font-bold mb-8 text-purple-700">Investigator Management</h2>

        {/* Add New Investigator Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h3 className="text-3xl font-bold mb-6 text-purple-700">Add New Investigator</h3>
          <div className="flex flex-col space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Investigator Name"
              value={newInvestigator.name}
              onChange={handleInputChange}
              className="p-3 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              name="designation"
              placeholder="Designation"
              value={newInvestigator.designation}
              onChange={handleInputChange}
              className="p-3 border border-gray-300 rounded-md"
            />
            <button
              onClick={handleAddInvestigator}
              className="bg-purple-700 text-white py-3 px-6 rounded-md hover:bg-purple-800 transition-all duration-200"
            >
              Add Investigator
            </button>
          </div>
        </div>

        {/* Investigator List */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-3xl font-bold mb-6 text-purple-700">Current Investigators</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-gray-100 border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="py-2 px-4 border-b">ID</th>
                  <th className="py-2 px-4 border-b">Name</th>
                  <th className="py-2 px-4 border-b">Designation</th>
                  <th className="py-2 px-4 border-b">Actions</th>
                </tr>
              </thead>
              <tbody>
                {investigators.map((investigator) => (
                  <tr key={investigator.id} className="text-center">
                    <td className="py-2 px-4 border-b">{investigator.id}</td>
                    <td className="py-2 px-4 border-b">{investigator.name}</td>
                    <td className="py-2 px-4 border-b">{investigator.designation}</td>
                    <td className="py-2 px-4 border-b">
                     <button
                        className="bg-green-500 mx-3 text-white py-1 px-3 rounded-md hover:bg-red-600 transition-all duration-200"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteInvestigator(investigator.id)}
                        className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600 transition-all duration-200"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestigatorManagement;
