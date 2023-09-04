import React from 'react';

const groups = [
  {
    name: "Languages",
    items: ["Thai (native)", "English (bilingual proficiency)"]
  },
  {
    name: "Programming Languages",
    items: ["R", "Python", "Excel", "LaTeX", "SQL", "SPSS", "SAS"]
  },
]

function Skills() {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold">Skills</h2>
      {groups.map((group, index) => (
        <div key={index}>
          <h3 className="text-lg font-bold mt-2">{group.name}</h3>
          <div className="mt-1">
            {group.items.map((item, index) => (
              <button className="text-sm py-1 px-3 mt-1 font-semibold bg-orange-200 hover:bg-orange-300 rounded-full transition duration-200 mr-1">
                {item}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skills;
