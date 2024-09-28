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
            Facts
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
              {/* <p className="mb-3 text-gray-500">
                Our R&D division focuses on cutting-edge research and development to push the boundaries of technology. We aim to create transformative solutions that address the biggest challenges in the industry.
              </p> */}
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
              {/* <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-gray-900">
                Shaping the Future of Science and Technology
              </h2> */}
              <p className="mb-3 text-gray-500">
               No Project of S&T
              </p>
              {/* <p className="mb-3 text-gray-500">
                We bridge the gap between scientific research and practical applications, driving innovation and fostering collaboration between academia, industry, and government.
              </p>
              <a
                href="#"
                className="inline-flex items-center font-medium text-purple-600 hover:text-purple-800"
              >
                Explore more
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
              </a> */}
            </div>
          )}

          {/* Facts Section */}
          {activeTab === 'statistics' && (
            <div className="w-full p-6 bg-white rounded-lg md:p-8 text-gray-700">
              {/* <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-gray-900">
                Key Facts and Insights
              </h2> */}
              <p className="mb-3 text-gray-500">
               None
              </p>
              {/* <p className="mb-3 text-gray-500">
                From funding and project milestones to breakthrough discoveries, our Facts section provides a comprehensive overview of our achievements and goals.
              </p>
              <a
                href="#"
                className="inline-flex items-center font-medium text-purple-600 hover:text-purple-800"
              >
                View details
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
              </a> */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AssignedProjectInvestigator;
