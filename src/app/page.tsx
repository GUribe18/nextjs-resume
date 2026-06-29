export default function Resume() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 bg-white text-gray-900">
      
      {/* Header Section */}
      <header className="border-b-4 border-gray-900 pb-6 mb-8">
        <h1 className="text-5xl font-extrabold uppercase tracking-tight mb-2">Gabriel Uribe</h1>
        <p className="text-lg text-gray-600 font-medium">Business Analytics & Information Systems</p>
        <p className="text-gray-700 mt-4 leading-relaxed">
    Business Analytics student at the University of South Florida with experience
    in Tableau, JavaScript, and data analysis. Passionate about using technology
    and data-driven insights to solve business problems and continuously develop
    technical and analytical skills.
  </p>
        <p className="text-sm text-gray-500 mt-2">guribe1805@gmail.com | (813) 995-3491 | www.linkedin.com/in/gabriel-uribe-08046038a</p>
      </header>

      {/* Education Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold uppercase tracking-wide text-gray-800 mb-4">Education</h2>
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-900">Bachelor of Science in Business</h3>
          <p className="text-gray-600">Focus: Business Analytics</p>
          <p className="text-sm font-medium text-gray-500 mt-1">University of South Florida | Expected Graduation: May 2028</p>
        </div>
      </section>

      {/* Experience and Projects Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold uppercase tracking-wide text-gray-800 mb-4 border-t border-gray-200 pt-6">Experience & Projects</h2>
        
        <div className="mb-6">
    <h3 className="text-xl font-semibold text-gray-900">
      Food Drive Volunteer
    </h3>
    <p className="text-sm text-gray-500 italic mb-2">
      Helping Hands Food Pantry – Wesley Chapel, FL | November 2021 – July 2024
    </p>
    <ul className="list-disc list-inside text-gray-700 space-y-1">
      <li> Collaborated with a team of approximately 10 volunteers to organize and distribute food efficiently.</li>
      <li> Demonstrated teamwork and collaboration while supporting community outreach efforts.</li>
      <li> Strengthened leadership and communication skills by working toward shared goals.</li>
    </ul>
  </div>

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

{/* Leadership & Involvement Section */}
<section className="mb-8">
  <h2 className="text-2xl font-bold uppercase tracking-wide text-gray-800 mb-4 border-t border-gray-200 pt-6">Leadership & Involvement</h2>
  <div className="mb-4">
    <h3 className="text-xl font-semibold text-gray-900">Player, FC Tampa Rangers UPSL (Semi-Pro Soccer Team)</h3>
    <p className="text-sm text-gray-500 italic mb-2">November 2024 – Present</p>
    <ul className="list-disc list-inside text-gray-700 space-y-1">
      <li> Collaborated with teammates in a competitive, performance-based environment requiring adaptability, leadership, and composure under pressure.</li>
      <li> Demonstrated accountability, resilience, and teamwork while working toward shared team objectives.</li>
      <li> Strengthened communication and problem-solving skills in a fast-paced and constantly changing environment.</li>
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