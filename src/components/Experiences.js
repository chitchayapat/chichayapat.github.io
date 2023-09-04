import React from 'react';
import UmichImage from '../assets/images/umich.png';
import UmichCSCARImage from '../assets/images/umich-cscar.png';
import TDRIImage from '../assets/images/tdri.png';
import KrungThaiImage from '../assets/images/krungthai.png';

const experiences = [
  {
    title: 'Consulting for Statistics, Computing & Analytics Research, University of Michigan',
    subtitle: 'Graduate Student Consultant',
    date: 'Jan 2023 - Present',
    description: '<ul class="list-disc pl-5"><li>Provide tailored consultation to over 50 University of Michigan researchers in understanding and utilizing statistical methods for data analysis and modeling. General topics include <b>survival analysis, hypothesis testing, power analysis, mixed models, GLMs, survey and experimental design</b></li><li>Advise clients on data management, missing data imputation, model analysis and validation to determine appropriate methods, improve analyses, and ensure effective and robust results</li></ul>',
    category: 'Academic',
    image: UmichCSCARImage,
  },
  {
    title: 'Political Science Department, University of Michigan',
    subtitle: 'Research Assistant',
    date: 'Apr 2023 - Present',
    description: '<ul class="list-disc pl-5"><li>Investigate voter behavior and preference for Thailand\'s 2023 Election using linear mixed model and conjoint analysis from 1249 respondents, focused on political awareness, attitude toward government and politicians, and policy preference</li><li>Engage in close collaboration with political scientists to formulate research questions, design and implement survey, and interpret outcome, resulting in the publication of 2 articles and 1 research paper</li></ul>',
    category: 'Academic',
    image: UmichImage,
  },
  {
    title: 'Krungthai Bank',
    subtitle: 'Model Analyst and Portfolio Management Intern',
    date: 'Jun 2022 - Aug 2022',
    description: '<ul class="list-disc pl-5"><li>Designed and developed macroeconomic module for early warning system of default status for the portfolio of 300 medium size business enterprises using principal component regression</li><li>Examined the inconsistency in default probability calculation in low-risk industry portfolio and formulated explanation to the problem referencing the studies in rating quantification and credit mapping bias</li></ul>',
    category: 'Academic',
    image: KrungThaiImage,
  },
  {
    title: 'Thailand Development Research Institute',
    subtitle: 'Inclusive Policy Analyst Intern',
    date: 'Feb 2021 - Jul 2021',
    description: '<ul class="list-disc pl-5"><li>Conducted surveys and 20 deep interviews to assess health and retirement benefits preference targeting medium-high income Thailand\'s informal workers and proposed a new Thailand\'s social security plan, anticipated to boost registration by 10%</li><li>Developed a population model to project Thailand\'s labor force demographic for the next 100 years and estimated the premium costs for the proposed social security plan benefiting 13 million informal workers</li></ul>',
    category: 'Academic',
    image: TDRIImage,
  }
  // Add more experiences as needed
];

function Experiences() {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold">Experiences</h2>
      {experiences.map((experience, index) => (
        <div key={index} className="mt-3 border bg-white rounded shadow p-4">
          <div className="flex items-center">
            <div className="flex mr-3 h-12 w-12">
              {experience.image && (
                <img src={experience.image} alt="Experience Logo" className="object-cover" />
              )}
            </div>
            <div className="max-w-4/5">
              <h2 className="text-l font-bold">{experience.title}</h2>
              <h2 className="text-sm font-bold mt-1"><span dangerouslySetInnerHTML={{ __html: experience.subtitle }} /></h2>
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-600">
              {experience.date && (
                <div className="mt-2">{experience.date}</div>
              )}
              {experience.description && (
                <div className="mt-2">
                  <span dangerouslySetInnerHTML={{ __html: experience.description }} />
                </div>
              )}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Experiences;
