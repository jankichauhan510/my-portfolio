import React from "react";

const ProjectDetails = ({ project, closeModal }) => {
  return (
    <div className="bg-white rounded-lg p-8 max-w-4xl w-full relative">
      <button
        className="absolute top-4 right-4 text-gray-600"
        onClick={closeModal}
      >
        <span className="text-2xl">×</span>
      </button>

      <h2 className="text-3xl font-bold text-indigo-600 mb-4">{project.title}</h2>

      <div className="mb-4">
        <h3 className="text-xl font-semibold text-indigo-500">Overview</h3>
        <p className="text-lg text-gray-700">{project.details}</p>
      </div>

      <div className="mb-4">
        <h3 className="text-xl font-semibold text-indigo-500">Technologies Used</h3>
        <p className="text-sm text-gray-500 italic">{project.tech}</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {project.images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Project Image ${idx}`}
            className="rounded-lg shadow-lg"
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectDetails;
