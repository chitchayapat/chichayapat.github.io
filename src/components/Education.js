import React from 'react';
import UWMadisonImage from '../assets/images/uw-madison.png';
import UMichImage from '../assets/images/umich.png';

const educations = [
  {
    title: 'University of Michigan, Ann Arbor',
    subtitle: 'Master of Science, Applied Statistics',
    gpa: '3.71 / 4.00',
    date: 'Aug 2022 - Present',
    description: '<ul class="list-disc pl-5"><li><b>Statistics Coursework</b>: Statistical Inference, Multivariate Statistical Analysis, Bayesian Modeling, Survey Sampling Theory</li></ul>',
    category: 'Academic',
    image: UMichImage,
  },
  {
    title: 'University of Wisconsin-Madison',
    subtitle: 'B.B.A in Actuarial Science, B.A. in Mathematics',
    gpa: '3.73 / 4.00',
    date: 'Sep 2018 - May 2022',
    description: '<ul class="list-disc pl-5"><li><b>Actuarial Exam</b>: Probability (July 2023), FM (Planning to Sit)</li><li><b>Actuarial Coursework</b>: Financial Mathematics, Risk Management, Loss Models, Life Contingencies</li></ul>',
    category: 'Academic',
    image: UWMadisonImage,
  },
  // Add more educations as needed
];

function Education() {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold">Education</h2>
      {educations.map((education, index) => (
        <div key={index} className="mt-3 border bg-white rounded shadow p-4">
          <div className="flex items-center">
            <div className="flex mr-3 h-12 w-12">
              {education.image && (
                <img src={education.image} alt="Education Logo" className="object-cover" />
              )}
            </div>
            <div className="max-w-4/5">
              <h2 className="text-l font-bold">{education.title}</h2>
              <h2 className="text-sm font-semibold mt-1"><span dangerouslySetInnerHTML={{ __html: education.subtitle }} /></h2>
              <h2 className="text-sm font-semibold">GPA: {education.gpa}</h2>
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-600">
              {education.date && (
                <div className="mt-2">{education.date}</div>
              )}
              {education.description && (
                <div className="mt-2">
                  <span dangerouslySetInnerHTML={{ __html: education.description }} />
                </div>
              )}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Education;
