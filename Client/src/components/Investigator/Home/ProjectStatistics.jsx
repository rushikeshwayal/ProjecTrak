// ProjectStatistics.jsx

import  { useState } from 'react';
import { Bar, Pie, Line } from 'react-chartjs-2';
import { Chart as ChartJS, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, CategoryScale, LineElement, PointElement } from 'chart.js';
import MinistryLogos from '../../Common/MinistryLogos';
import SideNavBarInvestigator from './SideNavBarInvestigator';

// Registering Chart.js components
ChartJS.register(LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, CategoryScale, LineElement, PointElement);

const ProjectStatistics = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Sample data for project statistics
  const projectData = {
    labels: ['Project A', 'Project B', 'Project C', 'Project D'],
    datasets: [
      {
        label: 'Funding Amount (in INR)',
        data: [500000, 300000, 450000, 700000],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const pieData = {
    labels: ['Ongoing', 'Completed', 'Pending'],
    datasets: [
      {
        data: [60, 30, 10],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  // Resource allocation data for a new line chart
  const resourceData = {
    labels: ['Phase 1', 'Phase 2', 'Phase 3', 'Phase 4'],
    datasets: [
      {
        label: 'Resources Allocated (in number)',
        data: [5, 10, 15, 7],
        fill: false,
        backgroundColor: 'rgba(255, 206, 86, 1)',
        borderColor: 'rgba(255, 206, 86, 1)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="flex relative min-h-screen bg-gray-100">
      <div className="fixed top-0 left-0 right-0 z-40">
        <MinistryLogos />
      </div>

      {/* Sidebar - left side */}
      <div className={`fixed top-[100px] left-0 mt-[100px] transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <SideNavBarInvestigator isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      </div>

      {/* Main content area */}
      <div className={`flex-grow transition-all duration-300 ml-${isSidebarOpen ? '80' : '20'} mt-[100px] p-8`}>
        <h2 className="text-4xl font-bold mb-8 text-purple-700">Project Statistics</h2>
        
        {/* Funding Bar Chart */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h3 className="text-3xl font-bold mb-6 text-purple-700">Funding Amount per Project</h3>
          <Bar
            data={projectData}
            options={{
              scales: {
                y: {
                  beginAtZero: true,
                  title: {
                    display: true,
                    text: 'Amount (INR)',
                  },
                },
                x: {
                  type: 'category', // Ensure the x-axis is a category scale
                },
              },
              plugins: {
                legend: {
                  display: true,
                },
              },
            }}
          />
        </div>

        {/* Project Status Pie Chart */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h3 className="text-3xl font-bold mb-6 text-purple-700">Project Status Distribution</h3>
          <div className="h-60 w-full flex justify-center items-center">
            <Pie
              data={pieData}
              options={{
                plugins: {
                  legend: {
                    position: 'top',
                  },
                },
              }}
            />
          </div>
        </div>

        {/* Resources Allocation Line Chart */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h3 className="text-3xl font-bold mb-6 text-purple-700">Resources Allocation Over Phases</h3>
          <Line
            data={resourceData}
            options={{
              scales: {
                y: {
                  beginAtZero: true,
                  title: {
                    display: true,
                    text: 'Number of Resources',
                  },
                },
                x: {
                  type: 'category', // Ensure the x-axis is a category scale
                },
              },
              plugins: {
                legend: {
                  display: true,
                },
              },
            }}
          />
        </div>

        {/* Industry Logos Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h3 className="text-3xl font-bold mb-6 text-purple-700">Associated Industry Logos</h3>
          {/* Uncomment and implement IndustryLogos component if needed */}
          {/* <IndustryLogos /> */}
        </div>
      </div>
    </div>
  );
};

export default ProjectStatistics;
