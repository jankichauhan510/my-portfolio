const skills = {
    Languages: ['Java (DSA)'],
    Frontend: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Tailwind CSS'],
    Backend: ['Node.js', 'Express.js'],
    Database: ['MySQL', 'MSSQL', 'MongoDB'],
    Frameworks: ['React.js'],
    APIs: ['RESTful APIs']
  };
  
  const Skills = () => {
    return (
      <section id="skills" className="py-16 bg-gray-50 px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {Object.entries(skills).map(([category, list]) => (
            <div key={category}>
              <h3 className="text-xl font-semibold mb-2">{category}</h3>
              <ul className="text-gray-600 list-disc list-inside">
                {list.map((skill) => <li key={skill}>{skill}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>
    );
  };
  export default Skills;
  