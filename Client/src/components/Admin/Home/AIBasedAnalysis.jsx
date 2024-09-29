import { useState } from 'react';
import MinistryLogos from '../../Common/MinistryLogos'; // Importing the MinistryLogos component
import SideNavBarAdmin from './SideNavBarAdmin'; // Importing the Sidebar component
import AIBasedAnalysisImg1 from '../../../assets/AIBasedAnalysis1.jpg'; // Importing images related to AI-based analysis
import AIBasedAnalysisImg2 from '../../../assets/AIBasedAnalysis2.jpg'; // Importing images related to AI-based analysis
import AnimatedLoader from '../../Common/AnimatedLoader'; // Importing the AnimatedLoader component
const AIBasedAnalysis = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // State to control sidebar visibility
  const [loading, setLoading] = useState(false); // Loading state for AI report generation
  const [reportSummary, setReportSummary] = useState(null); // State to store generated AI report summary

  // Sample data for analysis results
  const analysisResults = [
    { id: 1, project: 'Project A', insights: 'High resource consumption', recommendations: 'Optimize resources' },
    { id: 2, project: 'Project B', insights: 'On track', recommendations: 'Maintain current strategy' },
    { id: 3, project: 'Project C', insights: 'Delayed due to external factors', recommendations: 'Increase workforce' },
  ];

  // Hardcoded AI reports for different projects
  const hardcodedReports = {
    'Project A': 'AI Analysis for Project A: The project is consuming a high amount of resources. Immediate action to optimize resource allocation is recommended to prevent budget overruns.',
    'Project B': 'AI Analysis for Project B: The project is progressing well, with 80% completion and optimal resource utilization. No additional action is required at this stage.',
    'Project C': 'AI Analysis for Project C: Significant delays have been caused by external factors. Increasing the workforce and reallocating budget can help recover lost time.',
  };

  // Simulate AI report generation
  const handleGenerateReport = (projectName) => {
    setLoading(true);
    setReportSummary(null); // Clear any previous report
    setTimeout(() => {
      // Simulate AI report generation using hardcoded data
      const summary = hardcodedReports[projectName] || 'No report available for this project.';
      setReportSummary(summary);
      setLoading(false);
    }, 3000); // Simulating a 3-second AI processing time
  };

  return (
    <div className="flex relative min-h-screen bg-gray-100">
      {/* Ministry Logos */}
      <div className="fixed top-0 left-0 right-0 z-40">
        <MinistryLogos />
      </div>

      {/* Sidebar */}
      <div className={`fixed top-[100px] left-0 transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <SideNavBarAdmin isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      </div>

      {/* Main Content Area */}
      <div className={`transition-all duration-300 ml-${isSidebarOpen ? '80' : '20'} mt-[120px] p-8 flex-grow`}>
        <h1 className="text-4xl font-bold text-purple-800 mb-6">AI-Based Analysis</h1>

        {/* Explanation Section */}
        <section className="mb-10">
          <p className="text-gray-600 mb-4">
            AI-Based Analysis is an innovative system designed to leverage artificial intelligence for comprehensive analysis of project data. This system employs advanced algorithms to extract valuable insights, identify trends, and make data-driven recommendations that facilitate better decision-making.
          </p>
          <img src={AIBasedAnalysisImg1} alt="AI Analysis Overview" className="mb-4 h-[400px] rounded-lg shadow-lg" />
          <p className="text-gray-600">
            By harnessing the power of AI, organizations can analyze historical and real-time data, leading to optimized project outcomes and enhanced operational efficiency.
          </p>
        </section>




        {/* Table for AI Report Generation */}
        <section className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Generate AI Report for Projects</h2>
          <table className="min-w-full bg-gray-100">
            <thead>
              <tr className="bg-purple-200 text-gray-700">
                <th className="py-3 px-4 text-left">Project</th>
                <th className="py-3 px-4 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {analysisResults.map((result) => (
                <tr key={result.id} className="text-gray-800 hover:bg-gray-200 transition duration-300">
                  <td className="border p-4">{result.project}</td>
                  <td className="border p-4">
                    <button
                      onClick={() => handleGenerateReport(result.project)}
                      className="bg-purple-700 text-white py-2 px-4 rounded hover:bg-purple-800 transition-all duration-200"
                      disabled={loading} // Disable button while loading
                    >
                      {loading ? 'Generating...' : 'Generate AI Report'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* AI Generated Report Section */}
        {loading && (
          <div className="mt-6 text-purple-700  h-40 w-full flex justify-center items-center font-bold text-lg">
           <div className='text-[20px]'>{<AnimatedLoader/>}</div>
          </div>
        )}
  {reportSummary && (
          <section className="bg-green-100 p-6 rounded-lg shadow-lg mt-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">AI Report Summary</h3>
            <p className="text-gray-700">{reportSummary}</p>
          </section>
        )}


        {/* How AI Works Section */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">How Does AI-Based Analysis Work?</h2>
          <p className="text-gray-600 mb-4">
            The AI system processes vast amounts of data from various sources to generate insights regarding project performance, risks, and opportunities. Machine learning models continuously learn from the data, improving their accuracy and relevance over time.
          </p>
          <img src={AIBasedAnalysisImg2} alt="AI Algorithms in Action" className="mb-4 h-[400px] rounded-lg shadow-lg" />
          <p className="text-gray-600">
            This proactive analysis allows organizations to adjust their strategies swiftly, ensuring that resources are allocated where they can have the greatest impact.
          </p>
        </section>


      
      </div>
    </div>
  );
};

export default AIBasedAnalysis;
