import { useState } from 'react';

function AssignedProjectInvestigator() {
  const [activeTab, setActiveTab] = useState('about');

  const handleTabClick = (tab) => {
    console.log(`Switching to tab: ${tab}`); // Added log for debugging
    setActiveTab(tab);
  };

  return (
    <div className="w-full bg-gray-100 border border-gray-300 mt-20 rounded-lg shadow-lg">
      <ul
        className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-300 rounded-t-lg bg-gray-50"
        role="tablist"
      >
        <li className="mr-2">
          <button
            onClick={() => handleTabClick('about')}
            className={`inline-block p-4 rounded-tl-lg ${
              activeTab === 'about'
                ? 'text-purple-600 bg-white border-b-2 border-purple-600'
                : 'hover:text-gray-600 hover:bg-gray-200'
            }`}
          >
            R&D
          </button>
        </li>
        <li className="mr-2">
          <button
            onClick={() => handleTabClick('services')}
            className={`inline-block p-4 ${
              activeTab === 'services'
                ? 'text-purple-600 bg-white border-b-2 border-purple-600'
                : 'hover:text-gray-600 hover:bg-gray-200'
            }`}
          >
            S&T
          </button>
        </li>
        <li className="mr-2">
          <button
            onClick={() => handleTabClick('statistics')}
            className={`inline-block p-4 rounded-tr-lg ${
              activeTab === 'statistics'
                ? 'text-purple-600 bg-white border-b-2 border-purple-600'
                : 'hover:text-gray-600 hover:bg-gray-200'
            }`}
          >
            FAQ`s
          </button>
        </li>
      </ul>
      <div className="overflow-hidden relative bg-gray-50">
        <div className="flex transition-transform duration-500">
          {/* R&D Section */}
          {activeTab === 'about' && (
            <div className="w-96  bg-white rounded-lg border-2 border-purple-500 m-10  md:p-8 text-gray-700">
              <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-gray-900">
                R&D Project 2024
              </h2>
              <p className="mb-3 text-gray-500">
                Empower Developers, IT Ops, and business teams to collaborate at high velocity. Respond to changes and
                deliver great customer and employee service experiences fast.
              </p>
              <a
                href="/rd/details"
                className="inline-flex items-center font-medium text-purple-600 hover:text-purple-800"
              >
               Details
                <svg
                  className="w-2.5 h-2.5 ml-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
              </a>
            </div>
          )}

          {/* S&T Section */}
          {activeTab === 'services' && (
            <div className="w-full p-6 bg-white rounded-lg md:p-8 text-gray-700">
              <p className="mb-3 text-gray-500">
               No Project of S&T
              </p>
            </div>
          )}

          {/* FAQ Section */}
          {activeTab === 'statistics' && (
            <div className="w-full p-6 bg-white rounded-lg md:p-8 text-gray-700">
              <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-gray-900">Frequently Asked Questions</h2>
              
              {/* FAQ 1 */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800">Q1: What is an R&D project?</h3>
                <p className="text-gray-600">
                  An R&D (Research and Development) project refers to the activities that a business or government undertakes to innovate and introduce new products or services. It is often the first stage in the development process.
                </p>
              </div>

              {/* FAQ 2 */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800">Q2: How does S&T differ from R&D?</h3>
                <p className="text-gray-600">
                  S&T (Science and Technology) projects are generally focused on applying scientific knowledge for practical purposes, especially in industry. R&D (Research and Development) is broader and includes both basic and applied research.
                </p>
              </div>

              {/* FAQ 3 */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800">Q3: What are the key steps involved in managing a project?</h3>
                <p className="text-gray-600">
                  The key steps include project initiation, planning, execution, monitoring, and closure. For R&D and S&T projects, these steps are also followed by additional checks, including regular reviews and progress reports.
                </p>
              </div>

              {/* FAQ 4 */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800">Q4: What are quarterly progress reports?</h3>
                <p className="text-gray-600">
                  Quarterly progress reports are detailed updates submitted by the project investigators to ensure that the project is on track. These reports include financials, technical progress, and any issues encountered during the quarter.
                </p>
              </div>

              {/* FAQ 5 */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800">Q5: How are delays in R&D projects handled?</h3>
                <p className="text-gray-600">
                  Delays in R&D projects are usually discussed in review meetings. Based on the reasons for the delay, project timelines may be extended or additional resources may be provided to resolve the delay.
                </p>
              </div>

              {/* FAQ 6 */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800">Q6: How is funding allocated to S&T projects?</h3>
                <p className="text-gray-600">
                  Funding for S&T projects is provided by the Ministry of Coal. Allocation is based on the project proposal, budgetary requirements, and the anticipated impact of the project.
                </p>
              </div>

              {/* FAQ 7 */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800">Q7: What is the role of CMPDI in R&D project management?</h3>
                <p className="text-gray-600">
                  CMPDI (Central Mine Planning and Design Institute) is the nodal agency responsible for assessing and monitoring the progress of R&D projects. They ensure adherence to timelines, budgets, and provide necessary approvals.
                </p>
              </div>

              {/* FAQ 8 */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800">Q8: How do I get authorization to access project information?</h3>
                <p className="text-gray-600">
                  Project investigators receive a unique username and password after authorization by CMPDI. This allows them to access their projects through the system and submit updates.
                </p>
              </div>

              {/* FAQ 9 */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800">Q9: What is the purpose of technical subcommittee meetings?</h3>
                <p className="text-gray-600">
                  Technical subcommittee meetings are held to review the technical progress of projects, identify potential issues, and provide guidance to ensure that the project remains on track.
                </p>
              </div>

              {/* Add more FAQs as needed */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AssignedProjectInvestigator;
