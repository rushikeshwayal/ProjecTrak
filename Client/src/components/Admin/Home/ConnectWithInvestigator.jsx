import { useState } from 'react';
import MinistryLogos from '../../Common/MinistryLogos';
import SideNavBarAdmin from './SideNavBarAdmin'; // Sidebar component
import ProfilePng from '../../../assets/Profile.png';
const ConnectWithInvestigators = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedInvestigator, setSelectedInvestigator] = useState(null); // Selected investigator to chat with
  const [message, setMessage] = useState(''); // Message input from admin
  const [tag, setTag] = useState(''); // Tag input for messages
  const [chatLogs, setChatLogs] = useState([]); // Chat logs with each investigator

  // Sample data for investigators
  const investigators = [
    { id: 1, name: 'Dr. Rushikesh Wayal', avatar: 'https://via.placeholder.com/50' },
    { id: 2, name: 'Dr. Omkar Deshpande', avatar: 'https://via.placeholder.com/50' },
    { id: 3, name: 'Prof. Rohit Dhadambe', avatar: 'https://via.placeholder.com/50' }
  ];

  // Sample past messages for each investigator including meetings
  const pastMessages = {
    1: [
      { sender: 'Admin', content: 'Please provide the latest update on your project.', tags: ['#Update', '#Project'] },
      { sender: 'Dr. Rushikesh Wayal', content: 'We have completed phase one.', tags: ['#Status', '#Completed'] },
      { sender: 'Admin', content: 'Discussed project timelines and milestones.', tags: ['#Meeting'] },
      { sender: 'Admin', content: 'Meeting scheduled for 2023-08-01.', tags: ['#Meeting'] }
    ],
    2: [
      { sender: 'Admin', content: 'Do you need any additional resources?', tags: ['#Resources', '#Assistance'] },
      { sender: 'Dr. Omkar Deshpande', content: 'Yes, we need more lab equipment.', tags: ['#Request', '#Equipment'] },
      { sender: 'Admin', content: 'Follow-up on resource allocation requests.', tags: ['#Meeting'] },
      { sender: 'Admin', content: 'Meeting scheduled for 2023-08-15.', tags: ['#Meeting'] }
    ],
    3: [
      { sender: 'Admin', content: 'How is the funding coming along?', tags: ['#Funding', '#Status'] },
      { sender: 'Prof. Rohit Dhadambe', content: 'We are still awaiting approval.', tags: ['#Approval', '#Pending'] },
      { sender: 'Admin', content: 'Budget review and funding status update.', tags: ['#Meeting'] },
      { sender: 'Admin', content: 'Meeting scheduled for 2023-09-05.', tags: ['#Meeting'] }
    ],
  };

  // Select investigator to chat
  const handleSelectInvestigator = (investigator) => {
    setSelectedInvestigator(investigator);
  };

  // Handle message input
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  // Handle tag input
  const handleTagChange = (e) => {
    setTag(e.target.value);
  };

  // Handle sending a message with tags
  const handleSendMessage = () => {
    if (message.trim() && selectedInvestigator) {
      const newMessage = {
        investigatorId: selectedInvestigator.id,
        sender: 'Admin',
        content: message,
        tags: tag.trim() ? [tag] : [] // Add tag if available
      };
      setChatLogs([...chatLogs, newMessage]);
      setMessage(''); // Clear the input
      setTag(''); // Clear the tag input
    }
  };

  // Render different tags with color coding
  const getTagColor = (type) => {
    switch (type) {
      case 'Meeting':
        return 'bg-blue-500 text-white';
      case 'Delay':
        return 'bg-red-500 text-white';
      case 'Resources':
        return 'bg-green-500 text-white';
      case 'Funding':
        return 'bg-yellow-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className="relative min-h-screen bg-gray-100 flex">
      {/* Ministry Logos */}
      <div className="fixed top-0 left-0 right-0 z-40">
        <MinistryLogos />
      </div>

      {/* Sidebar */}
      <div className={`fixed top-[100px] left-0 mt-[100px] transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <SideNavBarAdmin isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      </div>

      {/* Main Chat Area */}
      <div className={`transition-all duration-300 ml-${isSidebarOpen ? '80' : '20'} mt-[120px] p-8 flex-grow flex`}>
        {/* Investigator List */}
        <div className="w-1/4 h-full bg-white rounded-lg shadow-lg p-4 overflow-y-auto">
          <h2 className="text-2xl font-semibold mb-4">Investigators</h2>
          <div className="flex flex-col space-y-2">
            {investigators.map((investigator) => (
              <button
                key={investigator.id}
                onClick={() => handleSelectInvestigator(investigator)}
                className={`flex items-center py-2 px-4 rounded-md text-white transition duration-300 ease-in-out ${selectedInvestigator?.id === investigator.id ? 'bg-purple-700' : 'bg-purple-500 hover:bg-purple-600'}`}
              >
                <img src={ProfilePng} alt={investigator.name} className="rounded-full size-6 mr-2" />
                {investigator.name}
              </button>
            ))}
          </div>
        </div>

        {/* Chat Section */}
        <div className="flex-grow ml-4 bg-white rounded-lg shadow-lg p-8">
          {selectedInvestigator ? (
            <>
              <h2 className="text-3xl font-bold mb-4">Chat with {selectedInvestigator.name}</h2>
              
              {/* Past Messages */}
              <div className="h-[525px] overflow-y-auto mb-4 flex flex-col space-y-4">
                {pastMessages[selectedInvestigator.id]?.map((msg, index) => (
                  <div key={index} className={`flex ${msg.sender === 'Admin' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`rounded-lg p-3 ${msg.sender === 'Admin' ? 'bg-purple-200' : 'bg-gray-200'} max-w-xs`}>
                      <p className="font-semibold">{msg.sender}</p>
                      <p>{msg.content}</p>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {msg.tags.map((tag, idx) => (
                          <span key={idx} className={`${getTagColor(tag)} px-2 py-1 rounded-full`}>{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
                {chatLogs
                  .filter((log) => log.investigatorId === selectedInvestigator.id)
                  .map((log, index) => (
                    <div key={index} className={`flex ${log.sender === 'Admin' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`rounded-lg p-3 ${log.sender === 'Admin' ? 'bg-purple-200' : 'bg-gray-200'} max-w-xs`}>
                        <p className="font-semibold">{log.sender}</p>
                        <p>{log.content}</p>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {log.tags.map((tag, idx) => (
                            <span key={idx} className={`${getTagColor(tag)} px-2 py-1 rounded-full`}>{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                ))}
              </div>

              {/* Message Input and Tag Selector */}
              <div className="flex space-x-4 mb-4">
                <input
                  type="text"
                  value={message}
                  onChange={handleMessageChange}
                  placeholder="Type your message..."
                  className="flex-grow p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
                
                <select
                  value={tag}
                  onChange={handleTagChange}
                  className="p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
                >
                  <option value="">Select Tag</option>
                  <option value="Meeting">Meeting</option>
                  <option value="Delay">Delay</option>
                  <option value="Resources">Resources</option>
                  <option value="Funding">Funding</option>
                  <option value="General">General</option>
                </select>

                <button
                  onClick={handleSendMessage}
                  className="bg-purple-700 text-white py-2 px-4 rounded-md hover:bg-purple-800 transition duration-200"
                >
                  Send
                </button>
              </div>
            </>
          ) : (
            <h2 className="text-2xl text-center text-gray-600">Select an investigator to start chatting</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConnectWithInvestigators;
