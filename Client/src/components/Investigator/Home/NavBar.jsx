import ProfilePng from '../../../assets/Profile.png';

export default function NavBar() {
  return (
    <div className="fixed top-[140px] right-4 z-50">
      <a href="/profile">
        <img 
          src={ProfilePng} 
          alt="Profile" 
          className="w-10 h-10 border-2 border-purple-500 rounded-full hover:opacity-80 transition duration-300" // Optional styling for profile image
        />
      </a>
    </div>
  );
}

