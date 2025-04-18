import { useState } from "react";
import { motion } from "framer-motion";

// Import images from src/assets folder
import auditoriumImage from "../assets/auditorium.png";
import timetableImage from "../assets/timetable.png";
import insuranceImage from "../assets/insurance.png";
import ProjectDetails from "./ProjectDetails"; // Import the new ProjectDetails component

// Add state for the selected project for modal functionality
const projects = [
  {
    title: "Auditorium Booking System",
    description: "Full-featured booking platform with admin dashboard, authentication, and payment simulation.",
    tech: "React.js, Node.js, Express.js, MSSQL, Tailwind CSS",
    images: [auditoriumImage, timetableImage],
    details: "Detailed description of the Auditorium Booking System project. It is designed to offer an easy way to manage auditorium bookings, allowing users to check availability, book slots, and handle payments seamlessly.",
  },
  {
    title: "Timetable Management System",
    description: "A class schedule planner with teacher and subject assignment functionality.",
    tech: "HTML, CSS, Bootstrap, PHP, MySQL",
    images: [timetableImage, insuranceImage],
    details: "Detailed description of the Timetable Management System project. This system helps in managing class schedules, assigning teachers, and ensuring that all classes are planned effectively for students.",
  },
  {
    title: "Insurance Management System",
    description: "Web platform for managing insurance policies, claims, and customers.",
    tech: "HTML, CSS, Bootstrap, PHP, MySQL",
    images: [insuranceImage, auditoriumImage],
    details: "Detailed description of the Insurance Management System project. The system is designed to help manage insurance policies, handle claims, and provide a seamless user experience for customers.",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <motion.h2
        className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300 border border-gray-100"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
          >
            <motion.img
              src={proj.images[0]}
              alt={`${proj.title} screenshot`}
              className="rounded-lg mb-4 h-40 w-full object-cover cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              onClick={() => openModal(proj)}
            />
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">{proj.title}</h3>
            <p className="text-gray-700 mb-2">{proj.description}</p>
            <p className="text-sm text-gray-500 mb-4 italic">{proj.tech}</p>
          </motion.div>
        ))}
      </div>

      {/* Display Modal for Project Details */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <ProjectDetails project={selectedProject} closeModal={closeModal} />
        </div>
      )}
    </section>
  );
};

export default Projects;
