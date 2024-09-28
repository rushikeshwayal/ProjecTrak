import { useState } from 'react';
import MinistryLogos from '../../Common/MinistryLogos';
import ProfilePng from '../../../assets/Profile.png';

const InvestigatorProfile = () => {
  // State to handle investigator information
  const [investigator, setInvestigator] = useState({
    image: 'https://via.placeholder.com/150',
    name: 'Rushikesh Wayal',
    email: 'rushikesh.wayal@example.com',
    phone: '+123456789',
    accountNumber: '1234567890123456',
    designation: 'Senior Investigator',
    position: 'Lead Investigator',
    experience: '5 Years',
    dateOfBirth: '2004-01-15',
    address: '1234 Main Street, Anytown, Country',
    startDate: '2017-05-10',
    ministry: 'Florid Pvt.Lmt',
  });

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 relative">
      {/* Ministry Logos and Home Link Container */}
      <div className="fixed  flex-wrap top-0 left-0 right-0 z-40 flex items-center justify-between shadow-md">
        {/* Ministry Logos */}
        <div className='w-full '>
        <MinistryLogos />
        </div>
        {/* Home Link */}
        
      </div>
<div className=" font-bold text-xl mt-48 ml-32">
          <a href="/home" className="text-purple-700 hover:text-purple-900">◁  Home</a>
        </div>
      {/* Profile Container */}
      <div className="flex flex-col items-center mt-[0px] p-8">
        {/* Profile Header */}
        <div className="flex items-center justify-center space-x-6 mb-8">
          <img
            src={ProfilePng}
            alt="Investigator"
            className="w-32 h-32 rounded-full border-4 border-purple-700 shadow-lg"
          />
          <div className="text-center">
            <h1 className="text-4xl font-bold text-purple-700">{investigator.name}</h1>
            <h2 className="text-xl text-gray-600">{investigator.designation}</h2>
          </div>
        </div>

        {/* Profile Details */}
        <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg">
          {/* Personal Information */}
          <h3 className="text-3xl font-bold mb-4 text-purple-700">Personal Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <p className="text-gray-700 font-semibold">Email</p>
              <p className="text-gray-900">{investigator.email}</p>
            </div>
            <div>
              <p className="text-gray-700 font-semibold">Phone</p>
              <p className="text-gray-900">{investigator.phone}</p>
            </div>
            <div>
              <p className="text-gray-700 font-semibold">Date of Birth</p>
              <p className="text-gray-900">{new Date(investigator.dateOfBirth).toLocaleDateString()}</p>
            </div>
            <div>
              <p className="text-gray-700 font-semibold">Address</p>
              <p className="text-gray-900">{investigator.address}</p>
            </div>
          </div>

          {/* Professional Information */}
          <h3 className="text-3xl font-bold mb-4 text-purple-700">Professional Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <p className="text-gray-700 font-semibold">Designation</p>
              <p className="text-gray-900">{investigator.designation}</p>
            </div>
            <div>
              <p className="text-gray-700 font-semibold">Position</p>
              <p className="text-gray-900">{investigator.position}</p>
            </div>
            <div>
              <p className="text-gray-700 font-semibold">Experience</p>
              <p className="text-gray-900">{investigator.experience}</p>
            </div>
            <div>
              <p className="text-gray-700 font-semibold">Start Date</p>
              <p className="text-gray-900">{new Date(investigator.startDate).toLocaleDateString()}</p>
            </div>
            <div>
              <p className="text-gray-700 font-semibold">Organization</p>
              <p className="text-gray-900">{investigator.ministry}</p>
            </div>
          </div>

          {/* Additional Information */}
          <h3 className="text-3xl font-bold mb-4 text-purple-700">Additional Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-gray-700 font-semibold">Account Number</p>
              <p className="text-gray-900">{investigator.accountNumber}</p>
            </div>
            <div>
              <p className="text-gray-700 font-semibold">Identification</p>
              <p className="text-gray-900">ID12345ABC</p>
            </div>
            <div>
              <p className="text-gray-700 font-semibold">Security Clearance</p>
              <p className="text-gray-900">Level 4</p>
            </div>
            <div>
              <p className="text-gray-700 font-semibold">Branch</p>
              <p className="text-gray-900">Main Branch</p>
            </div>
          </div>
          {/* Centered Button */}
          <div className="flex justify-center mt-8">
            <button className="bg-purple-700 text-white py-3 px-6 rounded-md hover:bg-purple-800 transition-all duration-200">
              Update Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestigatorProfile;
