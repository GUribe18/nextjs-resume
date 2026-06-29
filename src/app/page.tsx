export default function Resume() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 bg-white text-gray-900">
      
      {/* Header Section */}
      <header className="border-b-4 border-gray-900 pb-6 mb-8">
        <h1 className="text-5xl font-extrabold uppercase tracking-tight mb-2">Gabriel Uribe</h1>
        <p className="text-lg text-gray-600 font-medium">Business Analytics & Information Systems</p>
        <p className="text-sm text-gray-500 mt-2">guribe1805@gmail.com | (813) 995-3491 | www.linkedin.com/in/gabriel-uribe-08046038a</p>
      </header>

      {/* Education Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold uppercase tracking-wide text-gray-800 mb-4">Education</h2>
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-900">Bachelor of Science in Business</h3>
          <p className="text-gray-600">Focus: Business Analytics</p>
          <p className="text-sm font-medium text-grey-500 mt-1">University of South Florida | Expected Graduation: May 2028</p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold uppercase tracking-wide text-gray-800 mb-4 border-t border-gray-200 pt-6">Work experience & Projects</h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-900">Retail Optimization AI Analytics project</h3>
          <p className="text-sm text-gray-500 italic mb-2">Completed: May 2026</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Developed a Tableau dashboard analyzing sales, profit, and customer segments to uncover actionable insights for retail leadership.</li>
            <li>Designed a 2-agent CrewAI workflow and created an analytics context summary to generate recommendations based on the data present.</li>
            <li>Delivered a comprehensive final report and video presentation summarizing strategic findings.</li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-900">ABC Bakery Dynamic Website</h3>
          <p className="text-sm text-gray-500 italic mb-2">Completed: June 2026</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Designed and coded a responsive small business website from scratch.</li>
            <li>Implemented HTML structures, CSS styling, and JavaScript DOM manipulation for user feedback forms.</li>
          </ul>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold uppercase tracking-wide text-gray-800 mb-4 border-t border-gray-200 pt-6">Technical Skills</h2>
        <ul className="flex flex-wrap gap-2">
          <li className="bg-gray-100 px-3 py-1 rounded-md text-sm font-medium border border-gray-200">Tableau (Data Visualization)</li>
          <li className="bg-gray-100 px-3 py-1 rounded-md text-sm font-medium border border-gray-200">Statistical Analysis</li>
          <li className="bg-gray-100 px-3 py-1 rounded-md text-sm font-medium border border-gray-200">Excel</li>
          <li className="bg-gray-100 px-3 py-1 rounded-md text-sm font-medium border border-gray-200">Word & Powerpoint </li>
          <li className="bg-gray-100 px-3 py-1 rounded-md text-sm font-medium border border-gray-200">Javascript</li>
        </ul>
      </section>

    </main>
  );
}