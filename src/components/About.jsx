import { motion } from 'framer-motion';

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-white to-blue-50 px-4 md:px-8 lg:px-16 text-center"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-8"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        I'm a <span className="font-semibold text-blue-600">Computer Engineering</span> student at <span className="font-semibold">The Maharaja Sayajirao University of Baroda</span> with hands-on experience in <span className="font-semibold text-purple-600">full stack development</span>, especially in backend systems. I love crafting efficient web apps using <span className="font-semibold">React.js</span>, <span className="font-semibold">Node.js</span>, and databases like <span className="font-semibold">MSSQL</span> and <span className="font-semibold">MongoDB</span>. I’m passionate about <span className="italic text-blue-500">learning new technologies</span> and <span className="italic text-purple-500">solving real-world problems through code</span>.
      </motion.p>

      <motion.div
        className="flex flex-col md:flex-row gap-4 justify-center"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <a
          href="/JankiChauhan_Resume.pdf" // Adjust if your resume is in a different path
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 transition duration-300"
        >
          👀 View Resume
        </a>
        <a
          href="/JankiChauhan_Resume.pdf"
          download
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-300"
        >
          ⬇️ Download Resume
        </a>
      </motion.div>
    </section>
  );
};

export default About;
