import { useState } from 'react';
import MinistryLogos from "../../Common/MinistryLogos";
import SideNavBarInvestigator from "./SideNavBarInvestigator";
import NavBar from "./NavBar";

const InvestigatorAuditReport = () => {
  // State to manage the list of audit reports
  const [auditReports, setAuditReports] = useState([
    {
      id: 1,
      projectName: 'Project A',
      investigator: 'John Doe',
      reportDate: '2024-08-15',
      details: 'Detailed report on Project A',
    },
    {
      id: 2,
      projectName: 'Project B',
      investigator: 'Jane Smith',
      reportDate: '2024-09-10',
      details: 'Detailed report on Project B',
    },
    {
      id: 3,
      projectName: 'Project C',
      investigator: 'Mark Johnson',
      reportDate: '2024-09-25',
      details: 'Detailed report on Project C',
    },
  ]);

  // State to handle modal visibility and form input values
  const [showModal, setShowModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [newReport, setNewReport] = useState({
    projectName: '',
    investigator: '',
    reportDate: '',
    details: '',
  });

  const [selectedReport, setSelectedReport] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Sidebar state

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReport({ ...newReport, [name]: value });
  };

  // Function to handle the submission of a new audit report
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setAuditReports([...auditReports, { id: auditReports.length + 1, ...newReport }]);
    setNewReport({ projectName: '', investigator: '', reportDate: '', details: '' });
    setShowModal(false);
  };

  // Function to handle modal toggling
  const toggleModal = () => setShowModal(!showModal);

  // Function to view report details
  const viewReportDetails = (report) => {
    setSelectedReport(report);
    setShowDetailsModal(true);
  };

  // Function to close the details modal
  const closeDetailsModal = () => setShowDetailsModal(false);

  return (
    <div className="relative min-h-screen flex overflow-hidden">
      {/* Ministry Logos - top section */}
      <div className="fixed top-0 left-0 right-0 z-40">
        <MinistryLogos />
      </div>

      {/* Sidebar - left side */}
      <div className={`mt-[100px] transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <SideNavBarInvestigator isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      </div>

      {/* Profile NavBar - top-right corner */}
      <NavBar />

      {/* Main content area */}
      <div
        className={`transition-all duration-300 flex-grow mt-40 p-4 ${isSidebarOpen ? 'ml-80' : 'ml-16'} mt-[120px]`}
      >
        <h1 className="text-4xl font-bold text-purple-700 mb-8">Audit Report Page</h1>
        
        {/* Button to open the modal for submitting a new report */}
        <div className="mb-6">
          <button
            onClick={toggleModal}
            className="bg-purple-700 text-white py-3 px-6 rounded-md hover:bg-purple-800 transition-all duration-200"
          >
            Submit Audit Report
          </button>
        </div>

        {/* Modal for submitting a new report */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg relative">
              <button
                onClick={toggleModal}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
              >
                &times;
              </button>
              <h2 className="text-2xl font-bold mb-4">Add New Audit Report</h2>
              <form onSubmit={handleFormSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="projectName">Project Name</label>
                  <input
                    type="text"
                    id="projectName"
                    name="projectName"
                    value={newReport.projectName}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="investigator">Investigator</label>
                  <input
                    type="text"
                    id="investigator"
                    name="investigator"
                    value={newReport.investigator}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="reportDate">Report Date</label>
                  <input
                    type="date"
                    id="reportDate"
                    name="reportDate"
                    value={newReport.reportDate}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="details">Report Details</label>
                  <textarea
                    id="details"
                    name="details"
                    value={newReport.details}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    rows="4"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-purple-700 text-white py-2 px-4 rounded-md hover:bg-purple-800 transition-all duration-200"
                >
                  Submit Report
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Modal for viewing report details */}
        {showDetailsModal && selectedReport && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg relative">
              <button
                onClick={closeDetailsModal}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
              >
                &times;
              </button>
              <h2 className="text-2xl font-bold mb-4">Report Details</h2>
              <p className="mb-2"><strong>Project Name:</strong> {selectedReport.projectName}</p>
              <p className="mb-2"><strong>Investigator:</strong> {selectedReport.investigator}</p>
              <p className="mb-2"><strong>Report Date:</strong> {selectedReport.reportDate}</p>
              <p className="mb-2"><strong>Details:</strong> {selectedReport.details}</p>
            </div>
          </div>
        )}

        {/* Past Audit Reports Table */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">Past Audit Reports</h2>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-purple-200 text-gray-700">
                <th className="border p-2">Project Name</th>
                <th className="border p-2">Investigator</th>
                <th className="border p-2">Report Date</th>
                <th className="border p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {auditReports.map((report) => (
                <tr key={report.id} className="text-gray-800">
                  <td className="border p-2">{report.projectName}</td>
                  <td className="border p-2">{report.investigator}</td>
                  <td className="border p-2">{report.reportDate}</td>
                  <td className="border p-2 text-center">
                    <button
                      onClick={() => viewReportDetails(report)}
                      className="bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-600 transition-all duration-200"
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InvestigatorAuditReport;
