import { useState } from 'react';
import MinistryLogos from '../../Common/MinistryLogos'; // Ministry Logos component
import SideNavBarAdmin from './SideNavBarAdmin'; // Sidebar component

function AdminCreateProject() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Sidebar toggle
  const [projects, setProjects] = useState([]); // To store created projects
  const [formData, setFormData] = useState({
    projectName: '',
    category: 'R&D', // Default project category
    investigatorName: '',
    investigatorEmail: '',
    investigatorPhone: '',
    startDate: '',
    endDate: '',
    totalFunds: '',
    approved: false,
  });

  // Generate a unique project ID (can be adjusted for more complexity)
  const generateProjectId = () => `PRJ-${Math.floor(Math.random() * 1000000)}`;

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newProject = {
      id: generateProjectId(),
      ...formData,
    };
    setProjects([...projects, newProject]); // Add the new project to the projects array
    setFormData({
      projectName: '',
      category: 'R&D',
      investigatorName: '',
      investigatorEmail: '',
      investigatorPhone: '',
      startDate: '',
      endDate: '',
      totalFunds: '',
      approved: false,
    }); // Clear form after submission
  };

  // Toggle project approval status
  const toggleApproval = (projectId) => {
    const updatedProjects = projects.map((project) =>
      project.id === projectId ? { ...project, approved: !project.approved } : project
    );
    setProjects(updatedProjects);
  };

  return (
    <div className="relative min-h-screen flex bg-gray-100">
      {/* Ministry Logos */}
      <div className="fixed top-0 left-0 right-0 z-40">
        <MinistryLogos />
      </div>

      {/* Sidebar */}
      <div className={`fixed top-[100px] left-0 transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <SideNavBarAdmin isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      </div>

      {/* Main content area */}
      <div className={`transition-all duration-300 ml-${isSidebarOpen ? '80' : '20'} mt-[120px] p-8 flex-grow`}>
        <h1 className="text-4xl font-bold text-purple-800 mb-6">Create New Project</h1>

        {/* Project Creation Form */}
        <section className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">New Project Form</h2>
          <form onSubmit={handleFormSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700">Project Name</label>
                <input
                  type="text"
                  name="projectName"
                  value={formData.projectName}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700">Category</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="R&D">R&D</option>
                  <option value="S&T">S&T</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700">Investigator Name</label>
                <input
                  type="text"
                  name="investigatorName"
                  value={formData.investigatorName}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700">Investigator Email</label>
                <input
                  type="email"
                  name="investigatorEmail"
                  value={formData.investigatorEmail}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700">Investigator Phone</label>
                <input
                  type="tel"
                  name="investigatorPhone"
                  value={formData.investigatorPhone}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700">Start Date</label>
                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700">End Date</label>
                <input
                  type="date"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700">Total Funds (INR)</label>
                <input
                  type="number"
                  name="totalFunds"
                  value={formData.totalFunds}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 bg-purple-700 text-white py-2 px-4 rounded-md hover:bg-purple-800 transition-all duration-200"
            >
              Create Project
            </button>
          </form>
        </section>

        {/* Table of All Projects */}
        <section className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">All Projects</h2>
          <table className="min-w-full bg-gray-100">
            <thead>
              <tr className="bg-purple-200 text-gray-700">
                <th className="py-3 px-4 text-left">Project Name</th>
                <th className="py-3 px-4 text-left">Category</th>
                <th className="py-3 px-4 text-left">Investigator</th>
                <th className="py-3 px-4 text-left">Start Date</th>
                <th className="py-3 px-4 text-left">End Date</th>
                <th className="py-3 px-4 text-left">Total Funds</th>
                <th className="py-3 px-4 text-left">Approval Status</th>
                <th className="py-3 px-4 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr key={project.id} className="text-gray-800 hover:bg-gray-200 transition duration-300">
                  <td className="border p-4">{project.projectName}</td>
                  <td className="border p-4">{project.category}</td>
                  <td className="border p-4">{project.investigatorName}</td>
                  <td className="border p-4">{project.startDate}</td>
                  <td className="border p-4">{project.endDate}</td>
                  <td className="border p-4">{project.totalFunds}</td>
                  <td className="border p-4">{project.approved ? 'Approved' : 'Pending'}</td>
                  <td className="border p-4">
                    <button
                      onClick={() => toggleApproval(project.id)}
                      className={`py-2 px-4 rounded-md ${
                        project.approved ? 'bg-red-500 text-white' : 'bg-green-500 text-white'
                      }`}
                    >
                      {project.approved ? 'Revoke' : 'Approve'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
}

export default AdminCreateProject;
