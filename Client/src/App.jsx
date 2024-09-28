import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useContext } from 'react';
import Login from './components/Login/Login';
import Home from './components/Admin/Home/HomeAdmin';
import Home2 from './components/Investigator/Home/HomeInvestigator';
import UserContext from './components/context/UserContext'; // Import UserContext
import ProjectDetails from './components/Investigator/Home/ProjectDetails';
import OrganizationDetails from './components/Investigator/Home/OrganizationDetails';
import ProjectStatistics from './components/Investigator/Home/ProjectStatistics';
import InvestigatorManagement from './components/Investigator/Home/InvestigatorManagement';
import ConnectToAdmin from './components/Investigator/Home/ConnectToAdmin';
import InvestigatorProfile from './components/Investigator/SubPart/InvestigatorProfile';
import InvestigatorNotification from './components/Investigator/SubPart/InvestigatorNotification';
import InvestgatorAuditReport from './components/Investigator/Home/InvestgatorAuditReport';

function App() {
  // Make sure UserContext is properly set up to provide the user
  const { user } = useContext(UserContext) || {}; // Default to an empty object if user is undefined

  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          {user && user.role === 'Admin Console' ? ( // Check if user is defined before accessing role
            <Route path="/home" element={<Home />} />
          ) : (
    <>
            <Route path="/home" element={<Home2 />} />
            <Route path="/rd/details" element={<ProjectDetails />} />
            <Route path="/organization" element={<OrganizationDetails />} />
            <Route path="/project/statistics" element={<ProjectStatistics />} />
            <Route path="/investigator/management" element={<InvestigatorManagement />} />
            <Route path="/connect/admin" element={<ConnectToAdmin />} />
            <Route path="/connect/admin" element={<ConnectToAdmin />} />
            <Route path="/investigator/profile" element={<InvestigatorProfile />} />
            <Route path="/investigator/notification" element={<InvestigatorNotification />} />
            <Route path="/investigator/audit/reports" element={<InvestgatorAuditReport />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
