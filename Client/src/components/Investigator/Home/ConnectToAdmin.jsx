import { useState } from 'react';
import MinistryLogos from '../../Common/MinistryLogos';
import SideNavBarInvestigator from './SideNavBarInvestigator';

const ConnectToAdmin = () => {
  // State to store current requests
  const [requests, setRequests] = useState([]);
  const [newRequest, setNewRequest] = useState({
    type: '',
    message: '',
    additionalDetails: '',
  });
  const [pastConversations, setPastConversations] = useState([
    {
      id: 1,
      type: 'Meeting',
      message: 'Requested a meeting to discuss project timelines.',
      status: 'Approved',
      date: new Date('2023-08-10'),
      reply: 'Meeting scheduled for 15th August at 10:00 AM.',
    },
    {
      id: 2,
      type: 'Funding',
      message: 'Request for additional funds for resource allocation.',
      status: 'Pending',
      date: new Date('2023-09-05'),
      reply: 'Request under review. Expected approval by end of the month.',
    },
  ]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Handle input changes for the form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRequest({ ...newRequest, [name]: value });
  };

  // Handle submitting a new request
  const handleAddRequest = () => {
    if (newRequest.type && newRequest.message) {
      setRequests([...requests, { id: requests.length + 1, ...newRequest, status: 'Pending', date: new Date() }]);
      setNewRequest({ type: '', message: '', additionalDetails: '' });
    }
  };

  // Render different request types with color coding
  const getRequestBadge = (type) => {
    switch (type) {
      case 'Meeting':
        return <span className="text-white bg-blue-500 px-2 py-1 rounded-full">Meeting</span>;
      case 'Delay':
        return <span className="text-white bg-red-500 px-2 py-1 rounded-full">Delay</span>;
      case 'Resources':
        return <span className="text-white bg-green-500 px-2 py-1 rounded-full">Resources</span>;
      case 'Funding':
        return <span className="text-white bg-yellow-500 px-2 py-1 rounded-full">Funding</span>;
      default:
        return <span className="text-white bg-gray-500 px-2 py-1 rounded-full">General</span>;
    }
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
        <h2 className="text-4xl font-bold mb-8 text-purple-700">Request Management</h2>

        {/* Add New Request Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h3 className="text-3xl font-bold mb-6 text-purple-700">Send New Request</h3>
          <div className="flex flex-col space-y-4">
            <select
              name="type"
              value={newRequest.type}
              onChange={handleInputChange}
              className="p-3 border border-gray-300 rounded-md"
            >
              <option value="">Select Request Type</option>
              <option value="Meeting">Meeting</option>
              <option value="Delay">Delay</option>
              <option value="Resources">Resources</option>
              <option value="Funding">Funding</option>
            </select>
            <textarea
              name="message"
              placeholder="Type your request message here..."
              value={newRequest.message}
              onChange={handleInputChange}
              className="p-3 border border-gray-300 rounded-md"
              rows="4"
            />
            {newRequest.type === 'Meeting' && (
              <input
                type="text"
                name="additionalDetails"
                placeholder="Preferred Date and Time"
                value={newRequest.additionalDetails}
                onChange={handleInputChange}
                className="p-3 border border-gray-300 rounded-md"
              />
            )}
            <button
              onClick={handleAddRequest}
              className="bg-purple-700 text-white py-3 px-6 rounded-md hover:bg-purple-800 transition-all duration-200"
            >
              Send Request
            </button>
          </div>
        </div>

        {/* Request List */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h3 className="text-3xl font-bold mb-6 text-purple-700">Your Requests</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-gray-100 border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="py-2 px-4 border-b">ID</th>
                  <th className="py-2 px-4 border-b">Type</th>
                  <th className="py-2 px-4 border-b">Message</th>
                  <th className="py-2 px-4 border-b">Status</th>
                  <th className="py-2 px-4 border-b">Date</th>
                </tr>
              </thead>
              <tbody>
                {requests.map((request) => (
                  <tr key={request.id} className="text-center">
                    <td className="py-2 px-4 border-b">{request.id}</td>
                    <td className="py-2 px-4 border-b">{getRequestBadge(request.type)}</td>
                    <td className="py-2 px-4 border-b">{request.message}</td>
                    <td className="py-2 px-4 border-b">{request.status}</td>
                    <td className="py-2 px-4 border-b">{request.date.toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Past Conversations Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-3xl font-bold mb-6 text-purple-700">Past Conversations</h3>
          <div className="overflow-y-auto max-h-80">
            <table className="min-w-full bg-gray-100 border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="py-2 px-4 border-b">ID</th>
                  <th className="py-2 px-4 border-b">Type</th>
                  <th className="py-2 px-4 border-b">Message</th>
                  <th className="py-2 px-4 border-b">Status</th>
                  <th className="py-2 px-4 border-b">Date</th>
                  <th className="py-2 px-4 border-b">Reply</th>
                </tr>
              </thead>
              <tbody>
                {pastConversations.map((conversation) => (
                  <tr key={conversation.id} className="text-center">
                    <td className="py-2 px-4 border-b">{conversation.id}</td>
                    <td className="py-2 px-4 border-b">{getRequestBadge(conversation.type)}</td>
                    <td className="py-2 px-4 border-b">{conversation.message}</td>
                    <td className="py-2 px-4 border-b">{conversation.status}</td>
                    <td className="py-2 px-4 border-b">{conversation.date.toLocaleDateString()}</td>
                    <td className="py-2 px-4 border-b">{conversation.reply}</td>
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

export default ConnectToAdmin;
