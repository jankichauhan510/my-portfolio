const Hero = () => {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gradient-to-br from-blue-100 to-purple-100">
        <h1 className="text-5xl font-bold mb-4">Hi, I’m <span className="text-blue-600">Janki Chauhan</span></h1>
        <p className="text-xl text-gray-700 mb-6">Full Stack Developer | Backend Specialist | Tech Enthusiast</p>
        <div className="flex gap-4">
          <a href="#projects" className="px-6 py-2 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition">View Projects</a>
          <a href="#contact" className="px-6 py-2 border border-blue-600 text-blue-600 rounded-xl hover:bg-blue-100 transition">Contact Me</a>
        </div>
      </section>
    );
  };
  export default Hero;
  