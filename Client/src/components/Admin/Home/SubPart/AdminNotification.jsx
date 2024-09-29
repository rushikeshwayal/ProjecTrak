import { useState } from 'react';

const AdminNotification = () => {
  // Sample notifications data for admin
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      message: 'A new report has been generated.',
      date: '2024-09-26',
      type: 'latest',
    },
    {
      id: 2,
      message: 'Your profile has been updated successfully.',
      date: '2024-08-19',
      type: 'past',
    },
    {
      id: 3,
      message: 'Ministry of Science has sent a new policy update.',
      date: '2024-07-18',
      type: 'past',
    },
    {
      id: 4,
      message: 'New project funding approval is required.',
      date: '2024-09-29',
      type: 'latest',
    },
  ]);

  // Function to remove a notification
  const removeNotification = (id) => {
    setNotifications(notifications.filter((notification) => notification.id !== id));
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 p-8">
      {/* Page Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-purple-700">Admin Notifications</h1>
        <a href="/home" className="text-xl text-purple-700 hover:text-purple-900">Home</a>
      </div>

      {/* Notifications List */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        {notifications.length === 0 ? (
          <p className="text-gray-600 text-center">No notifications to show.</p>
        ) : (
          <div>
            {/* Latest Notifications */}
            <h2 className="text-2xl font-bold text-green-600 mb-4">Latest Notifications</h2>
            {notifications.filter(n => n.type === 'latest').length === 0 ? (
              <p className="text-gray-600 mb-4">No latest notifications.</p>
            ) : (
              notifications
                .filter(n => n.type === 'latest')
                .map((notification) => (
                  <div key={notification.id} className="flex justify-between items-center mb-4 bg-green-100 p-4 rounded-lg border-l-4 border-green-500">
                    <p className="text-gray-800">{notification.message}</p>
                    <button
                      onClick={() => removeNotification(notification.id)}
                      className="text-red-500 hover:text-red-700 transition-all duration-200"
                    >
                      &times;
                    </button>
                  </div>
                ))
            )}

            {/* Past Notifications */}
            <h2 className="text-2xl font-bold text-blue-600 mt-8 mb-4">Past Notifications</h2>
            {notifications.filter(n => n.type === 'past').length === 0 ? (
              <p className="text-gray-600">No past notifications.</p>
            ) : (
              notifications
                .filter(n => n.type === 'past')
                .map((notification) => (
                  <div key={notification.id} className="flex justify-between items-center mb-4 bg-blue-100 p-4 rounded-lg border-l-4 border-blue-500">
                    <p className="text-gray-800">{notification.message}</p>
                    <button
                      onClick={() => removeNotification(notification.id)}
                      className="text-red-500 hover:text-red-700 transition-all duration-200"
                    >
                      &times;
                    </button>
                  </div>
                ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminNotification;
