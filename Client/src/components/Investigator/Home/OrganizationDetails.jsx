import { useState } from 'react';
import MinistryLogos from '../../Common/MinistryLogos';
import SideNavBarInvestigator from './SideNavBarInvestigator';

const OrganizationDetails = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Sample data for organization details
  const organizationInfo = {
    name: 'XYZ Research Institute',
    established: 'January 15, 2000',
    ceo: 'Dr. John Smith',
    address: '123 Research Lane, Innovation City, IN 456789',
    phone: '+91 12345 67890',
    email: 'info@xyzresearch.org',
    personnel: [
      { name: 'Dr. John Smith', position: 'CEO', status: 'Active' },
      { name: 'Ms. Emily Johnson', position: 'Lead Researcher', status: 'Active' },
      { name: 'Mr. Michael Brown', position: 'Project Manager', status: 'Active' },
      { name: 'Ms. Jessica Davis', position: 'Data Analyst', status: 'Inactive' },
      { name: 'Mr. Chris Wilson', position: 'QA Engineer', status: 'Active' },
    ],
    projects: [
      { title: 'Innovative Technology Development', status: 'Ongoing' },
      { title: 'Smart City Solutions', status: 'Completed' },
      { title: 'Sustainable Energy Research', status: 'Ongoing' },
    ],
  };

  const handleUpdatePage = () => {
    // Logic for updating organization details (to be implemented)
    alert('Update organization details logic to be implemented');
  };

  return (
    <div className="flex relative min-h-screen">
      <div className="fixed top-0 left-0 right-0 z-40">
        <MinistryLogos />
      </div>

      {/* Sidebar - left side */}
      <div className={`fixed top-[100px] left-0 mt-[100px] transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <SideNavBarInvestigator isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      </div>

      {/* Main content area */}
      <div className={`flex-grow transition-all duration-300 ml-${isSidebarOpen ? '80' : '20'} mt-[100px] p-8`}>
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-4xl font-bold mb-4 text-purple-700">Organization Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-700 mb-2"><strong>Organization Name:</strong> {organizationInfo.name}</p>
              <p className="text-gray-700 mb-2"><strong>Established:</strong> {organizationInfo.established}</p>
              <p className="text-gray-700 mb-2"><strong>CEO:</strong> {organizationInfo.ceo}</p>
              <p className="text-gray-700 mb-2"><strong>Address:</strong> {organizationInfo.address}</p>
              <p className="text-gray-700 mb-2"><strong>Phone:</strong> {organizationInfo.phone}</p>
              <p className="text-gray-700 mb-2"><strong>Email:</strong> <a href={`mailto:${organizationInfo.email}`} className="text-purple-600">{organizationInfo.email}</a></p>
            </div>

            {/* Personnel Section */}
            <div>
              <h3 className="text-2xl font-bold text-purple-700 mb-2">Current Personnel</h3>
              <ul className="list-disc ml-5">
                {organizationInfo.personnel.map((person, index) => (
                  <li key={index} className={`flex justify-between mb-1 ${person.status === 'Active' ? 'text-gray-800' : 'text-gray-400'}`}>
                    <span>{person.name} - {person.position}</span>
                    <span className={`font-semibold ${person.status === 'Active' ? 'text-green-600' : 'text-red-600'}`}>{person.status}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h3 className="text-3xl font-bold mb-6 text-purple-700">Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {organizationInfo.projects.map((project, index) => (
              <div key={index} className="bg-purple-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h4 className="font-semibold text-lg">{project.title}</h4>
                <p className={`text-gray-600 mb-2`}>Status: <span className={`font-semibold ${project.status === 'Ongoing' ? 'text-yellow-500' : 'text-gray-600'}`}>{project.status}</span></p>
              </div>
            ))}
          </div>
        </div>

        {/* Update Page Button */}
        <div className="flex justify-end">
          <button
            onClick={handleUpdatePage}
            className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition duration-300"
          >
            Update Organization Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrganizationDetails;
