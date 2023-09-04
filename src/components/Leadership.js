import React from 'react';
import UWMadisonImage from '../assets/images/uw-madison.png';
import UWMadisonTSAImage from '../assets/images/uw-madison-tsa.png';

const experiences = [
  {
    title: 'Mathematics Department, University of Wisconsin-Madison',
    subtitle: 'Student Assistant - Trigonometry, Quantitative Reasoning and Problem-Solving',
    date: 'Sep 2021 - May 2022',
    description: '<ul class="list-disc pl-5"><li>Facilitated bi-weekly in-class discussions and activities on topics in college level algebra, trigonometry, and mathematical reasoning to 60 students. Prepared additional study materials and practice problems for bi-weekly drop-in tutoring sessions</li></ul>',
    category: 'Academic',
    image: UWMadisonImage,
  },
  {
    title: 'Thai Student Association, University of Wisconsin-Madison',
    subtitle: 'Vice Present, External Communication Chair',
    date: 'Sep 2019 - Dec 2021',
    description: '<ul class="list-disc pl-5"><li>Represented and shared the Thai culture to UW-Madison community through cultural events, collaborations, and fundraising</li><li>Launched a semester-long membership program to incentivize members participation, which increased engagement by 25%</li></ul>',
    category: 'Academic',
    image: UWMadisonTSAImage,
  }
  // Add more experiences as needed
];

function Leadership() {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold">Leadership and Involvements</h2>
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

export default Leadership;
