import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useContext } from 'react';
import Login from './components/Login/Login';
import HomeAdmin from './components/Admin/Home/HomeAdmin';
import Home2 from './components/Investigator/Home/HomeInvestigator';
import UserContext from './components/context/UserContext'; // Import UserContext
import ProjectDetails from './components/Investigator/Home/ProjectDetails';
import OrganizationDetails from './components/Investigator/Home/OrganizationDetails';
import ProjectStatistics from './components/Investigator/Home/ProjectStatistics';
import InvestigatorManagement from './components/Investigator/Home/InvestigatorManagement';
import ConnectToAdmin from './components/Investigator/Home/ConnectToAdmin';
import InvestigatorProfile from './components/Investigator/SubPart/InvestigatorProfile';
import InvestigatorNotification from './components/Investigator/SubPart/InvestigatorNotification';
import InvestigatorAuditReport from './components/Investigator/Home/InvestgatorAuditReport'; // Fixed spelling
import Error from './components/Common/Error';
import ReportPage from './components/Admin/Home/ReportPage'; // Ensure this is correctly imported
import AdminProjectDetails from './components/Admin/Project/ProjectDetails/ProjectDetails'; // Ensure this is correctly imported
import ConnectWithInvestigator from './components/Admin/Home/ConnectWithInvestigator';
import DynamicResourceAllocation from './components/Admin/Home/DynamicResourceAllocation'; // Ensure this is correctly imported
import AIBasedAnalysis from './components/Admin/Home/AIBasedAnalysis';
import MinistryPolicies from './components/Admin/Home/MinistryPolicies';
import AdminProfile from './components/Admin/Home/SubPart/AdminProfile';
import AdminNotification from './components/Admin/Home/SubPart/AdminNotification';
import Chatbot from './components/Common/Chatbot'; // Ensure this is correctly imported
import AdminCreateProject from './components/Admin/Home/AdminCreateProject';
function App() {
  // Access UserContext safely
  const userContext = useContext(UserContext);
  const user = userContext ? userContext.user : null;

  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Default Route for Login */}
          <Route path="/" element={<Login />} />

          {/* Routes for Admin */}
          {user && user.role === 'Admin Console' && (
            <>
              <Route path="/home" element={<HomeAdmin />} />
              <Route path="/reports/:reportId" element={<ReportPage />} />
              <Route path="/admin/project/details" element={<AdminProjectDetails />} />
              <Route path="/connect/investigator" element={<ConnectWithInvestigator />} />
               <Route path="/resource/allocation" element={<DynamicResourceAllocation />} />
               <Route path="/analysis/ai" element={<AIBasedAnalysis />} />
               <Route path="/ministry/policy" element={<MinistryPolicies />} />
               <Route path="/admin/profile" element={<AdminProfile />} />
               <Route path="/admin/notification" element={<AdminNotification />} />
               <Route path="/create/project" element={<AdminCreateProject />} />

            </>
          )}

          {/* Routes for Project Investigator */}
          {user && user.role === 'Project Investigator' && (
            <>
              <Route path="/home" element={<Home2 />} />
              <Route path="/rd/details" element={<ProjectDetails />} />
              <Route path="/organization" element={<OrganizationDetails />} />
              <Route path="/project/statistics" element={<ProjectStatistics />} />
              <Route path="/investigator/management" element={<InvestigatorManagement />} />
              <Route path="/connect/admin" element={<ConnectToAdmin />} />
              <Route path="/investigator/profile" element={<InvestigatorProfile />} />
              <Route path="/investigator/audit/reports" element={<InvestigatorAuditReport />} />
              <Route path="/investigator/notification" element={<InvestigatorNotification />} />
             
            </>
          )}

          {/* Error Page Route */}
          <Route path="/error" element={<Error />} />
        </Routes>
      </BrowserRouter>
      <Chatbot />
    </div>
  );
}

export default App;
