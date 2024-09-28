import { useState, useContext } from 'react';
import LoginImg from '../../assets/pexels-apasaric-1238864.jpg';
import MinistryLogos from '../Common/MinistryLogos'; // Adjusted import
import UserContext from '../context/UserContext'; // Adjusted import
import {useNavigate} from 'react-router-dom';

function Login() {
  // State to manage the selected role
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useContext(UserContext); // Using UserContext
const navigate = useNavigate();
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password || !role) {
      alert('Please fill in all fields');
      return;
      
    }
    // Logic to handle the form submission, e.g., API call
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Role:", role);
    setUser({ email, role }); // Update user context with email and role
    navigate('/home'); // Redirect to the home page
  };

  return (
    <div>
      <div className='min-h-screen'>
        <MinistryLogos />
        <div className="flex flex-wrap justify-center items-center h-[780px] bg-gray-100">
          <div className="flex bg-white shadow-lg rounded-lg overflow-hidden w-full md:w-[70%]">
            {/* Image Section */}
            <div className="hidden md:block md:w-1/2">
              <img className="object-cover w-full h-full" src={LoginImg} alt="Login Visual" />
            </div>

            {/* Form Section */}
            <div className="w-full md:w-1/2 p-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">ProjecTrak</h1>
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>

                {/* Password Input */}
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                  <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>

                {/* Role Selection Buttons */}
                <div className='w-full flex justify-center items-center mt-6 gap-5'>
                  <button 
                    type="button" 
                    required
                    onClick={() => setRole('Project Investigator')} 
                    className={`text-purple-500 font-bold border-2 border-purple-500 py-2 px-6 rounded-lg transition duration-300 transform ${role === 'Project Investigator' ? 'bg-purple-500 text-white' : 'hover:bg-purple-500 hover:text-white'}`}
                  >
                    Investigator 
                  </button>
                  <button 
                    type="button" 
                    required
                    onClick={() => setRole('Admin Console')} 
                    className={`text-purple-500 font-bold border-2 border-purple-500 py-2 px-6 rounded-lg transition duration-300 transform ${role === 'Admin Console' ? 'bg-purple-500 text-white' : 'hover:bg-purple-500 hover:text-white'}`}
                  >
                    Admin 
                  </button>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  className="w-full bg-purple-500 text-white font-semibold py-2 rounded-lg hover:bg-purple-600 transition duration-300"
                >
                  Login
                </button>
              </form>

              <div className="text-center mt-4">
                <a href="#" className="text-sm text-purple-500 hover:underline">
                  Forgot your password?
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
