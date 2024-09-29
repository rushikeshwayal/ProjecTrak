import { useParams } from 'react-router-dom';

const reportsData = {
  '/reports/initiation.pdf': {
    title: 'Project Initiation Report',
    content: 'This is the report for the project initiation phase...',
  },
  '/reports/phase1.pdf': {
    title: 'Phase 1 Report',
    content: 'This is the report for Phase 1 completion...',
  },
  '/reports/phase2.pdf': {
    title: 'Phase 2 Report',
    content: 'This is the report for Phase 2 completion...',
  },
};

const ReportPage = () => {
  const { reportId } = useParams(); // Extract the reportId from the URL

  const report = reportsData[reportId]; // Get the report data based on the ID

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 text-purple-700">{report.title}</h1>
      <p className="text-gray-700">{report.content}</p>
    </div>
  );
};

export default ReportPage;
