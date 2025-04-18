const projects = [
    {
      title: "Auditorium Booking System",
      description: "Full-featured booking platform with admin dashboard, authentication, and payment simulation.",
      tech: "React.js, Node.js, Express.js, MSSQL, Tailwind CSS",
      github: "https://github.com/jankichauhan510",
      demo: "#"
    },
    {
      title: "Timetable Management System",
      description: "A class schedule planner with teacher and subject assignment functionality.",
      tech: "HTML, CSS, Bootstrap, PHP, MySQL",
      github: "https://github.com/jankichauhan510",
      demo: "#"
    },
    {
      title: "Insurance Management System",
      description: "Web platform for managing insurance policies, claims, and customers.",
      tech: "HTML, CSS, Bootstrap, PHP, MySQL",
      github: "https://github.com/jankichauhan510",
      demo: "#"
    }
  ];
  
  const Projects = () => {
    return (
      <section id="projects" className="py-16 px-4 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {projects.map((proj, idx) => (
            <div key={idx} className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
              <p className="text-gray-600 mb-2">{proj.description}</p>
              <p className="text-sm text-gray-500 mb-4">{proj.tech}</p>
              <div className="flex gap-4">
                <a href={proj.github} target="_blank" className="text-blue-600 hover:underline">Code</a>
                {proj.demo !== "#" && <a href={proj.demo} target="_blank" className="text-blue-600 hover:underline">Live</a>}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  export default Projects;
  