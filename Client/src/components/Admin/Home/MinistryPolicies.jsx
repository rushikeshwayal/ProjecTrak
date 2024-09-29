import React, { useState } from 'react';
import MinistryLogos from '../../Common/MinistryLogos'; // Ministry Logos component
import SideNavBarAdmin from './SideNavBarAdmin'; // Sidebar component

const MinistryPolicies = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Sidebar visibility control

  return (
    <div className="flex relative min-h-screen bg-gray-100">
      {/* Ministry Logos */}
      <div className="fixed top-0 left-0 right-0 z-40">
        <MinistryLogos />
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-[100px] left-0 transition-transform duration-300 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <SideNavBarAdmin isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      </div>

      {/* Main Content Area */}
      <div className={`transition-all duration-300 ml-${isSidebarOpen ? '80' : '20'} mt-[120px] p-8 flex-grow`}>
        <h1 className="text-4xl font-bold text-purple-800 mb-6">Indian Ministry Policies on R&D and S&T Project Management</h1>

        {/* Introduction Section */}
        <section className="mb-10">
          <p className="text-gray-600 mb-4">
            India’s Research & Development (R&D) and Science & Technology (S&T) project management policies are crafted to
            promote innovation, scientific growth, and technological advancements. These policies are driven by several
            ministries to enhance India’s global competitiveness in research and development.
          </p>
          <p className="text-gray-600 mb-4">
            This page provides an overview of key policies by major ministries involved in R&D and S&T project management.
            It aims to give an insight into the frameworks, guidelines, and strategic initiatives adopted by the Indian government to foster scientific research and technology-driven projects.
          </p>
        </section>

        {/* Ministry of Science & Technology */}
        <section className="mb-10 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Ministry of Science & Technology</h2>
          <p className="text-gray-600 mb-4">
            The Ministry of Science and Technology is the primary body responsible for promoting scientific research and
            technological development in India. The ministry comprises the Department of Science & Technology (DST), the
            Department of Biotechnology (DBT), and the Department of Scientific and Industrial Research (DSIR). 
          </p>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Key Policies</h3>
          <ul className="list-disc ml-8 text-gray-600">
            <li className="mb-2">
              <strong>National Science, Technology and Innovation Policy (STIP):</strong> This policy aims to strengthen India’s
              innovation ecosystem through the promotion of science and technology-driven projects.
            </li>
            <li className="mb-2">
              <strong>INSPIRE Programme:</strong> The Innovation in Science Pursuit for Inspired Research (INSPIRE) is a DST
              initiative aimed at attracting talented youth to pursue scientific research and innovation.
            </li>
            <li className="mb-2">
              <strong>Technology Development Programmes:</strong> These programmes aim to encourage technological
              innovations and developments across various sectors such as health, energy, and environment.
            </li>
          </ul>
        </section>

        {/* Ministry of Defence (DRDO) */}
        <section className="mb-10 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Ministry of Defence – Defence Research and Development Organisation (DRDO)</h2>
          <p className="text-gray-600 mb-4">
            The Ministry of Defence is responsible for R&D in the defense sector, primarily through its R&D wing—the Defence
            Research and Development Organisation (DRDO). DRDO focuses on promoting self-reliance in defense technologies
            and developing cutting-edge defense systems and products.
          </p>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Key Policies</h3>
          <ul className="list-disc ml-8 text-gray-600">
            <li className="mb-2">
              <strong>Defence R&D Policy:</strong> This policy promotes innovation in defense technologies to enhance national
              security and reduce dependence on foreign technology.
            </li>
            <li className="mb-2">
              <strong>Make in India for Defence:</strong> A major initiative encouraging domestic development and production of
              defense equipment.
            </li>
            <li className="mb-2">
              <strong>Young Scientist Initiative:</strong> DRDO promotes young researchers in defense technology development through
              this initiative.
            </li>
          </ul>
        </section>

        {/* Ministry of Electronics and Information Technology (MeitY) */}
        <section className="mb-10 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Ministry of Electronics and Information Technology (MeitY)</h2>
          <p className="text-gray-600 mb-4">
            The Ministry of Electronics and Information Technology (MeitY) plays a crucial role in R&D for the electronics and IT
            sectors. It oversees policies that promote innovation and growth in digital infrastructure, AI, cybersecurity, and
            electronics manufacturing.
          </p>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Key Policies</h3>
          <ul className="list-disc ml-8 text-gray-600">
            <li className="mb-2">
              <strong>Digital India Programme:</strong> Aimed at transforming India into a digitally empowered society, this policy
              focuses on developing IT and digital infrastructure.
            </li>
            <li className="mb-2">
              <strong>National Cyber Security Policy:</strong> A strategic framework to protect critical information infrastructure and
              foster cybersecurity R&D.
            </li>
            <li className="mb-2">
              <strong>Promotion of Electronics R&D:</strong> MeitY promotes R&D in electronics manufacturing and design, encouraging
              local and global collaborations.
            </li>
          </ul>
        </section>

        {/* Ministry of Health and Family Welfare */}
        <section className="mb-10 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Ministry of Health and Family Welfare</h2>
          <p className="text-gray-600 mb-4">
            The Ministry of Health and Family Welfare (MoHFW) plays an essential role in R&D for healthcare and medical
            technology projects. The ministry oversees the development of healthcare policies and promotes research in
            biotechnology and healthcare innovations.
          </p>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Key Policies</h3>
          <ul className="list-disc ml-8 text-gray-600">
            <li className="mb-2">
              <strong>National Health Policy:</strong> Focuses on building research capacity in healthcare through strategic
              partnerships and funding for health technology innovations.
            </li>
            <li className="mb-2">
              <strong>National Biotechnology Development Strategy:</strong> Overseen by the Department of Biotechnology (DBT),
              this strategy promotes research in biomedical technologies, including vaccines, diagnostics, and pharmaceuticals.
            </li>
          </ul>
        </section>

        {/* Conclusion */}
        <section className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Conclusion</h2>
          <p className="text-gray-600">
            The various Indian ministries are instrumental in shaping the country's R&D and S&T landscapes. By implementing
            strategic policies, these ministries aim to foster innovation, promote self-reliance, and enable India to compete
            globally in science and technology.
          </p>
        </section>
      </div>
    </div>
  );
};

export default MinistryPolicies;
