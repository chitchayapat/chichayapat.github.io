import React from 'react';

const projects = [
  {
    title: 'miLead Consulting Club',
    subtitle: 'Consultant',
    date: 'Apr 2023 - May 2023',
    description: '<ul class="list-disc pl-5"><li>Analyzed and conducted a competitive landscape analysis and productivity technology assessment in the waste management industry, focusing on cost-effectiveness and productivity enhancement strategies</li><li>Executed SWOT analysis on a client (Fortune 500 company), leading to recommendations for integrating AI technology and telematics data and establishing partnership with software company to optimize productivity</li></ul>',
  },
  {
    title: 'Customer Attrition Prediction',
    subtitle: 'Team Leader, Meeting Facilitator',
    date: 'Jan 2023 - Apr 2023',
    description: '<ul class="list-disc pl-5"><li>Performed <b>logistic regression</b>, <b>GAM</b>, and <b>random forest</b> using the <b>sklearn</b> library to predict customer attrition (Balanced Error Rate = 0.01) and identify non-linear relationships using customer demographic and spending activities</li><li>Analyzed and evaluated variables selection and model performance, provided model justification, identified limitations, and communicated results through an oral presentation and study report</li></ul>',
  },
  {
    title: 'Google Solution 2022 - Parrot.ai',
    subtitle: 'Team Leader',
    date: 'Jan 2022 - Apr 2022',
    description: '<ul class="list-disc pl-5"><li>Initiated and designed a platform that allows people with literacy difficulty to fill out form without having to read and write using Google text-to-speech and speech-to-text API to improve access in basic governmental services</li></ul>',
  }
  // Add more projects as needed
];

function Projects() {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold">Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="mt-3 border bg-white rounded shadow p-4">
          <h2 className="text-l font-bold mb-2">{project.title}</h2>
          <p className="text-sm text-gray-600">
            {project.date && (
              <div>
                <span dangerouslySetInnerHTML={{ __html: project.date }} /><br />
              </div>
            )}
            {project.description && (
              <div className='mt-2'>
                <span dangerouslySetInnerHTML={{ __html: project.description }} />
              </div>
            )}
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="mr-2">
                <button className="text-xs py-1 px-3 mt-3 border text-white font-semibold bg-green-600 border-green-700  hover:bg-green-700 rounded transition duration-200">
                  Website
                </button>
              </a>
            )}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Projects;
