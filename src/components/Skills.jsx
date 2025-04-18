import { motion } from 'framer-motion';

const skills = {
  Languages: ['Java (DSA)', 'PHP'],
  Frontend: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Tailwind CSS'],
  Backend: ['Node.js', 'Express.js'],
  Database: ['MySQL', 'MSSQL', 'MongoDB'],
  Frameworks: ['React.js'],
  APIs: ['RESTful APIs'],
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <motion.h2
        className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        My Skillset
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {Object.entries(skills).map(([category, list], index) => (
          <motion.div
            key={category}
            className="bg-white shadow-md hover:shadow-lg transition duration-300 rounded-2xl p-6 border border-gray-100"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold text-blue-700 mb-4">{category}</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {list.map((skill) => (
                <li key={skill} className="pl-1">{skill}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
