import { motion } from 'framer-motion';
import profileImg from '../assets/janki_profile.jpg';

const Hero = () => {
  const nameText = "Janki Chauhan";
  const letters = nameText.split("");

  return (
    <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center md:justify-between px-0 md:px-6 py-10 bg-gradient-to-br from-blue-50 to-purple-100">
      {/* Text Section */}
      <motion.div
        className="md:w-3/4 text-center md:text-left mt-10 md:mt-0 flex flex-col items-center md:items-start mx-6 md:ml-12"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }} // Animation starts when in view
        viewport={{ once: true }} // Animation happens once when the element is fully in the viewport
        transition={{ duration: 2 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-800">
          Hello, I'm{" "}
          {/* Animate each letter of the name */}
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3, duration: 0.7 }} // Delay each letter's animation
              className={letter === " " ? "mr-2" : "text-blue-600"} // Add blue color to name letters
            >
              {letter}
            </motion.span>
          ))}
        </h1>

        <h2 className="text-xl md:text-2xl font-medium text-gray-700 mb-6">
          Full Stack Developer | Backend Engineer | UI Designer
        </h2>
        <p className="text-gray-600 mb-6">
          Passionate about building <span className="font-semibold">efficient and scalable web applications</span> with seamless user experiences. Specializing in <span className="font-semibold">React.js, Node.js, Express,</span> and <span className="font-semibold">MSSQL</span>. With a strong background in <span className="font-semibold">full-stack development</span>, I focus on creating <span className="font-semibold">responsive, user-friendly interfaces</span> and <span className="font-semibold">robust backend architectures</span>. I'm deeply committed to <span className="font-semibold">learning and applying best practices</span> in software development, always staying updated with the <span className="font-semibold">latest industry trends and technologies</span>. I enjoy <span className="font-semibold">collaborating with teams</span>, <span className="font-semibold">solving complex problems</span>, and delivering <span className="font-semibold">high-quality solutions</span>. I have experience in working with various <span className="font-semibold">frameworks, databases, and technologies</span> to build <span className="font-semibold">modern, efficient, and maintainable applications</span>.
        </p>


        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
          <a
            href="#projects"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
          >
            Contact Me
          </a>
        </div>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="md:w-1/4 flex justify-center md:justify-end mx-6"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 2, delay: 0.3 }}
      >
        <img
          src={profileImg}
          alt="Janki Chauhan"
          className="w-80 h-80 object-cover rounded-full border-4 border-blue-200 shadow-lg"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
